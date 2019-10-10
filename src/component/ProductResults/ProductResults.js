import React from 'react';
import ProductCard from '../ProductCard/ProductCard';

const ProductResults =(props) => {
    console.log(props);
    // let allResults = products.map((_product,_id)=>{
    //     console.log(products);
    //     return(
    //         <ProductCard
    //         handleProductCards={this.handleProductCards}
    //         key={_id}
    //         id={_product.id}
    //         model={_product.model}
    //         airflow={_product.airflow}
    //         maxpower={_product.maxpower}
    //         sound={_product.sound}
    //         diameter={_product.diameter}
    //         />
    //     )
    // });
    // if (allResults.length === 0) {
    //     allResults = <p>No results match your criteria! </p>
    // }
        return ( 
            <div>
             {console.log(props)}
            </div>
         );
    
};
 
export default ProductResults;