import React from 'react';
import PropTypes from 'prop-types';
import styles from './title-bar.module.scss';
import CheckboxAndTag from 'components/CheckboxAndTag';
import { selectStatusOrdersPage } from 'constants/selectStatus';
import { changeStatusOrdersPage } from 'constants/changeStatus';

const TitleBar = (props) => {
  const {
    isAllChecked,
    handleChangeAllChecked,
    handleSelectArrow,
    handleChangeStatus,
  } = props;
  return (
    <div className={styles['title-wrapper']}>
      <CheckboxAndTag
        isAllChecked={isAllChecked}
        handleChangeAllChecked={handleChangeAllChecked}
        handleSelectArrow={handleSelectArrow}
        handleChangeStatus={handleChangeStatus}
        arrowList={selectStatusOrdersPage}
        tagList={changeStatusOrdersPage}
      />
    </div>
  )
};

TitleBar.propTypes = {
  isAllChecked: PropTypes.bool,
  handleChangeAllChecked: PropTypes.func,
  handleSelectArrow: PropTypes.func,
  handleChangeStatus: PropTypes.func,
};

export default TitleBar;
