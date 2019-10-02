import React from 'react';
import Auxe from '../../hoc/Auxe';

const filterModal = (props) => {
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
                        checked={this.state.selectedOption === "commercial"}
                        onChange={this.handleOptionChange}
                        className="form-check-input"
                    />
                    Commercial
                </label>

                <label>
                    <input
                        type="radio"
                        name="react-tips"
                        value="Industrial"
                        checked={this.state.selectedOption === "commercial"}
                        onChange={this.handleOptionChange}
                        className="form-check-input"
                    />
                    Industrial
                </label>

                <label>
                    <input
                        type="radio"
                        name="react-tips"
                        value="Residential"
                        checked={this.state.selectedOption === "commercial"}
                        onChange={this.handleOptionChange}
                        className="form-check-input"
                    />
                    Residential
                </label>
            </div>
        </Auxe>
    )

};

export default filterModal;