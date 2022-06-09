package com.example.alvaro.services.interfaces;

import com.example.alvaro.dtos.ClienteDTO;
import com.example.alvaro.models.Cliente;

import java.util.List;

public interface ClienteService {
    List<ClienteDTO> getAllClientes();
    List<ClienteDTO> getClienteByNome(String nome);
    void deleteCliente(Long id);
    void cadastrar(ClienteDTO cliente);
}
