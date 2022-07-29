
import { useEffect, useState, useContext } from 'react';
import './style.scss'
import ProductsData from './../Data/ProductsData';

import { CartContext } from '../../Context/CartContext';


function Products() {



    const { addItemToCart } = useContext(CartContext)




    return (

        <div className="conteinerProducts">

            {ProductsData.map((product) => (

                <div key={product.id} className="products">
                    <img className="imgProducts" src={product.image}></img>

                    <div className='titleProducts'>
                        <h2> {product.title}  </h2>
                    </div>

                    <div className='priceProducts'>
                        <p >
                            ${product.price}
                        </p>



                    </div>
                    <div className='cantidadStock row'>
                        <label className="stockProducts col-8">Diponibles <span>{product.stock}</span></label>
                        <input className='col-3' type="number" max={product.stock} min={1} value={1} />
                    </div>


                    <button className='btnCarrito' onClick={() => addItemToCart(product)}>Agregar al carrito</button>

                    <button className='verMasInfo' onClick={() => console.log(product)}>Ver mas informacion</button>
                </div>

            ))}


        </div>
    )



}
export default Products;