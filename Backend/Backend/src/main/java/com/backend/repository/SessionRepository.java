package com.backend.repository;


import java.util.List;
import java.util.Optional;

import com.backend.models.Formation;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import com.backend.models.Session;



public interface SessionRepository extends JpaRepository<Session, Long> {

    List<Session> findByFormateurId(Long formateurId);
    Optional<Session> findByIdAndFormateurId(Long id, Long formateurId);
}
