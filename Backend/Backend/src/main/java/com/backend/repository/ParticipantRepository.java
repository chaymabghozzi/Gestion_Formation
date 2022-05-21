package com.backend.repository;

import java.util.Optional;
import java.util.Set;

import com.backend.models.Participant;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ParticipantRepository extends JpaRepository<Participant, Long> {
    
    Page<Participant> findByProfilId(Long profilId, Pageable pageable);
    
    Optional<Participant> findByIdAndProfilId(Long id, Long profilId);
    
    Optional<Participant> findById(Long id);



}