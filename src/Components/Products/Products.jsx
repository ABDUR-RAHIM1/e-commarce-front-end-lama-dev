import React from 'react'
import { popularProduct } from '../FakeData'
import Product from '../Product/Product'
import './Products.css'

function Products() {

    return (
        <>
            <h2 className='text-center my-4'>Popular Products</h2>
            <div className="popularContainer">
                {
                    popularProduct.map(pPro => {
                        return <Product product={pPro} key={pPro.id} />
                    })
                }
            </div>
        </>
    )
}

export default Products