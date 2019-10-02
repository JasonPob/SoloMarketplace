import React, { Component } from 'react';
import Auxe from '../../hoc/Auxe';
import ProductCard from '../../component/ProductCard/ProductCard';
import Modal from '../../component/UI/Modal/Modal';


class ProductCardDisplay extends Component {
    render() {
        return (
            <Auxe>
                <Modal />
                <ProductCard></ProductCard>
                
            </Auxe>
        );
    }
}

export default ProductCardDisplay; 