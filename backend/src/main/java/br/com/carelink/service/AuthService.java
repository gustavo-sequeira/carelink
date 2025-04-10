package br.com.carelink.service;

import br.com.carelink.dto.AuthRequestDTO;
import br.com.carelink.entity.Usuario;
import br.com.carelink.repository.UsuarioRepository;
import br.com.carelink.security.JWTUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UsuarioRepository usuarioRepository;
    private final PasswordEncoder passwordEncoder;
    private final JWTUtil jwtUtil;

    public String login(AuthRequestDTO dto) {
        Usuario usuario = (Usuario) usuarioRepository.findByEmail(dto.getEmail()).orElseThrow(() -> new BadCredentialsException("Usuário não encontrado"));

        if (!passwordEncoder.matches(dto.getSenha(), usuario.getSenha())) {
            throw new BadCredentialsException("Senha inválida");
        }

        return jwtUtil.generateToken(usuario.getEmail());
    }
}

