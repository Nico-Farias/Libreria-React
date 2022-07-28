import React from 'react'

import './style.scss'
import ProductsData from './../Data/ProductsData';

function Products() {
    return (
        <div className="conteinerProducts">
            {ProductsData.map((product) => (
                <div className="products">
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
                        <label className="stockProducts col-7">Diponibles <span>{product.stock}</span></label>
                        <input className='col-3' type="number" max={product.stock} />
                    </div>

                    <button className='btnCarrito' onClick={() => console.log(product)}>Agregar al carrito</button>

                </div>

            ))}


        </div>
    )

}
export default Products;