import React, {Component} from 'react';
import {Route,Switch} from 'react-router-dom';
// import {connect} from 'react-redux'


import User from './Container/Auth/Public/Public';
import Home from './Container/Home/Home';
import Admin from './Container/Admin/Admin'
import Map from './Container/Map/Map'
import Help from './Components/Help/Help'
import Chat from './Container/Chat/Chat'
import Room from './Container/Room/Room'

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
        <Route path='/directions' exact component={Map}/>
        <Route path='/help' exact component={Help}/>
        <Route path='/room' exact component={Room}/>
        <Route path='/chat/:room' exact component={Chat}/>
        </Switch>
      </div>
    )
  }
}

export default App;
