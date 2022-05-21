package com.backend.models;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.Email;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Formateur {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
    @NotBlank(message = "Nom ne doit pas être vide ")
	private String nom;
    @NotBlank(message = "Nom ne doit pas être vide ")
	private String prenom;
    
    @Email(message = "Email doit être valide")   
    @NotBlank(message = "Email ne doit pas être vide ")
	private String email;
    
    @NotBlank(message = "Type ne doit pas être vide ")
	private String type;
    

    @NotBlank(message = "Tel ne doit pas être vide ")
    @Min(value = 8, message = "Tel ne doit pas avoir moins que 8 chiffres") 
    @Max(value = 8, message = "Tel ne doit pas dépasser les 8 chiffres ")
	private int tel;
	
	@ManyToOne(fetch = FetchType.LAZY, optional = false)
	@JoinColumn(name = "id_organisme", nullable = false)
	@OnDelete(action = OnDeleteAction.CASCADE)
	@JsonIgnore
	private Organisme organisme;
	 
	 public Formateur() {}

		public Formateur(String nom, String prenom, String email, String type, int tel) {
			super();
			this.nom = nom;
			this.prenom = prenom;
			this.email = email;
			this.type = type;
			this.tel = tel;
		}


	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public String getPrenom() {
		return prenom;
	}

	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public int getTel() {
		return tel;
	}

	public void setTel(int tel) {
		this.tel = tel;
	}

	public Organisme getOrganisme() {
		return organisme;
	}

	public void setOrganisme(Organisme organisme) {
		this.organisme = organisme;
	}
	
	@Override
	public String toString() {
		return "formateur [id=" + id + ", nom=" + nom + ", prenom=" + prenom + ", email=" + email + ", type=" + type
				+ ", tel=" + tel + "]";
	}

}
