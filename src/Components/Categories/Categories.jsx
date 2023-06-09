import React from 'react'
import CategoriItems from '../CategoriItems/CategoriItems'
import { Categorie } from '../FakeData'
import "./Categories.css"

function Categories() {
    return (
        <div className='categoriContainer'>
            {
                Categorie.map(cate => {
                    return <CategoriItems categori={cate} key={cate.id} />
                })
            }
        </div>
    )
}

export default Categories