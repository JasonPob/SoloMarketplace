import React from 'react';
import Auxe from '../../hoc/Auxe';

const FilterModal = (props) => {
    return (
        <Auxe>
            <h3>Find Fans</h3>
            <h3>Type</h3>
            <div>
                Use Type <label>
                    <input
                        type="radio"
                        name="react-tips"
                        value="Commercial"
                        // checked={this.state.selectedOption === "commercial"}
                        // onChange={this.handleOptionChange}
                        className="form-check-input"
                    />
                    Commercial
                </label>

                <label>
                    <input
                        type="radio"
                        name="react-tips"
                        value="Industrial"
                        // checked={this.state.selectedOption === "commercial"}
                        // onChange={this.handleOptionChange}
                        className="form-check-input"
                    />
                    Industrial
                </label>

                <label>
                    <input
                        type="radio"
                        name="react-tips"
                        value="Residential"
                        // checked={this.state.selectedOption === "commercial"}
                        // onChange={this.handleOptionChange}
                        className="form-check-input"
                    />
                    Residential
                </label>
            </div>

            <div>
                Application  
                <label>
                    <input
                        type="radio"
                        name="react-tips"
                        value="Indoor"
                        // checked={this.state.selectedOption === "commercial"}
                        // onChange={this.handleOptionChange}
                        className="form-check-input"
                    />
                    Indoor
                </label>
                <label>
                    <input
                        type="radio"
                        name="react-tips"
                        value="Outdoor"
                        // checked={this.state.selectedOption === "commercial"}
                        // onChange={this.handleOptionChange}
                        className="form-check-input"
                    />
                    Outdoor
                </label>
            </div>

            <div>
            Mounting Location
            <label>
                    <input
                        type="radio"
                        name="react-tips"
                        value="Roof"
                        // checked={this.state.selectedOption === "commercial"}
                        // onChange={this.handleOptionChange}
                        className="form-check-input"
                    />
                    Roof
                </label>
                <label>
                    <input
                        type="radio"
                        name="react-tips"
                        value="Wall"
                        // checked={this.state.selectedOption === "commercial"}
                        // onChange={this.handleOptionChange}
                        className="form-check-input"
                    />
                    Wall
                </label>
                <label>
                    <input
                        type="radio"
                        name="react-tips"
                        value="freeStanding"
                        // checked={this.state.selectedOption === "commercial"}
                        // onChange={this.handleOptionChange}
                        className="form-check-input"
                    />
                    Free standing
                </label>
                
            </div>
        </Auxe>
    )

};

export default FilterModal;