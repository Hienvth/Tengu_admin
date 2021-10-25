import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Customers from '../pages/Customers'
import Products from '../pages/Products'
import Analytics from '../pages/Analytics'
import Orders from '../pages/Orders'
import Add from '../pages/Add'
import Profile from '../pages/Profile'
import Settings from '../pages/Settings'
const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Dashboard}/>
            <Route path='/customers' component={Customers}/>
            <Route path='/products' component={Products}/>
            <Route path='/orders' component={Orders}/>
            <Route path='/analytics' component={Analytics}/>
            <Route path='/add' component={Add}/>
            <Route path='/profile' component={Profile}/>
        
            <Route path='/settings' component={Settings}/>
        
        </Switch>
    )
}

export default Routes
