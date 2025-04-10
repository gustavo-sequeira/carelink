package br.com.carelink.entity;

import jakarta.persistence.*;
import lombok.*;


import java.time.LocalDateTime;

@Entity
@Table(name = "usuario")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "empresa_id", nullable = false)
    private Empresa empresa;

    @Column(name = "nome", nullable = false, length = 100)
    private String nome;

    @Column(name = "sobrenome", nullable = false, length = 100)
    private String sobrenome;

    @Column(name = "email", nullable = false, length = 100)
    private String email;

    @Column(name = "login", nullable = false, length = 100)
    private String login;

    @Column(name = "senha", nullable = false, length = 100)
    private String senha;

    @Column(name = "cpf", nullable = false, unique = true, length = 18)
    private String cpf;

    @Column(name = "data_criacao", nullable = false, updatable = false)
    private LocalDateTime dataCriacao;

    @PrePersist
    protected void prePersist() {
        this.dataCriacao = LocalDateTime.now();
    }
}

