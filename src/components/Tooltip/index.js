import React from 'react';
import PropTypes from 'prop-types';
import styles from './tooltip.module.scss';
import cx from 'classnames';

const Tooltip = ({ content, direction }) => {
  const getTooltipStyle = () => cx({
    [styles['container']]: true,
    [styles[direction]]: true,
  })
  return (
    <div className={getTooltipStyle()}>
      {content}
    </div>
  );
};

Tooltip.propTypes = {
  content: PropTypes.node,
  direction: PropTypes.oneOf(['top', 'right', 'bottom', 'left']).isRequired,
}

export default Tooltip;
