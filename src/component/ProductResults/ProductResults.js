import React from 'react';
import ProductCard from '../ProductCard/ProductCard';



const ProductResults =(props) => {
    console.log(props);
    console.log(props.result);
    let allResults = Object.keys(props.result)
    .map(_productID =>{
        return[...Array(props.result[_productID] )].map((_, i) => {
            return <ProductCard
           key ={_productID + i} type = {_productID} />;
        } );
       
    }).reduce((arr,el) =>{
        return arr.concat(el)
    },[]); 
    if (allResults.length === 0) {
        allResults = <p>No results match your criteria! </p>;
    }

   
        return ( 
            <div>
             <ProductCard results ={allResults}>
                 {allResults}
             </ProductCard>
            </div>
         );
    };
    

 
export default ProductResults;