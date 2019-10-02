import React from 'react';
import classes from './FilterModal.css';

const FilterModal = (props) => (
    <>
    <div className={classes.type}>
        <div className={classes.Label}>{props.category}</div>
        <button 
            className={classes.Less} 
            onClick={props.added}>Commercial</button>
        <button 
            className={classes.More} 
            onClick={props.added}>Industrial</button>
        <button 
            className={classes.More} 
            onClick={props.added}>Residential</button>
    </div>

    <div className={classes.techDetails}>
        <div className={classes.Label}>{props.label}</div>
        
    </div>
    </>
);

export default FilterModal;