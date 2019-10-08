import * as React from 'react'

const DefaultState = {
  productListings: [],
  filter: {}
}

const ProductListingsContext = React.createContext(DefaultState);
export const ProductListingsConsumer = ProductListingsContext.Consumer;

export class ProductListingsProvider extends React.Component {
    static applyFilter(listings, filter) {
      const { airflow, maxPower, soundAtMaxSpeed, sweepDiameter } = filter
      let result = listings
      if (airflow) {
        const desiredAirflow = airflow
        result = result.filter(item => item.airflow >= desiredAirflow)
      }
      if (maxPower) {
        const desiredMaxPower = maxPower
        result = result.filter(item => item.maxPower >= desiredMaxPower)
      }
      if (soundAtMaxSpeed) {
        const desiredSoundAtMaxSpeed = soundAtMaxSpeed
        result = result.filter(item => item.soundAtMaxSpeed >= desiredSoundAtMaxSpeed)
      }
      if (sweepDiameter) {
        const desiredSweepDiameter = sweepDiameter
        result = result.filter(item => item.sweepDiameter >= desiredSweepDiameter)
      }
      return result
    }
  
    state = DefaultState
  
    componentDidMount() {
    //   fetch('/server/listings.json')
    //     .then(res => res.json())
    //     .then(res => {
    //       this.setState({ productListings: res })
    //     })
    }
  
    getListingByProductId = productId => {
      const { productListings } = this.state
      return productListings.find(product => product.id === Number(propertyId))
    }
  
    updateFilter = filter => {
      this.setState({
        filter
      })
    }
  
    render() {
      const { children } = this.props
      const { productListings, filter } = this.state
  
      const filteredListings = ProductListingsProvider.applyFilter(
        productListings,
        filter
      )
  
      return (
        <ProductListingsContext.Provider
          value={{
            allListings: productListings,
            productListings: filteredListings,
            updateFilter: this.updateFilter,
            getListingByProductId: this.getListingByProductId
          }}
        >
          {children}
        </ProductListingsContext.Provider>
      )
    }
  }