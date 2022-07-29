import { useState, useContext, useEffect } from "react";
import { CartContext } from "../../Context/CartContext";
import ItemCart from "../itemsCart";
import "./style.scss"


const Cart = () => {

    const [carritoOpen, setCarritoOpen] = useState(false);
    const [cantidadProductos, setCantidadProductos] = useState(0);

    const { cartItem } = useContext(CartContext)

    useEffect(() => {
        setCantidadProductos(
            cartItem.reduce((previus, current) => previus + current.cantidad, 0)
        )
    }, [cartItem])

    const total = cartItem.reduce((previus, current) => previus + current.cantidad * current.price, 0)

    return (
        <div className="carrito ">
            <div onClick={() => {
                setCarritoOpen(!carritoOpen)
            }} >
                <div>
                    {carritoOpen ? (<p className="cerrarCarrito"> x </p>

                    ) : (
                        <img className='carritoImg' id='carrito' src="img/carrito.png"></img>
                    )}



                    {!carritoOpen && <span className=" contadorCarrito">
                        {cantidadProductos}

                    </span>}

                </div>
            </div>
            {cartItem && carritoOpen && (
                <div className="carritoContenedor">
                    <h2>Tu carrito</h2>

                    {cartItem.length === 0 ? <p>Tu carrito esta vacio</p> : (
                        <div>
                            {cartItem.map((item, i) => (
                                <ItemCart key={i} item={item} />
                            ))}
                        </div>
                    )}

                    <h2 className="total">Total: $ <span>{total}</span>  </h2>

                </div>
            )}






        </div>






    )
}
export default Cart;