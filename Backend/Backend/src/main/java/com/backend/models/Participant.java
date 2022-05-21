package com.backend.models;

import java.util.HashSet;
import java.util.Set;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

@Entity
@Table(name = "participant")
public class Participant {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id; // cle primaire AUTOINCR
    private String nom;
    private String prenom;
    private String type;
    private String email;
    private int tel;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "profil_id", nullable = false, updatable = true, insertable = true)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JsonIgnore
    private Profil profil;

    private Integer id_organisme = 0;

    private Integer id_pays = 0;

    @JsonIgnore
    @ManyToMany(mappedBy = "participants")
    private Set<Session> session = new HashSet<>();

    public Set<Session> getSession() {
        return this.session;
    }

    public void setSession(Set<Session> session) {
        this.session = session;
    }

    public Integer getId_organisme() {
        return this.id_organisme;
    }

    public void setId_organisme(Integer id_organisme) {
        this.id_organisme = id_organisme;
    }

    public Integer getId_pays() {
        return this.id_pays;
    }

    public void setId_pays(Integer id_pays) {
        this.id_pays = id_pays;
    }

    public Profil getProfil() {
        return this.profil;
    }

    public void setProfil(Profil profil) {
        this.profil = profil;
    }

    public Integer getPays() {
        return this.id_pays;
    }

    public void setPays(Integer pays) {
        this.id_pays = pays;
    }

    public Integer getOrganisme() {
        return this.id_organisme;
    }

    public void setOrganisme(Integer organisme) {
        this.id_organisme = organisme;
    }

    public Participant() {
    }

    public Participant(String nom, String prenom, String type, String email, int tel) {
        this.nom = nom;
        this.prenom = prenom;
        this.type = type;
        this.email = email;
        this.tel = tel;
    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long Id) {
        if (Id != null) {
            this.id = Id;
        }
    }

    public String getNom() {
        return this.nom;
    }

    public void setNom(String nom) {
        if (nom != null) {
            this.nom = nom;
        }

    }

    public String getPrenom() {
        return this.prenom;
    }

    public void setPrenom(String prenom) {
        if (prenom != null) {
            this.prenom = prenom;
        }
    }

    public String getType() {
        return this.type;
    }

    public void setType(String type) {
        if (type != null) {
            this.type = type;
        }
    }

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        if (email != null) {
            this.email = email;
        }
    }

    public int getTel() {
        return this.tel;
    }

    public void setTel(int tel) {

        this.tel = tel;

    }

    @Override
    public String toString() {
        return "{" + " Id='" + getId() + "'" + ", nom='" + getNom() + "'" + ", prenom='" + getPrenom() + "'"
                + ", type='" + getType() + "'" + ", email='" + getEmail() + "'" + ", tel='" + getTel() + "'" + "}";
    }

}