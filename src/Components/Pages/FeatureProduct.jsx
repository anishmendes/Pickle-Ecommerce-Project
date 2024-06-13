import React from 'react'
import { useProductContext } from '../../context/productcontext'
import Product from './Product';


const FeatureProduct = () => {
    const { isLoading, featureProducts } = useProductContext();
    

    if (isLoading) {
        return <div> .....Loading </div>
    }
  return (
   <div>
    <div>
        <div>Check now</div>

        <div className='grid grid-cols-3'>
        {featureProducts.length > 0 ? (
                featureProducts.map((currElem) => { // Corrected syntax here
                    return <Product key={currElem.id} {...currElem} />
                })
            ) : (
                // <div>No featured products available.</div>
            )}
        </div>
    </div>
    </div>
  )
}

export default FeatureProduct
