import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.scss';
import { Provider } from 'react-redux';
import { store } from 'store';
import styled from 'styled-components';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import NavBar from 'components/NavBar';
import HomePage from 'components/HomePage';
import OrdersPage from 'components/OrdersPage';
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
  faTimes,
  faCloudUploadAlt,
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
  faTimes,
  faCloudUploadAlt
);

const Container = styled.div`
  height: 100%;
`;

const Content = styled.div`
  padding: 30px 42px 150px;
`;

const Footer = styled.div`
  width: 100%;
  height: 200px;
  background-color: black;
`;

const App = () => {
  return (
    <HashRouter>
      <Container>
        <NavBar />
        <Content>
          <Switch>
            <Route path='/home' component={HomePage} />
            <Route path='/orders' component={OrdersPage} />
            <Route path='/product' component={ProductPage} />
            <Redirect to='/home' />
          </Switch>
        </Content>
        <Footer />
      </Container>
    </HashRouter>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
