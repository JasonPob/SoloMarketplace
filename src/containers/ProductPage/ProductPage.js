import React, { Component } from 'react'
// import ProductsService from '../service/ProductsService';

const INSTRUCTOR = 'in28Minutes'

class ProductPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            description: ''
        }
    }

    componentDidMount() {
        console.log(this.state.id)

        ProductsService.retrieveProduct(INSTRUCTOR, this.state.id)
        .then(res => this.setState({
            description: response.data.description
        }))
    }

    render() {
        let {id} = this.state

        return(
            
        )
    }



}