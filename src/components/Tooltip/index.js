import React from 'react';
import styles from './tooltip.module.scss';

const Tooltip = ({ content }) => {
  return (
    <div className={styles['container']}>
      {content}
    </div>
  );
};

export default Tooltip;
