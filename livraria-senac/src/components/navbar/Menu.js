import { Menu } from "../navbat/styles/Components";
import { ImagemLogo } from "../navbat/styles/Imagem";
import { Item, Lista } from "../navbat/styles/Listas";
import logo from "../../images/logo.png"
import { Link } from "react-router-dom";

function MenuBar() {
    return <Menu>
        <ImagemLogo src={logo} />
        <Lista>

            <Item>
                <Link to="/home">Home</Link>
            </Item>
            <Item>
                <Link to="/cadastro">Cadastro</Link>
            </Item>
            <Item>
                <Link to="/login">Login</Link>
            </Item>
        </Lista>

    </Menu>
}
export default MenuBar;