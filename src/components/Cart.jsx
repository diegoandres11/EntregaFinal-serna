
import { Container } from "react-bootstrap";
import { useContext, useState } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import Form from 'react-bootstrap/Form';
import { useCart } from "../contexts/CartContext";
import { ItemsContext } from "../contexts/ItemsContexts";

const initialValues = {
    phone: "",
    email: "",
    name: "",
};

export const Cart = () => {
    const { removeFromCart } = useCart();
    const { setCartItems } = useCart();
    const [buyer, setBuyer] = useState(initialValues);
    const { reset, removeItem, items } = useContext(ItemsContext);


    const total = items.reduce((acc, act) => acc + act.price * act.quantity, 0);

    const resetAll = () => {
        reset();
        setCartItems([]);
    };

    const handleChange = (ev) => {
        setBuyer((prev) => ({
            ...prev,
            [ev.target.name]: ev.target.value
        }));
    };

    const handleOrder = () => {
        const order = {
            buyer,
            items,
            total,
        };

        const db = getFirestore();
        const orderCollection = collection(db, "orders");

        addDoc(orderCollection, order).then(({ id }) => {
            if (id) {
                alert("su orden " + id + " ha sido completada");
                reset();
                setBuyer(initialValues);
            }
        });
    };

    const handleRemove = (id) => {
        removeItem(id);
        removeFromCart(id);
    };

    if (!items.length) return "no estas comprando nada";

    return (
        <Container>
            <button
                style={{
                    color: 'white',
                    border: 'none',
                    padding: '10px 20px',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    backgroundColor: '#343a40',
                    margin: '1%'
                }}
                onClick={resetAll}
            >
                Vaciar
            </button>
            {items.map(i => (
                <div key={i.id} style={{ border: "solid", display: 'flex' }}>
                    <div>
                        <img src={i.imageid} height={150} alt={i.title} />
                    </div>
                    <div>
                        <div>
                            <h2>{i.title}</h2>
                            <p>precio: {i.price}</p>
                            <p>Cantidad: {i.quantity}</p>
                        </div>
                        <button
                            style={{
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer',
                                backgroundColor: '#343a40'
                            }}
                            onClick={() => handleRemove(i.id)}
                        >
                            Remover
                        </button>
                    </div>
                </div>
            ))}
            <h4>total: {total}</h4>
            <hr />
            {!!items.length && (
                <Form>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control value={buyer.name} onChange={handleChange} name="name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Email</Form.Label>
                        <Form.Control value={buyer.email} onChange={handleChange} name="email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Telefono</Form.Label>
                        <Form.Control value={buyer.phone} onChange={handleChange} name="phone" />
                    </Form.Group>
                    <button
                        style={{
                            color: 'white',
                            border: 'none',
                            padding: '10px 20px',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            backgroundColor: '#343a40'
                        }}
                        type="button"
                        onClick={handleOrder}
                    >
                        Comprar
                    </button>
                </Form>
            )}
        </Container>
    );
};


