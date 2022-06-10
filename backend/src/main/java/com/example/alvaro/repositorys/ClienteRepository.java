package com.example.alvaro.repositorys;

import com.example.alvaro.models.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ClienteRepository extends JpaRepository<Cliente, Long> {
    List<Cliente> findByEmail(String email);
    List<Cliente> findByNome(String nome);
    List<Cliente> findAllById(Long id);
    List<Cliente> findByEmailAndSenha(String email, String senha);
}
