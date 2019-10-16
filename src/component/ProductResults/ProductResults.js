import React from 'react';
import ProductCard from '../ProductCard/ProductCard';



const ProductResults =(props) => {
    console.log(props);
    console.log(props.result);
    let allResults = props.result
    

   
        return ( 
            <div>
             <ProductCard results ={allResults}>
             </ProductCard>
            </div>
         );
    };
    

 
export default ProductResults;