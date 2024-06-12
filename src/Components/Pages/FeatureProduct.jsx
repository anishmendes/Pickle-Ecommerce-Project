// import React from 'react';
// import { useProductContext } from '../../context/productcontext';


// const FeatureProduct = () => {
//   const { featureProducts, isLoading, isError } = useProductContext();

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (isError) {
//     return <div>Error loading featured products</div>;
//   }

//   return (
//     <div>
//       <h2>Featured Products</h2>
//       <div className="feature-products">
//         {featureProducts.map((product) => (
//           <Product key={product.id} {...product} /> // Ensure unique key
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FeatureProduct;
