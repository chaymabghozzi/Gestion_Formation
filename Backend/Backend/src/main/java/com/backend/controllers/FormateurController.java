package com.backend.controllers;

import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.models.Formateur;
import com.backend.repository.FormateurRepository;
import com.backend.repository.organismeRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class FormateurController {
	
	@Autowired
	FormateurRepository formateurrepository ;
	@Autowired
	organismeRepository organismerepository ;

	@PostMapping("/addFormateur/{organismeId}")
	public Formateur createFormateur(@PathVariable(value = "organismeId") Long organismeId,@RequestBody  Formateur formateur) {
		return organismerepository.findById(organismeId).map(organisme -> {
			formateur.setOrganisme(organisme);
			return formateurrepository.save(formateur);
		})	.orElse(null);
	}
	
	@GetMapping("/formateurs/{organismeId}")
	public List<Formateur> getAllFormateursByOrganismeId(@PathVariable(value = "organismeId") Long organismeId) {
		return formateurrepository.findByOrganismeId(organismeId);
	}
	
	@GetMapping("/formateur/{formateurId}")
	public Optional<Formateur> getFormateur(@PathVariable(value = "formateurId") Long formateurId) {
		return formateurrepository.findById(formateurId);
	}
	
	@GetMapping("/formateurs")
	public List<Formateur> getFormateurs() {
		return formateurrepository.findAll();
	}
	
	@PutMapping("/formateur/{formateurId}/{organismeId}")
	public Formateur updateformateur(@PathVariable(value = "organismeId") Long organismeId,
			@PathVariable(value = "formateurId") Long formateurId,  Formateur formateurRequest) {

		return formateurrepository.findById(formateurId).map(formateur -> {
			
			return organismerepository.findById(organismeId).map(organisme ->  {
				formateur.setNom(formateurRequest.getNom());
				formateur.setPrenom(formateurRequest.getPrenom());
				formateur.setType(formateurRequest.getType());
				formateur.setEmail(formateurRequest.getEmail());
				formateur.setTel(formateurRequest.getTel());
				formateur.setOrganisme(organisme);
				return formateurrepository.save(formateur);
			}).orElseThrow(null);
			
		}).orElseThrow(null);
	}
	
	
	@DeleteMapping("/formateurs/{formateurId}/{organismeId}")
	public ResponseEntity<?> deleteFormateur(@PathVariable(value = "organismeId") Long organismeId,
			@PathVariable(value = "formateurId") Long formateurId) {
		return formateurrepository.findByIdAndOrganismeId(formateurId, organismeId).map(formateur -> {
			formateurrepository.delete(formateur);
			return ResponseEntity.ok().build();
		}).orElseThrow(null);
	}
	
}