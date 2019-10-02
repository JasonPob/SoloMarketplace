import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Layout from './component/Layout/Layout';
import ProductCardDisplay from './containers/ProductCardDisplay/ProductCardDisplay';
import FilterModal from './component/FilterModal/FilterModal';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Route path="/products" component={ProductCardDisplay}/>
          <Route path="/modal" component={FilterModal}/>
          
        </Layout>
      </div>
    );
  }
}

export default App;