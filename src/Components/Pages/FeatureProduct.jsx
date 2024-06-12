import React from 'react'
import { useProductContext } from '../../context/productcontext'

const FeatureProduct = () => {
    const { isLoading, featureProducts } = useProductContext();
    console.log('featureProducts:', featureProducts); 
  return (
    <div>
      This is feature product section
    </div>
  )
}

export default FeatureProduct
