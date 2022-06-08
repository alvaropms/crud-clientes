package com.example.alvaro.dtos;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
@NoArgsConstructor
public class ClienteDTO  implements Serializable{
    String nome;
    Integer numero;

}