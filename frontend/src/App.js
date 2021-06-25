import React, {Component} from 'react';
import {Route,Switch} from 'react-router-dom';
// import {connect} from 'react-redux'

import Home from './Container/Home/Home';

class App extends Component{

  render(){

    return(

      <div>
        <Switch>
        <Route path='/' exact component={Home}/>
        </Switch>
      </div>
    )
  }
}


export default App;
