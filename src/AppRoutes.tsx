import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Navbar } from './NavBar';
import { About } from './pages/About';
import { Cart } from './pages/Cart';
import { Home } from './pages/Home';
import { Orders } from './pages/Orders';
export const AppRoutes = () => {
    return <>
        <Router>
            <div className='header'><Navbar title={'Sample shopping app'} /></div>
            <div className="container">
                <Switch>
                    <Route exact path='/home' component={Home} />
                    <Route exact path='/' component={Home} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/cart' component={Cart} />
                    <Route exact path='/orders' component={Orders} />

                </Switch>
            </div>
        </Router>
    </>
}