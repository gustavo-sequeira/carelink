package br.com.carelink.repository;

import br.com.carelink.entity.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    // Exemplo: Optional<Usuario> findByCpf(String cpf);
}

