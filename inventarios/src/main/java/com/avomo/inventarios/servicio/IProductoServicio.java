package com.avomo.inventarios.servicio;

import com.avomo.inventarios.modelo.Producto;

import java.util.List;

public interface IProductoServicio {
    public List <Producto> listarProductos();
    public Producto listarProductoId (Integer idProducto);
    public void guardarProducto (Producto producto);
    public void eliminarProductoId (Integer idProducto);
}
