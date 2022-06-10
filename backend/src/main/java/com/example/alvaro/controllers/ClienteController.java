package com.example.alvaro.controllers;

import com.example.alvaro.dtos.ClienteDTO;
import com.example.alvaro.dtos.ClienteLoginDTO;
import com.example.alvaro.dtos.ClienteWithIdDTO;
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

        List<ClienteWithIdDTO> clientes = clienteService.getClienteByEmail(
                cliente.getEmail());

        if(!clientes.isEmpty()){
            return new ResponseEntity("Cliente já cadastrado", HttpStatus.BAD_REQUEST);
        }

        clienteService.cadastrar(cliente);

        return new ResponseEntity("Criado com sucesso", HttpStatus.CREATED);
    }

    @GetMapping("/listar")
    public ResponseEntity<List<ClienteWithIdDTO>> listar(){
        List<ClienteWithIdDTO> clientes = clienteService.getAllClientes();
        return new ResponseEntity(clientes, HttpStatus.OK);
    }

    @DeleteMapping("/deletar/{id}")
    public ResponseEntity<String> deletar(@PathVariable Long id){
        clienteService.deleteCliente(id);

        return new ResponseEntity("Deletado com sucesso", HttpStatus.OK);
    }
    
    @PutMapping("/atualizar")
    public ResponseEntity<String> atualizar(@RequestBody ClienteWithIdDTO cliente){
        List<ClienteWithIdDTO> email = clienteService.getClienteByEmail(cliente.getEmail());

        if(email.size() > 0 && !email.get(0).getId().equals(cliente.getId())){
            return new ResponseEntity<>("Email já cadastrado no sistema", HttpStatus.BAD_REQUEST);
        }

        List<ClienteWithIdDTO> aux = clienteService.getClienteById(cliente.getId());
        cliente.setSenha(aux.get(0).getSenha());
        clienteService.atualizar(cliente);

        return new ResponseEntity("Atualizado com sucesso", HttpStatus.OK);
    }

    @GetMapping("/pesquisar")
    public ResponseEntity<ClienteWithIdDTO> pesquisar(@RequestParam String nome){
        List<ClienteWithIdDTO> cliente = clienteService.getClienteByNome(nome);

        return new ResponseEntity<>(cliente.get(0), HttpStatus.OK);
    }

    @PostMapping("/logar")
    public ResponseEntity logar(@RequestBody ClienteLoginDTO credenciais){
        List<ClienteLoginDTO> clientes = clienteService
                .getClienteByEmailAndSenha(credenciais.getEmail(), credenciais.getSenha());

        if(clientes.isEmpty()){
            return new ResponseEntity("Credenciais incorretas", HttpStatus.FORBIDDEN);
        }

        return new ResponseEntity<>("Logado com sucesso", HttpStatus.OK);
    }
}
