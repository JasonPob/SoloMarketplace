import React, {Component} from 'react';


export default class Filter extends Component{
    constructor(props) {
		super(props);
		this.state = {
			passStatus: false,
            id: this.props.id,
            initValues:[
                {airflow:[2000,10000]},
                {maxPower:[9.84, 96.52]},
                {soundAtMaxSpeed:[20,80]},
                {diameter:[18,96]},
                {firm:[0,0]},
                {global:[0,0]}

            ],
            type: [
                { id: 1, value: "Use Type" },
                { id: 2, value: "Application" },
                { id: 3, value: "Mounting Location" },
                { id: 4, value: "Accessories" },
                { id: 5, value: "Model year" }],
            useType: [
                { id: 1, value: "Commercial" },
                { id: 2, value: "Industrial" },
                { id: 3, value: "Residential" }],
            application: [
                { id: 1, value: "Indoor" },
                { id: 2, value: "Outdoor" }],
            mountingLocation: [
                { id: 1, value: "Roof" },
                { id: 2, value: "Wall" },
                { id: 3, value: "Free standing" }],
            accessories: [
                { id: 1, value: "With light" },
                { id: 2, value: "Without light" }],
            technicalDetails: [
                { id: 1, value: "Airflow (CFM)" },
                { id: 2, value: "Max power (W)" },
                { id: 3, value: "Sound at max speed (dBA)" },
                { id: 4, value: "Fan sweep diameter (in)" },
                { id: 5, value: "Height (in)" }],
            brand: [
                { id: 1, value: "Selected Brand(s)" }],
            other: [
                { id: 1, value: "With the words" }]
		};
		this.handleFilterChanges = this.handleFilterChanges.bind(this);
		this.updateProductCount = this.updateProductCount.bind(this);
	}
    
    updateProductCount(state){
        console.log(state);
        //Following function is from ProductContainer component, passes Filter component state to ProductContainer
        this.props.handleProductCards(this.state);
    }

    handleFilterChanges(){
        this.setState({passStatus: !this.state.status}, this.updateProductCount);
    }

    resetChanges(){
        this.setState({passStatus:false, 
            id:this.props.id,
            initValues:[
                {airflow:[2000,10000]},
                {maxPower:[9.84, 96.52]},
                {soundAtMaxSpeed:[20,80]},
                {diameter:[18,96]},
                {firm:[0,0]},
                {global:[0,0]}

            ]
        });
    }

    render() {
    
        return (
          <div className="filter">
            <form className="filterForm" noValidate>
              <p className="mb-1">Refine your results</p>
              <div className="columns text-center">
                <div className="column col-4 col-xs-12">
                  <div className="form-group">
                    <div className="col-3 col-sm-12">
                      <label className="form-label" htmlFor="price-from">
                        Product Type:
                      </label>
                    </div>
                    <div className="col-4 col-sm-12">
                      <input
                        className="form-input"
                        min="1990"
                        max="2020"
                        type="number"
                        id="modelYear"
                        placeholder="1990"
                      />
                      <input
                        className="form-input"
                        min="1990"
                        max="2020"
                        type="number"
                        id="price-from"
                        placeholder="2020"
                      />
                    </div>
                  </div>
                </div>
                <div className="column col-4 col-xs-12">
                  <div className="form-group">
                    <div className="col-3 col-sm-12">
                      <label className="form-label" htmlFor="postcode">
                        Postcode
                      </label>
                    </div>
                    <div className="col-9 col-sm-12">
                      <select className="form-select" id="postcode">
                        <option value="">Choose...</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="column col-4 col-xs-12">
                  <div className="form-group">
                    <div className="col-3 col-sm-12">
                      <label className="form-label" htmlFor="sortorder">
                        Sort Order
                      </label>
                    </div>
                    <div className="col-9 col-sm-12">
                      <select className="form-select" id="sortorder">
                        <option value="">Choose...</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        )
      }

}

