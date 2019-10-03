import React, {Component} from 'react';

class FilterModal extends Component {
    state = { 
        type:["Use Type", "Application", "Mounting Location", "Accessories", "Model year"],
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

            </div>
         );
    }
}
 
export default FilterModal;