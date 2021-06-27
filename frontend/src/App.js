import React, {Component} from 'react';
import {Route,Switch} from 'react-router-dom';
import {connect} from 'react-redux'

import User from './Container/Auth/Public/Public';
import Home from './Container/Home/Home';
import Admin from './Container/Admin/Admin'
import Map from './Container/Map/Map'
import Help from './Components/Help/Help'
import Chat from './Container/Chat/Chat'

class App extends Component{

  render(){

    return(

      <div>
        <Switch>
        <Route path='/' exact component={User}/>
        <Route path='/home' exact component={Home}/>
        <Route path='/admin' exact component={Admin}/>
        <Route path='/directions' exact component={Map}/>
        <Route path='/help' exact component={Help}/>
        <Route path='/chat/' exact component={Chat}/>
        </Switch>
      </div>
    )
  }
}

export default App;
