package br.com.carelink.repository;

import br.com.carelink.entity.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    Optional<Object> findByEmail(String email);
    // Exemplo: Optional<Usuario> findByCpf(String cpf);
}

