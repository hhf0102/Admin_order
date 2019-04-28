import React from 'react';
import styles from './home-page.module.scss';
import Card from 'components/Card';

const Activity = () => {
  return (
    <div className={styles['card-activity']}>
      <Card title="Activity" />
    </div>
  );
};

export default Activity;
