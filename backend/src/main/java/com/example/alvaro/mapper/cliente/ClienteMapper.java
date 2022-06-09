package com.example.alvaro.mapper.cliente;

import com.example.alvaro.dtos.ClienteDTO;
import com.example.alvaro.mapper.EntityMapper;
import com.example.alvaro.models.Cliente;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface ClienteMapper extends EntityMapper<ClienteDTO, Cliente> {
}
