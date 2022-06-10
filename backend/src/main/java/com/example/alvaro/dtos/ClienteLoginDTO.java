package com.example.alvaro.dtos;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
@NoArgsConstructor
public class ClienteLoginDTO implements Serializable {
    String email;
    String senha;
}
