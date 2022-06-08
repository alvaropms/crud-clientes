package com.example.alvaro.models;

import javax.persistence.*;

@Entity
@Table(name = "cliente")
public class Cliente {

    public Cliente(){
    }

    public Cliente(String nome, Integer numero) {
        this.nome = nome;
        this.numero = numero;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "id",unique=true, nullable = false)
    private Long id;

    @Column(name = "nome", nullable = false)
    private String nome;

    @Column(name = "numero", nullable = false)
    private Integer numero;

    public Long getId(){ return id;}

    public void setId(Long id) { this.id = id; }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Integer getNumero() {
        return numero;
    }

    public void setNumero(Integer numero) {
        this.numero = numero;
    }
}
