import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './card.module.scss';
import mapClassNameToArray from '../../utils/mapClassName';
import cx from 'classnames';

export default class Card extends PureComponent {
  render() {
    const {
      containerClassName,
      title,
      content,
    } = this.props;

    const containerStyle = cx(
      styles['container'],
      ...mapClassNameToArray(containerClassName, styles),
    )

    return (
      <div className={containerStyle}>
        <div className={styles['title']}>{title}</div>
        {content}
      </div>
    );
  }
}

Card.propTypes = {
  title: PropTypes.string,
  content: PropTypes.node,
  containerClassName: PropTypes.string,
}

Card.defaultProps = {
  title: '',
  content: null,
  containerClassName: '',
}
