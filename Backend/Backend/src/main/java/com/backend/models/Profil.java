package com.backend.models;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import java.util.*;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Profil {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id; // cle primaire AUTOINCR
    private String libelle;
    
    @OneToMany(cascade = CascadeType.ALL,fetch = FetchType.LAZY,mappedBy = "profil")
    private Set<Participant> participants = new HashSet<>();


    public Profil() {
    }

    public Profil( String libelle) {
        this.libelle = libelle;
    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLibelle() {
        return this.libelle;
    }

    public void setLibelle(String libelle) {
        this.libelle = libelle;
    }

    @Override
    public String toString() {
        return "{" +
            " Id='" + getId() + "'" +
            ", libelle='" + getLibelle() + "'" +
            "}";
    }

}
