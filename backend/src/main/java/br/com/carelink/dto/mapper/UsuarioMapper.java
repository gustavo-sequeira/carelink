package br.com.carelink.dto.mapper;

import br.com.carelink.dto.UsuarioDTO;
import br.com.carelink.entity.Usuario;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

    @Mapper(componentModel = "spring")
    public interface UsuarioMapper {

     //   @Mapping(source = "empresa_nome", target = "empresaNome")
     //   UsuarioDTO toDTO(Usuario usuario);

    }
