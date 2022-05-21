package com.backend.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Entity
public class Pays {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id; // cle primaire AUTOINCR
    private String nom;

    public Pays() {
    }

    public Pays( String nom) {
        this.nom = nom;
    }

    public Long getId() {
        return this.Id;
    }

    public void setId(Long Id) {
        this.Id = Id;
    }

    public String getNom() {
        return this.nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    @Override
    public String toString() {
        return "{" + " Id='" + getId() + "'" + ", nom='" + getNom() + "'" + "}";
    }

}