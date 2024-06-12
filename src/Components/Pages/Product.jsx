import React from 'react'
import { NavLink } from 'react-router-dom';

const Product = ({curElem}) => {

    const {id, name, image, price, category} = curElem;
  return (
   <NavLink to={`/singleproduct/${id}`}>
<div>
    <figure>
        <img src={image} alt={name} />
        <figcaption>{category}</figcaption>
    </figure>
    <div>
        <div className='flex'>
            <h3>{name}</h3>
            <p>{price}</p>
        </div>
    </div>
</div>
   </NavLink>
  )
} 

export default Product
