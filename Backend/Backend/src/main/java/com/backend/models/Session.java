package com.backend.models;

import java.util.Date;
import java.util.HashSet;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotBlank;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;

import java.util.Optional;
import java.util.Set;

@Entity

public class Session {


	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@NotBlank(message = "Lieu ne doit pas être vide ")
	private String lieu;

	@NotBlank(message = "Nombre de participant ne doit pas être vide ")
	private int nb_participant;

	@NotBlank(message = "Date debut ne doit pas être vide ")
	@JsonFormat(pattern = "yyyy-MM-dd")
	private Date date_debut;

	@JsonFormat(pattern = "yyyy-MM-dd")
	@NotBlank(message = "Date fin ne doit pas être vide ")
	private Date date_fin;

	@ManyToOne(fetch = FetchType.LAZY, optional = false)
	@JoinColumn(name = "id_formateur", nullable = false)
	@OnDelete(action = OnDeleteAction.CASCADE)
	@JsonIgnore
	private Formateur formateur;

	@ManyToMany(fetch = FetchType.LAZY, cascade = { CascadeType.PERSIST, CascadeType.MERGE })
	@JoinTable(name = "sessions_formations", joinColumns = { @JoinColumn(name = "session_id") }, inverseJoinColumns = {
			@JoinColumn(name = "formation_id") })
	private Set<Formation> formations = new HashSet<>();

	@ManyToMany(fetch = FetchType.LAZY, cascade = { CascadeType.PERSIST, CascadeType.MERGE })
	@JoinTable(name = "sessions_participants", joinColumns = {
			@JoinColumn(name = "session_id") }, inverseJoinColumns = { @JoinColumn(name = "participant_id") })
	private Set<Participant> participants = new HashSet<>();


	public Session(@NotBlank(message = "Lieu ne doit pas être vide ") String lieu,
				   @NotBlank(message = "Nombre de participant ne doit pas être vide ") int nb_participant,
				   @NotBlank(message = "Date debut ne doit pas être vide ") Date date_debut,
				   @NotBlank(message = "Date fin ne doit pas être vide ") Date date_fin, Formateur formateur) {
		super();
		this.lieu = lieu;
		this.nb_participant = nb_participant;
		this.date_debut = date_debut;
		this.date_fin = date_fin;
		this.formateur = formateur;
	}



	public Session() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
	public Set<Participant> getParticipants() {
		return participants;
	}

	public void setParticipants(Set<Participant> participants) {
		this.participants = participants;
	}

	public Set<Formation> getFormations() {
		return formations;
	}

	public void setFormations(Set<Formation> formations) {
		this.formations = formations;
	}

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

	@Override
	public String toString() {
		return "Session [lieu=" + lieu + ", nb_participant=" + nb_participant + ", date_debut=" + date_debut
				+ ", date_fin=" + date_fin + ", formateur=" + formateur + "]";
	}

}
