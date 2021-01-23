import React from 'react';
import MainLayout from '../src/components/layout/MainLayout/MainLayout';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from './components/views/Login/Login';
import Kitchen from './components/views/Kitchen/Kitchen';
import Waiter from './components/views/Waiter/Waiter';
import Tables from './components/views/Tables/Tables';
import HomePage from './components/views/HomePage/HomePage';
import Order from './components/views/Order/Order';
import Events from './components/views/Events/Events';
import Booking from './components/views/Booking/Booking';

const App = () => (
  <BrowserRouter>
    <MainLayout>
      <Switch>
        <Route exact path={process.env.PUBLIC_URL + '/'} component={HomePage} />
        <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login} />
        <Route exact path={process.env.PUBLIC_URL + '/kitchen'} component={Kitchen} />
        <Route exact path={process.env.PUBLIC_URL + '/waiter'} component={Waiter} />
        <Route exact path={`${process.env.PUBLIC_URL}/waiter/order/:id`} component={Order} />
        <Route exact path={`${process.env.PUBLIC_URL}/waiter/order/new`} component={Order} />
        <Route exact path={process.env.PUBLIC_URL + '/tables'} component={Tables} />
        <Route exact path={`${process.env.PUBLIC_URL}/tables/booking/:id`} component={Booking} />
        <Route exact path={`${process.env.PUBLIC_URL}/tables/booking/new`} component = {Booking}/>
        <Route exact path={`${process.env.PUBLIC_URL}/tables/events/:id`} component = {Events}/>
        <Route exact path={`${process.env.PUBLIC_URL}/tables/events/new`} component = {Events}/>
      </Switch>
    </MainLayout>
  </BrowserRouter>
);


export default App;
