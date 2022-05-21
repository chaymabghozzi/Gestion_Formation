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

@Entity
public class Domaine {
		@Id
		@GeneratedValue (strategy = GenerationType.IDENTITY)
		private Long id; //cle primaire AUTOINCR
		private String libelle;
		
		
		@OneToMany(cascade = CascadeType.ALL,
	            fetch = FetchType.LAZY,
	            mappedBy = "domaine")
	    private Set<Formation> formations = new HashSet<>();
		
		
		public Domaine() {
			super();
			// TODO Auto-generated constructor stub
		}
		public Domaine(Long id, String libelle) {
			super();
			this.id = id;
			this.libelle = libelle;
		}
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
		@Override
		public String toString() {
			return "Domaine [id=" + id + ", libelle=" + libelle + "]";
		}
		
}

