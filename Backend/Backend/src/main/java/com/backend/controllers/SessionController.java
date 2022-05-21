package com.backend.controllers;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import com.backend.models.Formation;
import com.backend.models.Participant;

import com.backend.models.SessionRequest;
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
import com.backend.models.Session;
import com.backend.repository.FormationRepository;
import com.backend.repository.ParticipantRepository;
import com.backend.repository.SessionRepository;
import com.backend.repository.FormateurRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class SessionController {


	@Autowired
	private FormateurRepository formateurRepo;

	@Autowired
	private SessionRepository sessionRepo;


	@Autowired
	private FormationRepository formationRepository;
	@Autowired
	private ParticipantRepository participantRepository;


	@PostMapping("addSession/{formateurId}")
	public Session createSession(@PathVariable(value= "formateurId") Long formateurId, @RequestBody Session session) {
		return formateurRepo.findById(formateurId).map(formateur -> {
			session.setFormateur(formateur);

			return sessionRepo.save(session);
		})	.orElse(null);
	}


	@GetMapping("/formateur/{formateurId}/sessions")
	public List<Session> getAllSessionsByFormateurId(@PathVariable (value = "formateurId") Long formateurId) {
		return sessionRepo.findByFormateurId(formateurId);

	}

	@DeleteMapping("deleteSession/formateur/{formateurId}/sessions/{sessionId}")
	public ResponseEntity<?> deleteSession(@PathVariable (value = "formateurId") Long formateurId,
										   @PathVariable (value = "sessionId") Long sessionId) {
		return sessionRepo.findByIdAndFormateurId(sessionId, formateurId).map(session -> {
			sessionRepo.delete(session);
			return ResponseEntity.ok().build();
		}).orElseThrow(null);
	}

	@PutMapping("editSession/formateur/{formateurId}/sessions/{sessionId}")
	public Session updateSession(@PathVariable (value = "formateurId") Long formateurId,
								 @PathVariable (value = "sessionId") Long sessionId,
								 @RequestBody SessionRequest sessionRequest) {
		return sessionRepo.findById(sessionId).map(session -> {

			return formateurRepo.findById(formateurId).map(formateur -> {

				session.setLieu(sessionRequest.getLieu());
				session.setNb_participant(sessionRequest.getNb_participant());
				session.setDate_debut(sessionRequest.getDate_debut());
				session.setDate_fin(sessionRequest.getDate_fin());
				session.setFormateur(formateur);
				Set<Long> idFormation = sessionRequest.getFormation();

				Set<Formation> formations = new HashSet<>();

				idFormation.forEach(idformation -> {
					Formation formation = formationRepository.findById(idformation)
							.orElseThrow(() -> new RuntimeException("Error:Formation is not found."));
					formations.add(formation);

				});
				Set<Long> idParticipant = sessionRequest.getParticipant();
				Set<Participant> participants = new HashSet<>();

				idParticipant.forEach(idparticipant -> {
					Participant participant = participantRepository.findById(idparticipant)
							.orElseThrow(() -> new RuntimeException("Error:Participant is not found."));
					participants.add(participant);

				});
				session.setFormations(formations);
				session.setParticipants(participants);

				return sessionRepo.save(session);
			}).orElseThrow(null);

		}).orElseThrow(null);
	}


}
