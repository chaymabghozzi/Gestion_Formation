package com.backend.controllers;

import java.util.List;
import com.backend.models.Profil;
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

@RestController

@CrossOrigin(origins = "http://localhost:4200")

public class ProfilController {

    @Autowired
    ProfilRepository profilRepository;

    @GetMapping("/profils")
    public List<Profil> getAllProfils() {
        List<Profil> profil = profilRepository.findAll();
        return profil;
    }

    @PostMapping("/addProfil")
    public Profil createProfil(@RequestBody Profil profil) {
        return profilRepository.save(profil);
    }

    @GetMapping("/profil/{id}")
    public Profil getProfilById(@PathVariable(value = "id") Long profilId) {
        return profilRepository.findById(profilId).orElseThrow(null);
    }

    @PutMapping("/updateProfil/{id}")
    public Profil updateProfil(@PathVariable(value = "id") Long Id, @RequestBody Profil profilDetails) {

        Profil profil = profilRepository.findById(Id).orElseThrow(null);

        profil.setLibelle(profilDetails.getLibelle());

        Profil updatedProfil = profilRepository.save(profil);
        return updatedProfil;
    }

    @DeleteMapping("/deleteProfil/{id}")
    public ResponseEntity<?> deletePays(@PathVariable(value = "id") Long profilId) {
        Profil profil = profilRepository.findById(profilId).orElseThrow(null);

        profilRepository.delete(profil);

        return ResponseEntity.ok().build();
    }

}
