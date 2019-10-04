import React, { Component } from 'react';
import Auxe from '../../hoc/Auxe';
import ProductCard from '../../component/ProductCard/ProductCard';
import Modal from '../../component/UI/Modal/Modal';
import Filter from '../../component/Filter/Filter';
import Header from '../../component/Header/Header';


export default class ProductContainer extends Component {
    constructor() {
        super();
        this.state = {
            products =[
                {
                title: "Big Ass Haiku H Series S3150-S0-BC-04-01-C-01",
                airflow: "5,467 CFM",
                maxpower: "21.14 W at max speed ",
                sound: "35 dBAat max speed",
                diameter: "60 fan sweep diameter"
            }, {
                title: "Big Ass Haiku H Series S3150-S0-BC-04-01-C-01",
                airflow: "5,467 CFM",
                maxpower: "21.14 W at max speed ",
                sound: "35 dBAat max speed",
                diameter: "60 fan sweep diameter"
            }, {
                title: "Big Ass Haiku H Series S3150-S0-BC-04-01-C-01",
                airflow: "5,467 CFM",
                maxpower: "21.14 W at max speed ",
                sound: "35 dBAat max speed",
                diameter: "60 fan sweep diameter"
            },]
        }
    }

    handleProductCards(state){
        console.log(state);
        const
    }
    render() {
        return (
            <Auxe>
                <Header></Header>
                <Modal />
                <Filter></Filter>
                <div className="renderedProductCards">
                    {this.state.products.map((_product,_id)=>{
                        return(
                            <ProductCard
                            
                            />
                        )
                    })}
                </div>

            </Auxe>
        );
    }

}

