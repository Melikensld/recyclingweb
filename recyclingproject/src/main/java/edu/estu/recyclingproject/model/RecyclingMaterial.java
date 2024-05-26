package edu.estu.recyclingproject.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class RecyclingMaterial {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private Double paper;
    private Double metal;
    private Double glass;
    private Double plastic;

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Double getPaper() {
        return paper;
    }

    public void setPaper(Double paper) {
        this.paper = paper;
    }

    public Double getMetal() {
        return metal;
    }

    public void setMetal(Double metal) {
        this.metal = metal;
    }

    public Double getGlass() {
        return glass;
    }

    public void setGlass(Double glass) {
        this.glass = glass;
    }

    public Double getPlastic() {
        return plastic;
    }

    public void setPlastic(Double plastic) {
        this.plastic = plastic;
    }
}
