import { createContext, useEffect, useState } from "react";


export const CarritoContext = createContext();

function ContadorCarrito() {


    const [carrito, setCarrito] = useState(0);

    useEffect(() => {
        console.log('%c    Renderizado Siempre', 'color: #38761d');
        return () => {
            console.log('Contador listo para ser cleanup!');
        }
    });

    useEffect(() => {
        return (
            console.log("Agregado al carrito")
        )
    }, [carrito]
    )

    useEffect(() => {
        console.log('>>>>> Contador mounted!');
        return () => {
            console.log('Contador listo para ser cleanup!');
        }
    }, []);




    function agregarAlCarrito() {
        setCarrito(carrito + 1);
    }
}