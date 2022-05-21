package com.backend.controllers;
import com.backend.models.Formation;
import com.backend.repository.DomaineRepository;
import com.backend.repository.FormationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class FormationController {

	    @Autowired
	    private FormationRepository formationRepository;
	

	    @Autowired
	    private DomaineRepository domaineRepository;

	    @GetMapping("/domaines/{domaineId}/formations")
	    public Page<Formation> getAllFormationsByDomaineId(@PathVariable (value = "domaineId") Long domaineId,
	                                                Pageable pageable) {
	        return formationRepository.findByDomaineId(domaineId, pageable);
	    }
	    
	    			    
		@PostMapping("/domaines/{domaineId}/formations")
		public Formation createFormation(@PathVariable (value = "domaineId") Long domaineId,
		                              @RequestBody Formation formation) {
		    return domaineRepository.findById(domaineId).map(domaine -> {
		    	formation.setDomaine(domaine);
		        return formationRepository.save(formation);
		    }).orElseThrow(null);
		}	
		


	@PutMapping("/domaines/{domaineId}/formations/{formationId}")
	public Formation updateFormation(@PathVariable (value = "domaineId") Long domaineId,
	                             @PathVariable (value = "formationId") Long formationId,
	                              Formation formationRequest) {
	    return formationRepository.findById(formationId).map(formation -> {
	    	
		    return domaineRepository.findById(domaineId).map(domaine -> {
		    	
	    	formation.setTitre(formationRequest.getTitre());
	    	formation.setType(formationRequest.getType());
	    	formation.setAnnee(formationRequest.getAnnee());
	    	formation.setNb_session(formationRequest.getNb_session());
	    	formation.setBudget(formationRequest.getBudget());
	    	formation.setDuree(formationRequest.getDuree());
	    	formation.setDomaine(domaine);
	    	System.out.println(formationRequest.getDomaine());


	        return formationRepository.save(formation);
		    }).orElseThrow(null);

	    }).orElseThrow(null);
	}
	
	@DeleteMapping("/domaines/{domaineId}/formations/{formationId}")
	public ResponseEntity<?> deleteFormation(@PathVariable (value = "domaineId") Long domaineId,
	                          @PathVariable (value = "formationId") Long formationId) {
	    return formationRepository.findByIdAndDomaineId(formationId, domaineId).map(formation -> {
	    	formationRepository.delete(formation);
	        return ResponseEntity.ok().build();
	    }).orElseThrow(null);
	}
	

}