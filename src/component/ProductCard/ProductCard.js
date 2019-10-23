import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const ProductCard = (props) => {
    console.log(props)
//map ALL products
    const allProducts = props.map(product =>
        <div key={product.model + index} >
            <div className="card-image">
                <img src={product.imgUrl} alt={`${product.model}`} width="200" />
            </div>
            <div className="card-header">
                <div className="card-title h5">{product.model}</div>
                <div className="card-title h6"> {product.airflow}</div>
                <div className="card-subtitle text-gray">{product.maxpower}</div>
            </div>
            <div className="card-body">{product.sound}</div>
            <div className="card-body">{product.diameter}</div>
            <div className="card-footer">
                <Link className="btn btn-primary" to={`/details/`}>
                    Go to property
          </Link>
            </div>
        </div>
            )

    return (
        <div style={{ margin: '1rem 0' }}>
          {allProducts}
            </div>
    )

};

 {/* ProductCard.propTypes = {
     type: PropTypes.string.isRequired
 }; */}
 
export default ProductCard; 