package com.backend.controllers;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.models.Organisme;

import com.backend.repository.organismeRepository;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")

public class OrganismeController {
	
	@Autowired
	organismeRepository organismerepository ;

	@PostMapping("/addOrganisme")
	public Organisme createOrganisme(@RequestBody Organisme orgasnisme) {
	    return organismerepository.save(orgasnisme);
	}
	

	@GetMapping("/organismes")
	public List<Organisme> getAllOrganisme() {
		List<Organisme> orgasnisme = organismerepository.findAll();
	    return orgasnisme;
	}
	
	@GetMapping("/organisme/{id}")
	public Organisme getOrganismeById(@PathVariable(value = "id") Long organismeId) {
	    return organismerepository.findById(organismeId).orElseThrow(null);
	}


	@PutMapping("/updateOrganisme/{id}")
	public Organisme updateOrganisme(@PathVariable(value = "id") Long Id,  Organisme organismeDetails) {

		Organisme orgasnisme = organismerepository.findById(Id).orElseThrow(null);
	    
		orgasnisme.setLibelle(organismeDetails.getLibelle());
	
		Organisme updatedOrganisme= organismerepository.save(orgasnisme);
	    return updatedOrganisme;
	}

	@DeleteMapping("/deleteOragnisme/{id}")
	public ResponseEntity<?> deleteOrganisme(@PathVariable(value = "id") Long organismeId) {
		Organisme orgasnisme  = organismerepository.findById(organismeId).orElseThrow(null);

		organismerepository.delete(orgasnisme);

	    return ResponseEntity.ok().build();
	}


}
