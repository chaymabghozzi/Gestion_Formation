package com.backend.models;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotBlank;

@Entity
public class Organisme {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
    @NotBlank(message = "Libelle ne doit pas être vide ")
	private String libelle;
	
	@OneToMany(cascade = CascadeType.ALL,fetch = FetchType.LAZY,mappedBy = "organisme")
    private Set<Formateur> formateurs = new HashSet<>();
	
	
	public Organisme() {}
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getLibelle() {
		return libelle;
	}
	public void setLibelle(String libelle) {
		this.libelle = libelle;
	}
	
	public Organisme(Long id, String libelle) {
		super();
		this.id = id;
		this.libelle = libelle;
	}
	
	@Override
	public String toString() {
		return "organisme [id=" + id + ", libelle=" + libelle + "]";
	}
	


}
