import Cabecera from "./cabecera";
import PiePagina from "./pie-pagina";

export default function Layout(props) {
    return (
        <>
            <Cabecera />
            {props.children}
            <PiePagina />
        </>
    );
}