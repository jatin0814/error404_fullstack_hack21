import React, {Component} from 'react';
import {Route,Switch} from 'react-router-dom';
// import {connect} from 'react-redux'


import User from './Container/Auth/Public/Public';
import Home from './Container/Home/Home';
import Admin from './Container/Admin/Admin'

class App extends Component{

  // componentDidMount(){
  //   this.props.onTryAutoSignup();
  // }

  render(){

    return(

      <div>
        <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/auth' exact component={User}/>
        <Route path='/admin' exact component={Admin}/>
        </Switch>
      </div>
    )
  }
}


export default App;
