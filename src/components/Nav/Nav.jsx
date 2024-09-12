import Menus from "../Menus/Menus";

export default function Nav(props) {
    return (
        <>
        <nav class="header__container--nav">
            <ul> 
                <Menus option="Autos"/>
                <Menus option="Motos"/>
                <Menus option="Repuestos"/>
                <Menus option="Asesoramiento"/>
                <Menus option="Contacto"/>
            </ul>
        </nav>
        </>
    )
}