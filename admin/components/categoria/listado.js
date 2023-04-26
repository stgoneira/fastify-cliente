import { useEffect, useState } from "react";

export default function CategoriaListado() {
    const [categorias, setCategorias] = useState([]);

    const cargarDatos = async () => {
        try {
            const baseUrl   = 'http://localhost:3000';
            const url       = baseUrl + '/categoria';
            const respuesta = await fetch(url);   

            if( !respuesta.ok ) throw new Error("Problemas al recuperar las categorías!");
            
            const cats = await respuesta.json();
            setCategorias( cats ); // LO MÁS IMPORTANTE !!!!
        } catch (error) {
            console.error( error );
        }
    };

    useEffect(()=> {
        cargarDatos();
    }, []);

    return (
        <>
            <h2>Listado de Categorías</h2>
            <table border={1}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {categorias.map( categoria => (
                        <tr key={categoria.id}>
                            <td>{categoria.id}</td>
                            <td>{categoria.nombre}</td>
                            <td>{categoria.descripcion}</td>
                            <td></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}