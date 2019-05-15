import React, { PureComponent } from 'react';
import styles from './title-bar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CustomDropdown from 'components/CustomDropdown';
import periodList from 'fakeData/periodList';
import { getTodayDate, getWeeklyDate, getMonthlyDate, getYearlyDate } from 'utils/customDate';

export default class TitleBar extends PureComponent {
  state = {
    showPeriodDropdown: false,
    dateRange: 'Weekly',
  }

  handleSelectPeriod = (period) => () => {
    this.setState({ dateRange: period.item, showPeriodDropdown: false });
  }

  renderTime = () => {
    const { showPeriodDropdown, dateRange } = this.state;
    return (
      <div className={styles['time-wrapper']}>
        {this.getTime()}
        <div className={styles['period-wrapper']} onClick={this.handleClickPeriod} ref={this.setPeriodRef}>
          {dateRange}
          <span className={styles['icon']}><FontAwesomeIcon icon="caret-down" /></span>
          <div className={styles['period-dropdown']}>
            {showPeriodDropdown &&
              <CustomDropdown
                list={periodList}
                inputRef={this.periodRef}
                dropdownClose={this.periodDropdownClose}
                handleSelect={this.handleSelectPeriod}
              />}
          </div>
        </div>
      </div>
    );
  }

  getTime = () => {
    const { dateRange } = this.state;
    return dateRange === 'Daily'
    ? <div>{getTodayDate()}</div>
    : dateRange === 'Weekly'
      ? <div>{getTodayDate()} <span className={styles['icon']}><FontAwesomeIcon icon="caret-right" /></span> {getWeeklyDate()}</div>
      : dateRange === 'Monthly'
        ? <div>{getTodayDate()} <span className={styles['icon']}><FontAwesomeIcon icon="caret-right" /></span> {getMonthlyDate()}</div>
        : dateRange === 'Yearly'
          ? <div>{getTodayDate()} <span className={styles['icon']}><FontAwesomeIcon icon="caret-right" /></span> {getYearlyDate()}</div>
          : null
  };

  periodDropdownClose = () => this.setState(() => ({ showPeriodDropdown: false }));

  handleClickPeriod = (e) => {
    if (this.periodRef === e.target) {
      this.setState({ showPeriodDropdown: !this.state.showPeriodDropdown });
    }
  }

  setPeriodRef = (ref) => this.periodRef = ref;

  render() {
    return (
      <div className={styles['title-wrapper']}>
        <div className={styles['title']}>OVERVIEW</div>
        {this.renderTime()}
      </div>
    );
  }
}
