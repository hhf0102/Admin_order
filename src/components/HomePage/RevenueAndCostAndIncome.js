import React from 'react';
import styles from './revenue-and-cost-and-income.module.scss';
import Card from 'components/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const totalRevenueContent = () => {
  return (
    <div>
      <div className={styles['card-title-wrapper']}>
        <div className={styles['icon-wrapper']}><FontAwesomeIcon icon="hand-holding-usd" /></div>
        <div className={styles['card-title']}>TOTAL REVENUE</div>
      </div>
      <div className={styles['card-revenue-content']}>54,540</div>
    </div>
  );
};

const totalCostContent = () => {
  return (
    <div>
      <div className={styles['card-title-wrapper']}>
        <div className={styles['icon-wrapper']}><FontAwesomeIcon icon="coins" /></div>
        <div className={styles['card-title']}>TOTAL COST</div>
      </div>
      <div className={styles['card-cost-content']}>12,660</div>
    </div>
  );
};

const netIncomeContent = () => {
  return (
    <div>
      <div className={styles['card-title-wrapper']}>
        <div className={styles['icon-wrapper']}><FontAwesomeIcon icon="money-bill" /></div>
        <div className={styles['card-title']}>NET INCOME</div>
      </div>
      <div className={styles['card-income-content']}>41,880</div>
    </div>
  );
};

const RevenueAndCostAndIncome = () => {
  return (
    <div className={styles['revenue-cost-income-wrapper']}>
      <Card content={totalRevenueContent()} />
      <Card content={totalCostContent()} />
      <Card content={netIncomeContent()} />
    </div>
  );
};

export default RevenueAndCostAndIncome;
