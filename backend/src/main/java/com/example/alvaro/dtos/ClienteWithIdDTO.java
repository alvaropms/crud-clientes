package com.example.alvaro.dtos;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
@NoArgsConstructor
public class ClienteWithIdDTO implements Serializable {
    String nome;
    String email;
    String senha;
    Long id;
}
