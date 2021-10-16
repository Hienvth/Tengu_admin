import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Customers from '../pages/Customers'
import Products from '../pages/Products'
import Analytics from '../pages/Analytics'
import Orders from '../pages/Orders'
const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Dashboard}/>
            <Route path='/customers' component={Customers}/>
            <Route path='/products' component={Products}/>
            <Route path='/orders' component={Orders}/>
            <Route path='/analytics' component={Analytics}/>
        
        </Switch>
    )
}

export default Routes
