package com.backend.repository;

import com.backend.models.Profil;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ProfilRepository extends JpaRepository<Profil, Long> {
}