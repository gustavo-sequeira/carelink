package br.com.carelink.controller;

import br.com.carelink.dto.AuthRequestDTO;
import br.com.carelink.dto.AuthResponseDTO;
import br.com.carelink.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @PostMapping("/login")
    public ResponseEntity<AuthResponseDTO> login(@RequestBody AuthRequestDTO dto) {
        String token = authService.login(dto);
        return ResponseEntity.ok(new AuthResponseDTO(token));
    }
}

