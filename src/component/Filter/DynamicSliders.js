import React from 'react';
import ReactDOM from 'react-dom';
import Slider, { Range } from 'rc-slider';
// We can just import Slider or Range to reduce bundle size
// import Slider from 'rc-slider/lib/Slider';
// import Range from 'rc-slider/lib/Range';
import 'rc-slider/assets/index.css';
 

class DynamicSlider extends React.Component {
        constructor(props) {
          super(props);
          this.state = {
            lowerBound: 2000,
            upperBound: 10000,
            value: [0,5000],
          };
        }
        onLowerBoundChange = (e) => {
          this.setState({ lowerBound: +e.target.value });
        }
        onUpperBoundChange = (e) => {
          this.setState({ upperBound: +e.target.value });
        }
        onSliderChange = (lowerBound, upperBound) => {
          
          this.setState({
            lowerBound, upperBound
          });
        }
        handleApply = () => {
          const { lowerBound, upperBound } = this.state;
          this.setState({ value: [lowerBound, upperBound] });
        }
        render() {
            const labelStyle = { minWidth: '60px', display: 'inline-block' };
          return (
              <div className="column col-4 col-xs-12">
              <label style={labelStyle}>Min Value: </label><span>{this.state.lowerBound}</span>
              <br />
              <label style={labelStyle}>Max Value: </label><span>{this.state.upperBound}</span>
              
              <br />
              <br /><br />
              <Range allowCross={false} value={this.state.value} onChange={this.onSliderChange} />
            </div>
          );
        }
      }


export default DynamicSlider;