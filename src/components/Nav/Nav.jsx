import Menus from "../Menus/Menus";

export default function Nav(props) {
    return (
        <>
        <nav class="header__container--nav">
            <ul> 
                <Menus option="Plataformas"/>
                <Menus option="Videojuegos"/>
                <Menus option="Accesorios"/>
                <Menus option="Torneos"/>
                <Menus option="Nosotros"/>
            </ul>
        </nav>
        </>
    )
}