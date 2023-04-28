import CategoriaForm from "@/components/categoria/form";
import CategoriaListado from "@/components/categoria/listado";
import CategoriaManager from "@/components/categoria/manager";
import Layout from "@/components/layout";

export default function PaginaCategoria() {
    return (
        <Layout>
            <h1 className="titulo">Categorías</h1>

            <CategoriaManager />            
        </Layout>
    );
}