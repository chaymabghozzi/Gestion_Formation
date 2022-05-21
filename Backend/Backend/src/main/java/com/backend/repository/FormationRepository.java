package com.backend.repository;

import com.backend.models.Formation;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.Set;

public interface FormationRepository extends JpaRepository<Formation, Long> {

    Page<Formation> findByDomaineId(Long domaineId, Pageable pageable);
    Optional<Formation> findByIdAndDomaineId(Long id, Long domaineId);
    Optional<Formation> findById(Long id);

}