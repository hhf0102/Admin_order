import React from 'react';
import PropTypes from 'prop-types';
import styles from 'stylesheets/animations.module.scss';

const FadeIn = ({ tag: Tag, className, children }) => {
  return (
    <Tag className={styles[className]}>
      {children}
    </Tag>
  );
}

FadeIn.defaultProps = {
  tag: 'div',
  className: 'fade-in',
}

FadeIn.propTypes = {
  tag: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
}

export default FadeIn;
