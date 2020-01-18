import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CustomDropdown from 'components/CustomDropdown'
import periodList from 'constants/periodList'
import { getDaily, getWeekly, getMonthly, getYearly } from 'utils/customDate'

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 20px;
`

const Title = styled.div`
  font-family: 'HelveticaNeue-Bold';
  font-size: 24px;
  color: black;
`

const TimeWrapper = styled.div`
  display: flex;
  font-family: 'HelveticaNeue-Bold';
  font-size: 16px;
  color: #9b9b9b;
`

const Icon = styled.span`
  color: black;
  margin: 0 3px;
`

const PeriodWrapper = styled.div`
  position: relative;
  cursor: pointer;
  margin-left: 15px;
  user-select: none;
`

const PeriodDropdown = styled.div`
  position: absolute;
  right: 0;
  top: 25px;
`

export default class TitleBar extends PureComponent {
  state = {
    showPeriodDropdown: false,
    dateRange: 'Weekly'
  }

  handleSelectPeriod = period => () => {
    this.setState({ dateRange: period.item, showPeriodDropdown: false })
  }

  handleClickPeriod = e => {
    if (this.periodRef === e.target) {
      this.setState({ showPeriodDropdown: !this.state.showPeriodDropdown })
    }
  }

  setPeriodRef = ref => (this.periodRef = ref)

  showDateRange = () => {
    const { dateRange } = this.state
    return dateRange === 'Daily' ? (
      <div>{getDaily()}</div>
    ) : dateRange === 'Weekly' ? (
      <div>
        {getDaily()}{' '}
        <Icon>
          <FontAwesomeIcon icon='caret-right' />
        </Icon>
        {getWeekly()}
      </div>
    ) : dateRange === 'Monthly' ? (
      <div>
        {getDaily()}{' '}
        <Icon>
          <FontAwesomeIcon icon='caret-right' />
        </Icon>{' '}
        {getMonthly()}
      </div>
    ) : dateRange === 'Yearly' ? (
      <div>
        {getDaily()}{' '}
        <Icon>
          <FontAwesomeIcon icon='caret-right' />
        </Icon>
        {getYearly()}
      </div>
    ) : null
  }

  periodDropdownClose = () => this.setState(() => ({ showPeriodDropdown: false }))

  render() {
    const { showPeriodDropdown, dateRange } = this.state
    return (
      <TitleWrapper>
        <Title>OVERVIEW</Title>
        <TimeWrapper>
          {this.showDateRange()}
          <PeriodWrapper ref={this.setPeriodRef} onClick={this.handleClickPeriod}>
            {dateRange}
            <Icon>
              <FontAwesomeIcon icon='caret-down' />
            </Icon>
            <PeriodDropdown>
              {showPeriodDropdown && (
                <CustomDropdown
                  list={periodList}
                  inputRef={this.periodRef}
                  dropdownClose={this.periodDropdownClose}
                  handleSelect={this.handleSelectPeriod}
                />
              )}
            </PeriodDropdown>
          </PeriodWrapper>
        </TimeWrapper>
      </TitleWrapper>
    )
  }
}
