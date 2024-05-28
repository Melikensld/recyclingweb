package edu.estu.recyclingproject.model;

import jakarta.persistence.*;

@Entity
@Table(name = "recycling_materials")
public class RecyclingMaterial {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "material_type")
    private String materialType;  // Values: 'paper', 'metal', 'glass', 'plastic'

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getMaterialType() {
        return materialType;
    }

    public void setMaterialType(String materialType) {
        this.materialType = materialType;
    }

    public Double getQuantity() {
        return quantity;
    }

    public void setQuantity(Double quantity) {
        this.quantity = quantity;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    @Column(name = "quantity")
    private Double quantity;  // Örneğin kilogram cinsinden miktar

    @ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User user;  // Bu materyal kimin

    // Constructors, getters and setters
}
