package com.backend.models;

import javax.persistence.*;

import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import com.fasterxml.jackson.annotation.JsonIgnore;
import java.util.HashSet;
import java.util.Set;
@Entity
public class Formation {
	@Id
	@GeneratedValue (strategy = GenerationType.IDENTITY)
	private Long id; //cle primaire AUTOINCR
	private String titre;
	private String type;
	private Integer annee;
	private Integer budget;

	public Integer getBudget() {
		return budget;
	}
	public void setBudget(Integer budget) {
		this.budget = budget;
	}
	private Integer nb_session;
	public Domaine getDomaine() {
		return domaine;
	}
	public void setDomaine(Domaine domaine) {
		this.domaine = domaine;
	}
	private Integer duree;

	@ManyToOne(fetch = FetchType.LAZY, optional = false)
	@JoinColumn(name = "domaine_id", nullable = false ,updatable = true,insertable = true)
	@OnDelete(action = OnDeleteAction.CASCADE)
	@JsonIgnore
	private Domaine domaine;

 /*
   @ManyToMany(fetch = FetchType.LAZY,
            cascade = {
                CascadeType.PERSIST,
                CascadeType.MERGE
            },
            mappedBy = "formations")
    private Set<Session> sessions = new HashSet<>();
*/


	public Formation(String titre, String type, Integer annee, Integer budget, Integer nb_session, Integer duree,
					 Domaine domaine) {
		super();
		this.titre = titre;
		this.type = type;
		this.annee = annee;
		this.budget = budget;
		this.nb_session = nb_session;
		this.duree = duree;
		this.domaine = domaine;
	}
	public Formation() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getTitre() {
		return titre;
	}
	public void setTitre(String titre) {
		this.titre = titre;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public Integer getAnnee() {
		return annee;
	}
	public void setAnnee(Integer annee) {
		this.annee = annee;
	}
	public Integer getNb_session() {
		return nb_session;
	}
	public void setNb_session(Integer nb_session) {
		this.nb_session = nb_session;
	}
	public Integer getDuree() {
		return duree;
	}
	public void setDuree(Integer duree) {
		this.duree = duree;
	}
	@Override
	public String toString() {
		return "Formation [id=" + id + ", titre=" + titre + ", type=" + type + ", annee=" + annee + ", budget=" + budget
				+ ", nb_session=" + nb_session + ", duree=" + duree + ", domaine=" + domaine + "]";
	}


}

