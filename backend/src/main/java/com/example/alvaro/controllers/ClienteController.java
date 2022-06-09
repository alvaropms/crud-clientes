package com.example.alvaro.controllers;

import com.example.alvaro.dtos.ClienteDTO;
import com.example.alvaro.services.ClienteServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class ClienteController {

    @Autowired
    private ClienteServiceImpl clienteService;

    @PostMapping("/cadastrar")
    public ResponseEntity<String> cadastrar(@RequestBody ClienteDTO cliente) {

        List<ClienteDTO> clientes = clienteService.getClienteByNome(
                cliente.getNome());

        if(!clientes.isEmpty()){
            return new ResponseEntity("Cliente já cadastrado", HttpStatus.BAD_REQUEST);
        }

        clienteService.cadastrar(cliente);

        return new ResponseEntity("Criado com sucesso", HttpStatus.CREATED);
    }

    @GetMapping("/listar")
    public ResponseEntity<List<ClienteDTO>> listar(){
        List<ClienteDTO> clientes = clienteService.getAllClientes();
        return new ResponseEntity(clientes, HttpStatus.OK);
    }

    @DeleteMapping("/deletar/{id}")
    public ResponseEntity<String> deletar(@PathVariable Long id){
        clienteService.deleteCliente(id);

        return new ResponseEntity("Deletado com sucesso", HttpStatus.OK);
    }
}
