import React from 'react';
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

export default FadeIn;
