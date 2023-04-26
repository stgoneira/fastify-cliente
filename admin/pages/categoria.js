import CategoriaForm from "@/components/categoria/form";
import CategoriaListado from "@/components/categoria/listado";

export default function PaginaCategoria() {
    return (
        <>
            <h1 className="titulo">Categorías</h1>

            <CategoriaForm /> 

            <CategoriaListado />
        </>
    );
}