import React, {Component} from 'react';
import FilterButtons from './FilterButtons/FilterButtons';
import FilterBoxes from './FilterBoxes/FilterBoxes';

class FilterModal extends Component {
    state = { 
        type:[
            {id:1, value:"Use Type" },
             "Application", "Mounting Location", "Accessories", "Model year"],
            useType:["Commercial","Industrial","Residential"],
            application:["Indoor", "Outdoor"],
            mountingLocation:["Roof", "Wall", "Free standing"],
            accessories:["With light", "Without light"],
        technicalDetails:["Airflow (CFM)","Max power (W)", "Sound at max speed (dBA)","Fan sweep diameter (in)", "Height (in)"],
        brand:["Selected Brand(s)"],
        other:["With the words"]
            
     }
    render() { 

        return ( 
            <div>
                <div>Find fans</div>
                <div>Type</div>
                <div>
                    Use Type: 
                    {this.state.type.map(type =>(
                        <FilterButtons key={useType}/>
                    ))}
                </div>

            </div>
         );
    }
}
 
export default FilterModal;