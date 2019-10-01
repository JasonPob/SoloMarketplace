import React, { Component } from 'react';
import Auxe from '../../hoc/Auxe';
import ProductCard from '../../component/ProductCard/ProductCard';

class ProductCardDisplay extends Component {
    render() {
        return (
            <Auxe>
                <ProductCard></ProductCard>
            </Auxe>
        );
    }
}

export default ProductCardDisplay; 