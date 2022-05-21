package com.backend.controllers;

import java.util.List;

import com.backend.models.Pays;
import com.backend.repository.PaysRepository;

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

@RestController

@CrossOrigin(origins = "http://localhost:4200")

public class PaysController {
	@Autowired
	PaysRepository paysRepository;

	@GetMapping("/pays")
	public List<Pays> getAllPays() {
		List<Pays> pays = paysRepository.findAll();
		return pays;
	}

	@PostMapping("/addPays")
	public Pays createPays(@RequestBody Pays pays) {
		return paysRepository.save(pays);
	}

	@GetMapping("/pays/{id}")
	public Pays getPaysById(@PathVariable(value = "id") Long paysId) {
		return paysRepository.findById(paysId).orElseThrow(null);
	}

	@PutMapping("/updatePays/{id}")
	public Pays updatePays(@PathVariable(value = "id") Long Id, @RequestBody Pays paysDetails) {

		Pays pays = paysRepository.findById(Id).orElseThrow(null);

		pays.setNom(paysDetails.getNom());

		Pays updatedPays = paysRepository.save(pays);
		return updatedPays;
	}

	@DeleteMapping("/deletePays/{id}")
	public ResponseEntity<?> deletePays(@PathVariable(value = "id") Long paysId) {
		Pays pays = paysRepository.findById(paysId).orElseThrow(null);

		paysRepository.delete(pays);

		return ResponseEntity.ok().build();
	}

}