package com.example.alvaro.services.interfaces;

import com.example.alvaro.dtos.ClienteDTO;
import com.example.alvaro.dtos.ClienteWithIdDTO;

import java.util.List;

public interface ClienteService {
    List<ClienteWithIdDTO> getAllClientes();
    List<ClienteWithIdDTO> getClienteByEmail(String email);
    List<ClienteWithIdDTO> getClienteById(Long id);
    List<ClienteWithIdDTO> getClienteByNome(String nome);
    void deleteCliente(Long id);
    void cadastrar(ClienteDTO cliente);
    void atualizar(ClienteWithIdDTO cliente);
}
