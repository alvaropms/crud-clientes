package com.example.alvaro.services;

import com.example.alvaro.models.Cliente;
import com.example.alvaro.repositorys.ClienteRepository;
import com.example.alvaro.services.interfaces.ClienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClienteServiceImpl implements ClienteService {

    @Autowired
    private ClienteRepository clienteRepository;

    @Override
    public List<Cliente> getAllClientes() {
        return clienteRepository.findAll();
    }

    @Override
    public List<Cliente> getClienteByNome(String nome) {
        return clienteRepository.findByNome(nome);
    }

    @Override
    public void deleteCliente(String nome) {
        List<Cliente> clientes = clienteRepository.findByNome(nome);
        clienteRepository.delete(clientes.get(0));
    }

    @Override
    public void cadastrar(Cliente cliente) {
        clienteRepository.save(cliente);
    }
}
