package com.example.alvaro.services;

import com.example.alvaro.dtos.ClienteDTO;
import com.example.alvaro.mapper.cliente.ClienteMapper;
import com.example.alvaro.models.Cliente;
import com.example.alvaro.repositorys.ClienteRepository;
import com.example.alvaro.services.interfaces.ClienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ClienteServiceImpl implements ClienteService {

    @Autowired
    private ClienteRepository clienteRepository;
    @Autowired
    private ClienteMapper clienteMapper;

    @Override
    public List<ClienteDTO> getAllClientes() {
        List<Cliente> entity = clienteRepository.findAll();
        List<ClienteDTO> dto = clienteMapper.toDto(entity);
        return dto;
    }

    @Override
    public List<ClienteDTO> getClienteByNome(String nome) {
        List<Cliente> entity = clienteRepository.findByNome(nome);
        List<ClienteDTO> dto = clienteMapper.toDto(entity);
        return dto;
    }

    @Override
    public void deleteCliente(Long id) {
        List<Cliente> clientes = clienteRepository.findAllById(id);
        clienteRepository.delete(clientes.get(0));
    }

    @Override
    public void cadastrar(ClienteDTO dto) {
        Cliente entity = clienteMapper.toEntity(dto);
        clienteRepository.save(entity);
    }
}
