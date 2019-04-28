import React, { PureComponent } from 'react';
import styles from './home-page.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CustomDropdown from 'components/CustomDropdown';
import periodList from 'fakeData/periodList';

export default class TitleBar extends PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      showPeriodDropdown: false,
    }
  }

  renderTime = () => {
    const { showPeriodDropdown } = this.state;
    return (
      <div className={styles['time-wrapper']}>
        <div>2018/6/6 <span className={styles['icon']}><FontAwesomeIcon icon="caret-right" /></span> 2018/6/13</div>
        <div className={styles['period-wrapper']} onClick={this.handleClickPeriod} ref={this.setPeriodRef}>
          Weekly
          <span className={styles['icon']}><FontAwesomeIcon icon="caret-down" /></span>
          <div className={styles['period-dropdown']}>
            {showPeriodDropdown &&
              <CustomDropdown
                list={periodList}
                inputRef={this.periodRef}
                dropdownClose={this.periodDropdownClose}
              />}
          </div>
        </div>
      </div>
    );
  }

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
