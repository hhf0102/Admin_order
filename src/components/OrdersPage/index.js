import React from 'react';
import styles from './orders-page.module.scss';
import FadeIn from 'components/FadeIn';
import TitleBar from 'containers/TitleBarOrders';
import Table from 'containers/TableOrders';

const OrdersPage = () => {
  return (
    <FadeIn>
      <div className={styles['container']}>
        <TitleBar />
        <div className={styles['table-wrapper']}>
          <Table />
        </div>
      </div>
    </FadeIn>
  )
};

export default OrdersPage;
