import React, { PureComponent } from 'react'
import styles from './app.module.scss'
import { HashRouter, Route, Switch } from 'react-router-dom'
import NavBar from 'components/NavBar'
import HomePage from 'components/HomePage'
import OrdersPage from 'components/OrdersPage'
import ProductPage from 'components/ProductPage'
import { library } from '@fortawesome/fontawesome-svg-core'
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
  faCloudUploadAlt
} from '@fortawesome/free-solid-svg-icons'

import { faFacebook, faGoogle, faStripeS, faWordpress } from '@fortawesome/free-brands-svg-icons'

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
)

export default class App extends PureComponent {
  render() {
    return (
      <HashRouter>
        <div className={styles['container']}>
          <NavBar />
          <div className={styles['content']}>
            <Switch>
              <Route path='/home' component={HomePage} />
              <Route path='/orders' component={OrdersPage} />
              <Route path='/product' component={ProductPage} />
            </Switch>
          </div>
          <div className={styles['footer']} />
        </div>
      </HashRouter>
    )
  }
}
