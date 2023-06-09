import React from 'react'
import "./Product.css"
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { GiSelfLove } from 'react-icons/gi'
import { BsSearchHeart } from 'react-icons/bs'
function Product(props) {
    const { image } = props.product;

    return (
        <>
            <div className='prodcutContainer'>
                <img src={image} alt="" />
                <div className="proIcons">
                    <AiOutlineShoppingCart className='proCart' />
                    <GiSelfLove className='proCart' />
                    <BsSearchHeart className='proCart' />
                </div>
            </div>

        </>
    )
}

export default Product