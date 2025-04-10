package br.com.carelink.dto;

import lombok.Data;

@Data
public class AuthRequestDTO {
    private String login;
    private String senha;
}

