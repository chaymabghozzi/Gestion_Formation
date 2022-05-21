package com.backend.controllers;

import java.util.Set;

import com.backend.models.Participant;
import com.backend.models.Session;
import com.backend.repository.ParticipantRepository;
import com.backend.repository.ProfilRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

@RestController

@CrossOrigin(origins = "http://localhost:4200")

public class ParticipantController {

	@Autowired
	ParticipantRepository participantRepository;

	@Autowired
	ProfilRepository profilRepository;

	@GetMapping("/profil/{profilId}/participants")
	public Page<Participant> getAllParticipantByProfilIdorganismeID(@PathVariable(value = "profilId") Long profilId,
			 Pageable pageable) {
		return participantRepository.findByProfilId(profilId,pageable);

	}
	@GetMapping("/participant/{id}")
	public Participant getParticipantById(@PathVariable(value = "id") Long participantId) {
	    return participantRepository.findById(participantId).orElseThrow(null);
	}

	@GetMapping("/sessionsOfParticipant/{idParticipant}")
	public Set<Session>  getParticipantBySessionId(@PathVariable(value = "idParticipant") Long participantId) {
	Participant participant = participantRepository.findById(participantId).orElseThrow(null);
		return participant.getSession();
	 }

	@PostMapping("/profil/{profilId}/addparticipant" )
	public Participant createParticipantByOrganisme(@PathVariable(value = "profilId") Long profilId,
			 @RequestBody Participant participant) {
		return profilRepository.findById(profilId).map(profil -> {

				participant.setProfil(profil);
			
			return participantRepository.save(participant);
		}).orElseThrow(null);
	}

	@PutMapping("/profil/{profilId}/updateParticipant/{participantId}")
	public Participant updateParticipant(@PathVariable(value = "profilId") Long profilId,
			 @PathVariable(value = "participantId") Long participantId,
			@RequestBody Participant participantRequest) {

		return participantRepository.findById(participantId).map((participant) -> {

			return profilRepository.findById(profilId).map((profil) -> {
				participant.setNom(participantRequest.getNom());
				participant.setPrenom(participantRequest.getPrenom());
				participant.setType(participantRequest.getType());
				participant.setEmail(participantRequest.getEmail());
				participant.setTel(participantRequest.getTel());
				participant.setOrganisme(participantRequest.getOrganisme());
				participant.setPays(participantRequest.getPays());
				participant.setProfil(profil);
				return participantRepository.save(participant);
				
			}).orElseThrow(null);

	}).orElseThrow(null);
		
	} 

	@DeleteMapping("/profil/{profilId}/deleteParticipant/{participantId}")
	public ResponseEntity<?> deleteParticipant(@PathVariable(value = "profilId") Long profilId,
			@PathVariable(value = "participantId") Long participantId) {
		return participantRepository.findByIdAndProfilId(participantId, profilId).map(participant -> {

				participantRepository.delete(participant);
				return ResponseEntity.ok().build();
			}).orElseThrow(null);
		
	}
}
