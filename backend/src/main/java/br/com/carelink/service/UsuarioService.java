package br.com.carelink.service;


import br.com.carelink.dto.UsuarioCreateDTO;
import br.com.carelink.dto.UsuarioDTO;
import br.com.carelink.entity.Usuario;
import br.com.carelink.repository.UsuarioRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class UsuarioService {

    private final UsuarioRepository repository;
    private final PasswordEncoder passwordEncoder;

    public UsuarioCreateDTO criar(UsuarioCreateDTO dto) {
        Usuario usuario = Usuario.builder().nome(dto.getNome()).sobrenome(dto.getSobrenome()).cpf(dto.getCpf()).login(dto.getLogin()).senha(passwordEncoder.encode(dto.getSenha())).empresa(dto.getEmpresa()).build();

        Usuario salvo = repository.save(usuario);
        return toCreateDTO(salvo);
    }

    public List<UsuarioDTO> listarTodos() {
        return repository.findAll().stream().map(this::toDTO).collect(Collectors.toList());
    }

    public UsuarioDTO buscarPorId(Long id) {
        Usuario usuario = repository.findById(id).orElseThrow(() -> new EntityNotFoundException("Usuário não encontrado"));
        return toDTO(usuario);
    }

    public void deletar(Long id) {
        if (!repository.existsById(id)) {
            throw new EntityNotFoundException("Usuário não encontrado");
        }
        repository.deleteById(id);
    }

    public Page<UsuarioDTO> listarPaginado(Pageable pageable) {
        return repository.findAll(pageable).map(this::toDTO);
    }

    public UsuarioDTO alterar(Long id, UsuarioDTO dto) {
        Usuario usuario = repository.findById(id).orElseThrow(() -> new EntityNotFoundException("Usuário não encontrado"));

        usuario.setNome(dto.getNome());
        usuario.setSobrenome(dto.getSobrenome());
        usuario.setCpf(dto.getCpf());
        usuario.setEmpresa(dto.getEmpresa());
        usuario.setLogin(dto.getLogin());

        Usuario salvo = repository.save(usuario);

        return toDTO(salvo);
    }

    private UsuarioDTO toDTO(Usuario usuario) {
        return UsuarioDTO.builder().id(usuario.getId()).empresa(usuario.getEmpresa()).nome(usuario.getNome()).sobrenome(usuario.getSobrenome()).cpf(usuario.getCpf()).login(usuario.getLogin()).build();
    }

    private UsuarioCreateDTO toCreateDTO(Usuario usuario) {
        return UsuarioCreateDTO.builder().id(usuario.getId()).empresa(usuario.getEmpresa()).nome(usuario.getNome()).sobrenome(usuario.getSobrenome()).cpf(usuario.getCpf()).login(usuario.getLogin()).senha(usuario.getSenha()).build();
    }
}

