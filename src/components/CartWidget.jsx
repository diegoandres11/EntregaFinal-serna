import { Link } from "react-router-dom";
import car from "../assets/carrito.png"
import { useCart } from "../contexts/CartContext";

export const CartWidget= ()=>{
    const {getTotalItems}= useCart()
    const itemCount=getTotalItems()
    const {numero}= useCart()
    
    return (
        <Link
            style={{
                backgroundColor: 'white',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                padding: '9px',
                border: '2px solid #ddd', 
                textDecoration: 'none'
            }}
            to="/cart"
        >
            <img
                style={{ display: 'block' }}
                src={car}
                alt="carrito"
                height={40}
            />
            {itemCount > 0 && (
                <span style={{top: '-5px',right: '-10px',color: 'black',borderRadius: '50%',fontSize: '14px',fontWeight: 'bold'}}>
                {numero}
                </span>
            )}
        </Link>
    );
}