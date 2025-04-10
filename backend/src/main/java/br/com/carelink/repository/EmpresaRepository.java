package br.com.carelink.repository;

import br.com.carelink.entity.Empresa;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmpresaRepository extends JpaRepository<Empresa, Long> {
    // Exemplo: Optional<Empresa> findByCnpj(String cnpj);
}

