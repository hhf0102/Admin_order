import React from 'react';
import styles from './home-page.module.scss';
import Card from 'components/Card';
import websites from 'fakeData/websites';
import orders from 'fakeData/orders';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const transactionContent = () => {
  return (
    <div className={styles['transaction-content-wrapper']}>
      {websites.map((website, idx) =>
        <div key={idx} className={styles['website-wrapper']}>
          <div className={styles['icon']}>{website.icon}</div>
          <div className={styles['name']}>{website.name}</div>
          <div className={styles['count']}>{website.count}</div>
          <div className={styles['rate']}>{website.rate}</div>
        </div>
      )}
    </div>
  );
};

const latestOrdersContent = () => {
  return (
    <div className={styles['latest-orders-content-wrapper']}>
      {orders.map((order, idx) =>
        <div key={idx} className={styles['order-wrapper']}>
          <img src={order.image} alt="not found" />
          <div className={styles['content']}>
            <div className={styles['name']}>{order.name}</div>
            <div className={styles['date']}>
              <FontAwesomeIcon icon="clock" />{order.date}
            </div>
            <div className={styles['buyer']}>
              <FontAwesomeIcon icon="male" />{order.buyer}
            </div>
          </div>
          <div className={styles['price']}>
            <span>Total</span>
            {order.price}
          </div>
        </div>
      )}
    </div>
  );
};

const TransactionAndOrders = () => {
  return (
    <div className={styles['transaction-and-orders']}>
      <div><Card title="Transaction Website" content={transactionContent()} /></div>
      <div><Card title="Latest Orders" content={latestOrdersContent()} /></div>
    </div>
  )
};

export default TransactionAndOrders;
