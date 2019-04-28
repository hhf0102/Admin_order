import React, { PureComponent } from 'react';
import styles from './home-page.module.scss';
import TitleBar from './TitleBar';
import RevenueAndCostAndIncome from './RevenueAndCostAndIncome';
import Activity from './Activity';
import TransactionAndOrders from './TransactionAndOrders';
import FadeIn from 'components/FadeIn';

export default class HomePage extends PureComponent {
  render() {
    return (
      <FadeIn>
        <div className={styles['container']}>
          <TitleBar />
          <RevenueAndCostAndIncome />
          <Activity />
          <TransactionAndOrders />
        </div>
      </FadeIn>
    );
  }
}
