import React, { Component } from 'react';
import Layout from './component/Layout/Layout';
import ProductCardDisplay from './containers/ProductCardDisplay/ProductCardDisplay';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <ProductCardDisplay />
        </Layout>
      </div>
    );
  }
}

export default App;