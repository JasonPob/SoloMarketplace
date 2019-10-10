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
            products :[
                {
                model: "Big Ass Haiku H Series S3150-S0-BC-04-01-C-01",
                airflow: "5,467 CFM",
                maxpower: "21.14 W at max speed ",
                sound: "35 dBAat max speed",
                diameter: "60 fan sweep diameter"
            }, {
                model: "Big Ass Haiku H Series S3150-S0-BC-04-01-C-01",
                airflow: "5,467 CFM",
                maxpower: "21.14 W at max speed ",
                sound: "35 dBAat max speed",
                diameter: "60 fan sweep diameter"
            }, {
                model: "Big Ass Haiku H Series S3150-S0-BC-04-01-C-01",
                airflow: "5,467 CFM",
                maxpower: "21.14 W at max speed ",
                sound: "35 dBAat max speed",
                diameter: "60 fan sweep diameter"
            },]
        }
    }

    //Use this function to update state everytime a product passes through the filter, causing the cards to be rendered
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
                    })}
                </div>

            </Auxe>
        );
    }

}

