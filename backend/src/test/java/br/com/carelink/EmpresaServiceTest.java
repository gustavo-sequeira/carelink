package br.com.carelink;

import br.com.carelink.dto.EmpresaDTO;
import br.com.carelink.entity.Empresa;
import br.com.carelink.repository.EmpresaRepository;
import br.com.carelink.service.EmpresaService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
@ExtendWith(MockitoExtension.class)
class EmpresaServiceTest {

    @Mock
    private EmpresaRepository repository;

    @InjectMocks
    private EmpresaService service;

    @Test
    void deveCriarEmpresa() {
        EmpresaDTO dto = new EmpresaDTO(null, "Razão", "Fantasia", "11.222.333/0001-44");
        Empresa empresa = Empresa.builder()
                .id(1L)
                .razaoSocial("Razão")
                .nomeFantasia("Fantasia")
                .cnpj("11.222.333/0001-44")
                .build();

        Mockito.when(repository.save(Mockito.any())).thenReturn(empresa);

        EmpresaDTO result = service.criar(dto);

        Assertions.assertNotNull(result.getId());
        Assertions.assertEquals("Razão", result.getRazaoSocial());
    }
}

