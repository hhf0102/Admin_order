import React from 'react';
import PropTypes from 'prop-types';
import styles from './tooltip.module.scss';

const Tooltip = ({ content }) => {
  return (
    <div className={styles['container']}>
      {content}
    </div>
  );
};

Tooltip.propTypes = {
  content: PropTypes.node,
}

export default Tooltip;
