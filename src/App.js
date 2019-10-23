import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Layout from './component/Layout/Layout';
import ProductContainer from './containers/ProductContainer/ProductContainer';
import FilterModal2 from './component/FilterModal/FilterModal2';
// import FilterModal from './component/FilterModal/FilterModal';
import Login from './component/Login/Login';
import Signup from './component/Signup/Signup';
import Filter from './component/Filter/Filter';
import DynamicSlider from './component/Filter/DynamicSliders';
import Searchbar from './component/Searchbar/Searchbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CardActions } from '@material-ui/core';
import AuthenticationService from '../service/AuthenticationService';
import AuthenticatedRoute from './AuthenticatedRoute';
import * as actions from './store/actions/index';


class App extends Component {
  componenetDidMount() {
    this.props.onTryAutoSignup();
  }

  render() {
    // let routes = (
    //   <Switch>
    //     <Route path="auth" />
    //     <Route path="/" />
    //   </Switch>
    // );

    // if (this.props.isAuthenticated) {
    //   routes = (
    //     <Switch>
    //       <Route path="/" strict exact component={Login} />
    //       <Route path="/signup" strict exact component={Signup} />
    //       <Route path="/products" component={ProductContainer} />
    //       {/* <Route path="/modal" component={FilterModal}/> */}
    //       <Route path="/modal2" exact component={FilterModal2} />
    //       {/* <Route path="/header" component={Header}/> */}
    //       <Route path="/filter" exact component={Filter} />
    //       <Route path="/slider" exact component={DynamicSlider} />
    //       <Route path="/search" exact component={Searchbar} />
    //     </Switch>
    //   )
    // }

    return (
      <div>
        <Layout>
          <Route path="/" strict exact component={Login} />
          <Route path="/signup" strict exact component={Signup} />
          <Route path="/products" component={ProductContainer} />
          {/* <AuthenticatedRoute path="/products" component={ProductContainer}/> */}
          {/* <Route path="/modal" component={FilterModal}/> */}
          <Route path="/modal2" exact component={FilterModal2} />
          {/* <Route path="/header" component={Header}/> */}
          <Route path="/filter" exact component={Filter} />
          <Route path="/slider" exact component={DynamicSlider} />
          <Route path="/search" exact component={Searchbar} />
        </Layout>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
