import React, { Component } from 'react';
import Auxe from '../../hoc/Auxe';
import Modal from '../../component/UI/Modal/Modal';
// import Filter from '../../component/Filter/Filter';
// import Header from '../../component/Header/Header';
import ProductResults from '../../component/ProductResults/ProductResults';
import {connect} from 'react-redux';

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
                model: "Emerson Luray Eco Series CF860",
                airflow: "8,500 CFM",
                maxpower: "33 W at max speed ",
                sound: "40 dBAat max speed",
                diameter: "60 fan sweep diameter"
            }, {
                model: "Minka Aviation Series F853-RW",
                airflow: "6,604 CFM",
                maxpower: "25.92 W at max speed ",
                sound: "36 dBAat max speed",
                diameter: "60 fan sweep diameter"
            },],

            promptModal: false
        }
    }

    promptModal = () => {
        this.setState({promptModal: true});
    }
    //Use this function to update state everytime a product passes through the filter, causing the cards to be rendered
    // handleProductCards(state){
    //     console.log(state);
    //     const
    // }

    render() {
        return (
            <Auxe>
                <Modal show={this.state.promptModal}> {this.state.categories}</Modal>
                {/* <Header></Header>
                <Modal />
                <Filter></Filter> */}
                <ProductResults result = {this.state.products}></ProductResults>
           
            </Auxe>
        );
    }

}


const mapStateToProps = state => {
    return {
        items: state.products
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onProductAdded: () => dispatch({type:})
    }
}
