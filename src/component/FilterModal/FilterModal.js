import React from 'react';
import classes from '*.module.scss';
import Aux from '../../hoc/Auxe/Auxe';

const filterModal = (props) => {

    const modalContent = Object.keys(props.categories)
    .map(categoryKey => {
        return <li key={categoryKey}> {categoryKey}:
        {props.categories[categoryKey]}</li>
    });



    return(
        <Auxe>
            <h3>Find fans</h3>
            <ul>
                {modalContent}
            </ul>
            <h3>Type</h3>
            <div>
                <div>Use Type</div>
                <div>Application</div>
                <div>Mounting Location</div>
                <div>Accessories</div>
                <div>Model Year</div>
            </div>
            <h3>Technical Details</h3>
            <div>Airflow (CFM)</div>
            <div>Max Power (W)</div>
            <div>Sound at max speed (dBA)</div>
            <div>Fan sweep diameter (in)</div>
            <div>Height (in)</div>
        <h3>Brand</h3>
            <div>Select Brand(s)</div>
        <h3>Other</h3>
            <div>With the words</div>
   
        
        </Auxe>
    )
};

export default filterModal;