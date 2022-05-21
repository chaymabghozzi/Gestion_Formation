package com.backend.repository;

import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import com.backend.models.Formateur;



public interface FormateurRepository extends JpaRepository<Formateur, Long> {
	List<Formateur> findByOrganismeId(Long organismeIde);
	 Optional<Formateur> findByIdAndOrganismeId(Long id, Long organismeId);
	


}
