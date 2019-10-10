import React, { Component } from 'react';
import Auxe from '../../hoc/Auxe';
import Modal from '../../component/UI/Modal/Modal';
import Filter from '../../component/Filter/Filter';
import Header from '../../component/Header/Header';
import ProductResults from '../../component/ProductResults/ProductResults';


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
    // handleProductCards(state){
    //     console.log(state);
    //     const
    // }

    render() {
        return (
            <Auxe>
                {/* <Header></Header>
                <Modal />
                <Filter></Filter> */}
                <ProductResults result = {this.state.products}></ProductResults>
            </Auxe>
        );
    }

}

