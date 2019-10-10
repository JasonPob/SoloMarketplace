import React from 'react';


const ProductResults =() => {
  
    let allResults = this.state.products.map((_product,_id)=>{
        console.log(this.state.products);
        return(
            <ProductCard
            handleProductCards={this.handleProductCards}
            key={_id}
            id={_product.id}
            model={_product.model}
            airflow={_product.airflow}
            maxpower={_product.maxpower}
            sound={_product.sound}
            diameter={_product.diameter}
            />
        )
    });
    if (allResults.length === 0) {
        allResults = <p>No results match your criteria! </p>
    }
        return ( 
            <div>
             {allResults}
            </div>
         );
    
};
 
export default ProductResults;