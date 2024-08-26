import { Link } from "react-router-dom";
import car from "../assets/carrito.png"

export const CartWidget= ()=>{
    return (

        <Link to="/cart">
            <img src={car} alt="carrito" height={30} />
        </Link>
    )
}