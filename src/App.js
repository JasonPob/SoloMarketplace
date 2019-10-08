import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Layout from './component/Layout/Layout';
// import ProductContainer from './containers/ProductContainer/ProductContainer';
import FilterModal2 from './component/FilterModal/FilterModal2';
// import FilterModal from './component/FilterModal/FilterModal';
import Login from './component/Login/Login';
import Signup from './component/Signup/Signup';


class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Route path="" component={Login}/>
          <Route path="/signup" component={Signup}/>
          {/* <Route path="/products" component={ProductContainer}/> */}
          {/* <Route path="/modal" component={FilterModal}/> */}
          <Route path="/modal2" component={FilterModal2}/>
          {/* <Route path="/header" component={Header}/> */}
          
        </Layout>
      </div>
    );
  }
}

export default App;