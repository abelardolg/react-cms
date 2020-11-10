import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

import { DashboardScreen } from '../dashboard/DashboardScreen';
import { Navbar } from '../dashboard/ui/Navbar';
import { LoginScreen } from '../login/LoginScreen';

export const CMSRouter = () => {
    return (        
      <Router>
        <div>
          
          <Navbar />
          
          <Switch>
              <Route  exact path="/login" component={ LoginScreen }/>
              <Route  exact path="/dashboard" component={ DashboardScreen }/>
          </Switch>

        </div>
      </Router>
    )
}
