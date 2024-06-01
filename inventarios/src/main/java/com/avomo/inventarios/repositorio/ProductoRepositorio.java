package com.avomo.inventarios.repositorio;

import com.avomo.inventarios.modelo.Producto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductoRepositorio extends JpaRepository <Producto, Integer> {
}
