import React, { PureComponent } from 'react';
import styles from './transaction-and-orders.module.scss';
import Card from 'components/Card';
import websites from 'fakeData/websites';
import orders from 'fakeData/orders';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tooltip from 'components/Tooltip';
import cx from 'classnames';
import { thousandComma } from 'utils/formattedNumber';

export default class TransactionAndOrders extends PureComponent {
  state = {
    showRateTooltip: -1,
  };

  handleRateMouseEnter = (idx) => () => {
    this.setState({ showRateTooltip: idx });
  };

  handleRateMouseLeave = () => {
    this.setState({ showRateTooltip: -1 });
  };

  getTooltipStyles = (idx) => cx({
    [styles['tooltip-wrapper']]: true,
    [styles['hidden']]: this.state.showRateTooltip !== idx,
  });

  getRateArrowIcon = (idx) => {
    const { views, lastWeekViews } = websites[idx];
    return views - lastWeekViews < 0 ? 'arrow-down' : 'arrow-up';
  };

  getRateStyles = (idx) => {
    const { views, lastWeekViews } = websites[idx];
    const UpOrDownColor = views - lastWeekViews < 0 ? 'down' : 'up';
    return cx({
      [styles['rate-wrapper']]: true,
      [styles[UpOrDownColor]]: true,
    });
  };

  getRateContent = (idx) => {
    const { views, lastWeekViews } = websites[idx];
    const viewsCount = views - lastWeekViews;
    const increaseOrDecrease = viewsCount < 0 ? 'DECREASE' : 'INCREASE';
    return (
      <div>
        <div className={styles['views-style']}>
          <span>{increaseOrDecrease}</span> <span className={styles['views-count']}>{Math.abs(viewsCount)}</span> <span>VIEWS</span>
        </div>
        <div className={styles['last-week-style']}>last week: {thousandComma(lastWeekViews)}</div>
      </div>
    )
  }


  transactionContent = () => {
    const { showRateTooltip } = this.state;
    return (
      <div className={styles['transaction-content-wrapper']}>
        {websites.map((website, idx) => (
          <div key={idx} className={styles['website-wrapper']}>
            <div className={styles['icon-wrapper']}>{website.icon}</div>
            <div className={styles['name-wrapper']}>{website.name}</div>
            <div className={styles['views-wrapper']}>{thousandComma(website.views)}</div>
            <div
              className={this.getRateStyles(idx)}
              onMouseEnter={this.handleRateMouseEnter(idx)}
              onMouseLeave={this.handleRateMouseLeave}
            >
              <FontAwesomeIcon icon={this.getRateArrowIcon(idx)} />{website.rate}
              {showRateTooltip === idx &&
                <div className={this.getTooltipStyles(idx)}>
                  <Tooltip content={this.getRateContent(idx)} />
                </div>
              }
            </div>
          </div>
        ))}
      </div>
    );
  };

  latestOrdersContent = () => {
    return (
      <div className={styles['latest-orders-content-wrapper']}>
        {orders.map((order, idx) => (
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
        ))}
      </div>
    );
  };

  render () {
    return (
      <div className={styles['transaction-and-orders']}>
        <div><Card title="Transaction Website" content={this.transactionContent()} /></div>
        <div><Card title="Latest Orders" content={this.latestOrdersContent()} /></div>
      </div>
    );
  }
}
