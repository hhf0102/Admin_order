import React from 'react';
import styles from './activity.module.scss';
import Card from 'components/Card';
import chartImage from 'assets/images/chart.jpg';

const setChartImage = () => <img src={chartImage} />;

const Activity = () => {
  return (
    <div className={styles['card-activity']}>
      <Card title="Activity" content={setChartImage()} />
    </div>
  );
};

export default Activity;
