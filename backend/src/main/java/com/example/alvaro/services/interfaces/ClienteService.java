package com.example.alvaro.services.interfaces;

import com.example.alvaro.models.Cliente;

import java.util.List;

public interface ClienteService {
    List<Cliente> getAllClientes();
    List<Cliente> getClienteByNome(String nome);
    void deleteCliente(String nome);
    void cadastrar(Cliente cliente);
}
