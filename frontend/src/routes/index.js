import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Routes';

import SignIn from '../pages/SignIn';

import DeliveryList from '../pages/DeliveryList';
import DeliverymanList from '../pages/DeliverymanList';
import RecipientList from '../pages/RecipientList';
import DeliveryProblemList from '../pages/DeliveryProblemList';

import Delivery from '../pages/Delivery';
import Deliveryman from '../pages/Deliveryman';
import Recipient from '../pages/Recipient';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/deliveries" component={DeliveryList} isPrivate />
      <Route path="/deliverymen" component={DeliverymanList} isPrivate />
      <Route path="/recipients" component={RecipientList} isPrivate />
      <Route path="/problems" component={DeliveryProblemList} isPrivate />

      <Route path="/delivery" component={Delivery} isPrivate />
      <Route path="/deliveryman" component={Deliveryman} isPrivate />
      <Route path="/recipient" component={Recipient} isPrivate />

      <Route path="/" component={() => <h1>404 Page not found</h1>} />
    </Switch>
  );
}
