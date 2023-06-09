import React from 'react'
import "./CategoriItems.css"

function CategoriItems(props) {
    const { title, image } = props.categori
    return (
        <div className='categoriIItems'>
            <img src={image} alt="" />
            <div className="content">
                <h2>{title}</h2>
                <button className='btn btn-outline-secondary fw-bold mt-2'>Shop now</button>
            </div>
        </div>
    )
}

export default CategoriItems