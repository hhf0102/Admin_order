import React, { PureComponent } from 'react';
import styles from './app.module.scss';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import NavBar from '../NavBar';
import HomePage from '../HomePage';
import OrdersPage from '../OrdersPage';
import ProductPage from '../ProductPage';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCaretRight,
  faCaretDown,
  faHandHoldingUsd,
  faCoins,
  faMoneyBill,
  faArrowUp,
  faArrowDown,
  faClock,
  faMale,
} from '@fortawesome/free-solid-svg-icons';

import {
  faFacebook,
  faGoogle,
  faStripeS,
  faWordpress,
} from '@fortawesome/free-brands-svg-icons';

library.add(
  faCaretRight,
  faCaretDown,
  faHandHoldingUsd,
  faCoins,
  faMoneyBill,
  faFacebook,
  faGoogle,
  faStripeS,
  faWordpress,
  faArrowUp,
  faArrowDown,
  faClock,
  faMale,
);

export default class App extends PureComponent {
  render() {
    return (
      <BrowserRouter>
        <div className={styles['container']}>
          <NavBar />
          <div className={styles['content']}>
            <Switch>
              <Route path="/home" component={HomePage} />
              <Route path="/orders" component={OrdersPage} />
              <Route path="/product" component={ProductPage} />
              <Redirect to="/home" />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
