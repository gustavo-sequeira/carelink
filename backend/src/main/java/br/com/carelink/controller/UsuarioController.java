package br.com.carelink.controller;


import br.com.carelink.dto.UsuarioCreateDTO;
import br.com.carelink.dto.UsuarioDTO;
import br.com.carelink.service.UsuarioService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

    @RestController
    @RequestMapping("/api/usuarios")
    @RequiredArgsConstructor
    public class UsuarioController {

        private final UsuarioService service;

        @PostMapping
        public ResponseEntity<UsuarioCreateDTO> criar(@Valid @RequestBody UsuarioCreateDTO dto) {
            UsuarioCreateDTO criado = service.criar(dto);
            return ResponseEntity.status(HttpStatus.CREATED).body(criado);
        }

        @GetMapping
        public ResponseEntity<Page<UsuarioDTO>> listar(@PageableDefault(size = 10, sort = "nome") Pageable pageable) {
            Page<UsuarioDTO> pagina = service.listarPaginado(pageable);
            return ResponseEntity.ok(pagina);
        }

        @GetMapping("/{id}")
        public ResponseEntity<UsuarioDTO> buscarPorId(@PathVariable Long id) {
            return ResponseEntity.ok(service.buscarPorId(id));
        }

        @DeleteMapping("/{id}")
        public ResponseEntity<Void> deletar(@PathVariable Long id) {
            service.deletar(id);
            return ResponseEntity.noContent().build();
        }

        @PutMapping("/{id}")
        public ResponseEntity<UsuarioDTO> alterar(@PathVariable Long id, @Valid @RequestBody UsuarioDTO dto) {
            UsuarioDTO alterado = service.alterar(id, dto);
            return ResponseEntity.status(HttpStatus.OK).body(alterado);
        }
    }

