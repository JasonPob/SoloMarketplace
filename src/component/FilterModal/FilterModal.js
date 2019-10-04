// import React, { Component } from 'react';
// import FilterButtons from './FilterButtons/FilterButtons';
// import FilterBoxes from './FilterBoxes/FilterBoxes';

// class FilterModal extends Component {
//     state = {
//         type: [
//             { id: 1, value: "Use Type" },
//             { id: 2, value: "Application" },
//             { id: 3, value: "Mounting Location" },
//             { id: 4, value: "Accessories" },
//             { id: 5, value: "Model year" }],
//         useType: [
//             { id: 1, value: "Commercial" },
//             { id: 2, value: "Industrial" },
//             { id: 3, value: "Residential" }],
//         application: [
//             { id: 1, value: "Indoor" },
//             { id: 2, value: "Outdoor" }],
//         mountingLocation: [
//             { id: 1, value: "Roof" },
//             { id: 2, value: "Wall" },
//             { id: 3, value: "Free standing" }],
//         accessories: [
//             { id: 1, value: "With light" },
//             { id: 2, value: "Without light" }],
//         technicalDetails: [
//             { id: 1, value: "Airflow (CFM)" },
//             { id: 2, value: "Max power (W)" },
//             { id: 3, value: "Sound at max speed (dBA)" },
//             { id: 4, value: "Fan sweep diameter (in)" },
//             { id: 5, value: "Height (in)" }],
//         brand: [
//             { id: 1, value: "Selected Brand(s)" }],
//         other: [
//             { id: 1, value: "With the words" }]

//     }
//     render() {

//         return (
//             <div>
//                 <div>Find fans</div>
//                 <div>Type
//                 <div>
//                         Use Type:
//                     {this.state.useType.map(type => (
//                             <FilterButtons key={useType.id} value={useType.value} id={useType.id} />
//                         ))}
//                     </div>
//                     <div>
//                         Application:
//                     {this.state.application.map(type => (
//                             <FilterButtons key={application.id} value={application.value} id={application.id} />
//                         ))}
//                     </div>
//                     <div>
//                         Mounting Location:
//                     {this.state.mountingLocation.map(type => (
//                             <FilterButtons key={mountingLocation.id} value={mountingLocation.value} id={mountingLocation.id} />
//                         ))}
//                     </div>
//                     <div>
//                         Accessories:
//                     {this.state.accessories.map(type => (
//                             <FilterButtons key={accessories.id} value={accessories.value} id={accessories.id} />
//                         ))}
//                     </div>
//                     <div>
//                         Model Year:
//                         <FilterBoxes></FilterBoxes>
//                         ---
//                         <FilterBoxes></FilterBoxes>
//                     </div>
//                 </div>
//                 <div>Technical Details
//                 <div>
//                         Airlflow (CFM):
//                     <FilterBoxes></FilterBoxes>
//                         ---
//                         <FilterBoxes></FilterBoxes>
//                     </div>
//                     <div>
//                         Max Power (W):
//                     <FilterBoxes></FilterBoxes>
//                         ---
//                         <FilterBoxes></FilterBoxes>
//                     </div>
//                     <div>
//                         Sound at max speed (dBA):
//                     <FilterBoxes></FilterBoxes>
//                         ---
//                         <FilterBoxes></FilterBoxes>
//                     </div>
//                     <div>
//                         Fan sweep Diameter (in):
//                     <FilterBoxes></FilterBoxes>
//                         ---
//                         <FilterBoxes></FilterBoxes>
//                     </div>
//                     <div>
//                         Height (in):
//                     <FilterBoxes></FilterBoxes>

//                         <FilterBoxes></FilterBoxes>
//                     </div>
//                 </div>
//                 <div>
//                     Brand
// <div>Selected Brand(s)</div>
//                 </div>
//                 <div>
//                     Other
//                     <div>With the words</div>
//                     </div>



//             </div>
//         );
//     }
// }

// export default FilterModal;