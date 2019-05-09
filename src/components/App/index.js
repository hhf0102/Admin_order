import React, { PureComponent } from 'react';
import styles from './app.module.scss';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import NavBar from 'components/NavBar';
import HomePage from 'components/HomePage';
import OrdersPage from 'containers/OrdersPage';
import ProductPage from 'components/ProductPage';
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
  faTags,
  faPlus,
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
  faTags,
  faPlus,
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
          <div className={styles['footer']} />
        </div>
      </BrowserRouter>
    );
  }
}
