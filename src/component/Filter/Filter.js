import React, {Component} from 'react';


export default class Filter extends Component{
    constructor(props) {
		super(props);
		this.state = {
			passStatus: false,
			id: this.props.id
		};
		this.handleChange = this.handleChange.bind(this);
		this.updateProductCount = this.updateProductCount.bind(this);
	}
}

handleChange(){
    this.setState({passStatus: !this.state.status}, this.updateProductCount);
}