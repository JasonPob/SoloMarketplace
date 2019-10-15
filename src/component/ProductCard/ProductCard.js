import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const ProductCard =(props) =>  {
    
        return (
            <div style={{ margin: '1rem 0' }}>
                <div >
                    <div className="card-image">
                    </div>
                    <div className="card-header">
                        <div className="card-title h5">{props.model}</div>
                        <div className="card-title h6"> {props.airflow}</div>
                        <div className="card-subtitle text-gray">{props.maxpower}</div>
                    </div>
                    <div className="card-body">{props.sound}</div>
                    <div className="card-body">{props.diameter}</div>
                    <div className="card-footer">
                        <Link className="btn btn-primary" to={`/details/`}>
                            Go to property
                  </Link>
                    </div>
                </div>
            </div>
        )
    

}
    // ProductCard.propTypes = {
    //     type: PropTypes.string.isRequired
    // };
export default ProductCard;