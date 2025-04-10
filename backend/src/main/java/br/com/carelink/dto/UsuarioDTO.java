package br.com.carelink.dto;

import br.com.carelink.entity.Empresa;
import br.com.carelink.validator.CpfValido;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UsuarioDTO {

    private Long id;

    @NotBlank(message = "Nome é obrigatório")
    @Size(max = 100)
    private String nome;

    @NotBlank(message = "Sobrenome é obrigatório")
    @Size(max = 100)
    private String sobrenome;

    @CpfValido
    @NotBlank(message = "CPF é obrigatório")
    @Size(min = 11, max = 14) // Considerando com máscara
    private String cpf;

    @NotBlank(message = "Login é obrigatório")
    @Size(max = 100)
    private String login;

    private Empresa empresa;
}

