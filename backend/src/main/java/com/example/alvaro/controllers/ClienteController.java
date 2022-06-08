package com.example.alvaro.controllers;

import com.example.alvaro.dtos.ClienteDTO;
import com.example.alvaro.models.Cliente;
import com.example.alvaro.services.ClienteServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ClienteController {

    @Autowired
    private ClienteServiceImpl clienteService;

    @PostMapping("/cadastrar")
    public ResponseEntity cadastrar(@RequestBody ClienteDTO cliente){

        List<Cliente> clientes = clienteService.getClienteByNome(
                cliente.getNome());

        if(!clientes.isEmpty()){
            return new ResponseEntity("Cliente já cadastrado", HttpStatus.BAD_REQUEST);
        }

        clienteService.cadastrar(new Cliente(cliente.getNome(), cliente.getNumero()));

        return new ResponseEntity("Criado com sucesso", HttpStatus.CREATED);
    }
}
