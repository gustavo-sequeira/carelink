package br.com.carelink.dto;

import br.com.carelink.validator.CnpjValido;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class EmpresaDTO {

    private Long id;

    @NotBlank(message = "Razão Social é obrigatória")
    @Size(max = 100)
    private String razaoSocial;

    @NotBlank(message = "Nome Fantasia é obrigatório")
    @Size(max = 100)
    private String nomeFantasia;

    @CnpjValido
    @NotBlank(message = "CNPJ é obrigatório")
    @Size(min = 14, max = 18) // Considerando com máscara
    private String cnpj;


}

