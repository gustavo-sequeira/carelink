package br.com.carelink.service;


import br.com.carelink.dto.EmpresaDTO;
import br.com.carelink.entity.Empresa;
import br.com.carelink.repository.EmpresaRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class EmpresaService {

    private final EmpresaRepository repository;

    public EmpresaDTO criar(EmpresaDTO dto) {
        Empresa empresa = Empresa.builder()
                .razaoSocial(dto.getRazaoSocial())
                .nomeFantasia(dto.getNomeFantasia())
                .cnpj(dto.getCnpj())
                .build();

        Empresa salva = repository.save(empresa);
        return toDTO(salva);
    }

    public List<EmpresaDTO> listarTodas() {
        return repository.findAll().stream()
                .map(this::toDTO)
                .collect(Collectors.toList());
    }

    public EmpresaDTO buscarPorId(Long id) {
        Empresa empresa = repository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Empresa não encontrada"));
        return toDTO(empresa);
    }

    public void deletar(Long id) {
        if (!repository.existsById(id)) {
            throw new EntityNotFoundException("Empresa não encontrada");
        }
        repository.deleteById(id);
    }

    public Page<EmpresaDTO> listarPaginado(Pageable pageable) {
        return repository.findAll(pageable).map(this::toDTO);
    }

    public EmpresaDTO alterar(Long id, EmpresaDTO dto) {
        Empresa empresa =  repository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Empresa não encontrada"));

            empresa.setRazaoSocial(dto.getRazaoSocial());
            empresa.setNomeFantasia(dto.getNomeFantasia());
            empresa.setCnpj(dto.getCnpj());

        Empresa salva = repository.save(empresa);

        return toDTO(salva);
    }

    private EmpresaDTO toDTO(Empresa empresa) {
        return EmpresaDTO.builder()
                .id(empresa.getId())
                .razaoSocial(empresa.getRazaoSocial())
                .nomeFantasia(empresa.getNomeFantasia())
                .cnpj(empresa.getCnpj())
                .build();
    }
}

