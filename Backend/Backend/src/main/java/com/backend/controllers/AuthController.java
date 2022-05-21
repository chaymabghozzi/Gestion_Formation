package com.backend.controllers;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import javax.validation.Valid;

import com.backend.payloadRequest.LoginRequest;
import com.backend.payloadRequest.SignupRequest;
import com.backend.payloadResponse.JwtResponse;
import com.backend.payloadResponse.MessageResponse;

import com.backend.securityJwt.JwtUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.backend.models.ERole;
import com.backend.models.Role;
import com.backend.models.User;

import com.backend.repository.RoleRepository;
import com.backend.repository.UserRepository;

import com.backend.securityService.UserDetailsImpl;

@CrossOrigin(origins ="http://localhost:4200")
@RestController
@RequestMapping("/api/auth")
public class AuthController {

	@Autowired
	AuthenticationManager authenticationManager;

	@Autowired
	UserRepository userRepository;

	@Autowired
	RoleRepository roleRepository;

	@Autowired
	PasswordEncoder encoder;

	@Autowired
	JwtUtils jwtUtils;

	@PostMapping("/signin")
	public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {

		Authentication authentication = authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));

		SecurityContextHolder.getContext().setAuthentication(authentication);
		String jwt = jwtUtils.generateJwtToken(authentication);

		UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
		List<String> roles = userDetails.getAuthorities().stream()
				.map(item -> item.getAuthority())
				.collect(Collectors.toList());

		return ResponseEntity.ok(new JwtResponse(jwt,
				userDetails.getId(),
				userDetails.getUsername(),
				roles,
				userDetails.getEmail()));
	}

	@PostMapping("/signup")
	public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest signUpRequest) {
		if (userRepository.existsByUsername(signUpRequest.getUsername())) {
			return ResponseEntity
					.badRequest()
					.body(new MessageResponse("Error: Username is already taken!"));
		}



		// Create new user's account
		User user = new User(signUpRequest.getUsername(),
				encoder.encode(signUpRequest.getPassword()),
				signUpRequest.getNom(),
				signUpRequest.getPrenom(),
				signUpRequest.getEmail()
		);

		Set<String> strRoles = signUpRequest.getRole();
		Set<Role> roles = new HashSet<>();

		if (strRoles == null) {
			Role userRole = roleRepository.findByName(ERole.ROLE_USER)
					.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
			roles.add(userRole);
		} else {
			strRoles.forEach(role -> {
				switch (role) {
					case "admin":
						Role adminRole = roleRepository.findByName(ERole.ROLE_ADMIN)
								.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
						roles.add(adminRole);

						break;
					default:
						Role userRole = roleRepository.findByName(ERole.ROLE_USER)
								.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
						roles.add(userRole);
				}
			});
		}

		user.setRoles(roles);
		userRepository.save(user);

		return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
	}
	@GetMapping("/user/{id}")
	public User getUserById(@PathVariable(value = "id") Long Id) {
		return userRepository.findById(Id).orElseThrow(null);
	}

	@GetMapping("/users")
	public List<User> getAllUsers() {
		List<User> users = userRepository.findAll();
		return users;

	}


	@DeleteMapping("/deleteuser/{id}")
	public ResponseEntity<?> deleteUser(@PathVariable(value = "id") Long Id) {
		User user  = userRepository.findById(Id).orElseThrow(null);
		userRepository.delete(user);
		return ResponseEntity.ok().build();

	}



	@PutMapping("/updateuser/{id_user}")
	public ResponseEntity<?> updateUser(@PathVariable(value = "id_user") Long id_user, @Validated @RequestBody com.backend.payloadRequest.updateRequest updateRequest) {
		return userRepository.findById(id_user).map(user -> {

			user.setNom(updateRequest.getNom());
			user.setPrenom( updateRequest.getPrenom());

			user.setPassword( encoder.encode(updateRequest.getPassword()));
			user.setEmail(updateRequest.getEmail());
			Set<Role> roles = new HashSet<>();
			Role userRole = roleRepository.findByName(ERole.ROLE_USER)
					.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
			roles.add(userRole);
			user.setRoles(roles);


			userRepository.save(user);

			return ResponseEntity.ok(new MessageResponse("User updated successfully!"));
		}).orElseThrow(null);
	}

}
