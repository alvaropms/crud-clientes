package com.example.alvaro.services;

import com.example.alvaro.dtos.ClienteDTO;
import com.example.alvaro.dtos.ClienteWithIdDTO;
import com.example.alvaro.mapper.cliente.ClienteWithIdMapper;
import com.example.alvaro.mapper.cliente.ClienteMapper;
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
    @Autowired
    private ClienteMapper clienteMapper;
    @Autowired
    private ClienteWithIdMapper clienteWithIdMapper;

    @Override
    public List<ClienteWithIdDTO> getAllClientes() {
        List<Cliente> entity = clienteRepository.findAll();
        List<ClienteWithIdDTO> dto = clienteWithIdMapper.toDto(entity);
        return dto;
    }

    @Override
    public List<ClienteWithIdDTO> getClienteByEmail(String email) {
        List<Cliente> entity = clienteRepository.findByEmail(email);
        List<ClienteWithIdDTO> dto = clienteWithIdMapper.toDto(entity);
        return dto;
    }

    @Override
    public List<ClienteWithIdDTO> getClienteById(Long id) {
        List<Cliente> entity = clienteRepository.findAllById(id);
        List<ClienteWithIdDTO> dto = clienteWithIdMapper.toDto(entity);
        return dto;
    }

    @Override
    public List<ClienteWithIdDTO> getClienteByNome(String nome) {
        List<Cliente> entity = clienteRepository.findByNome(nome);
        List<ClienteWithIdDTO> dto = clienteWithIdMapper.toDto(entity);
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

    @Override
    public void atualizar(ClienteWithIdDTO cliente) {
        Cliente entity = clienteWithIdMapper.toEntity(cliente);
        clienteRepository.save(entity);
    }
}
