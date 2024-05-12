import { Link } from "react-router-dom";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi"

const Pesquisa = () => {
    return (
        <nav id="navbar">
            <h2>
                <Link to="/">
                    <BiCameraMovie />  Movie Opinion
                </Link>
            </h2>
            <form>
                <input type="text" placeholder="Busque um filme" />
                <button type="submit">
                    <BiSearchAlt2 />
                </button>
            </form>
        </nav>
    );
}

export default Pesquisa;