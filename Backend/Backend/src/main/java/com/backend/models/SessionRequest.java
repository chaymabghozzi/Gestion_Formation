package com.backend.models;

import java.util.Date;
import java.util.Set;

public class SessionRequest {
	private Long id;

	private String lieu;

	private int nb_participant;

	private Date date_debut;

	private Date date_fin;

	private Formateur formateur;

	private Set<Long> formation;

	private Set<Long> participant;

	public String getLieu() {
		return lieu;
	}

	public void setLieu(String lieu) {
		this.lieu = lieu;
	}

	public int getNb_participant() {
		return nb_participant;
	}

	public void setNb_participant(int nb_participant) {
		this.nb_participant = nb_participant;
	}

	public Date getDate_debut() {
		return date_debut;
	}

	public void setDate_debut(Date date_debut) {
		this.date_debut = date_debut;
	}

	public Date getDate_fin() {
		return date_fin;
	}

	public void setDate_fin(Date date_fin) {
		this.date_fin = date_fin;
	}

	public Formateur getFormateur() {
		return formateur;
	}

	public void setFormateur(Formateur formateur) {
		this.formateur = formateur;
	}

	public Set<Long> getFormation() {
		return formation;
	}

	public void setFormation(Set<Long> formation) {
		this.formation = formation;
	}

	public Long getId() {
		return id;
	}

	public Set<Long> getParticipant() {
		return this.participant;
	}

	public void setParticipant(Set<Long> participant) {
		this.participant = participant;
	}

	public void setId(Long id) {
		this.id = id;
	}

}
