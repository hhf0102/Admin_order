import React, { PureComponent } from 'react'
import styled from 'styled-components'
import Card from 'components/Card'
import websites from 'fakeData/websites'
import orders from 'fakeData/orders'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Tooltip from 'components/Tooltip'
import cx from 'classnames'
import { thousandComma } from 'utils/formattedNumber'

const TransactionAndOrdersWrapper = styled.div`
  display: flex;

  > div {
    height: 456px;
    flex: 1 1 460px;

    &:nth-child(1) {
      margin-right: 20px;
    }
  }
`

const TransactionContentWrapper = styled.div`
  margin-top: 30px;
`

const WebsiteWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 23px 0;
  border-bottom: 1px solid #ebebeb;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
    border: 0;
  }

  > .rate-wrapper {
    flex: 1 1 20%;
    position: relative;
    cursor: pointer;
    display: flex;

    &.down {
      color: #d0021b;
    }

    &.up {
      color: #7ed321;
    }

    > div:first-child {
      display: flex;
    }

    .tooltip-wrapper {
      position: absolute;
      bottom: 130%;
      transform: translateX(-50%);
      left: 45%;

      &.hidden {
        display: none;
      }

      .views-style {
        white-space: nowrap;
        margin-bottom: 8px;

        > :not(.views-count) {
          color: white;
        }

        .views-count {
          font-family: 'HelveticaNeue-Bold';
          font-size: 20px;
          color: inherit;
        }
      }

      .last-week-style {
        font-family: 'HelveticaNeue-Italic';
        font-size: 14px;
        color: #9b9b9b;
        text-align: center;
        white-space: nowrap;
      }
    }

    svg {
      min-width: 18px;
      height: 18px;
      margin-right: 3px;
    }
  }
`

const IconWrapper = styled.div`
  flex: 1 1 20%;
  margin-right: 20px;

  svg {
    min-width: 45px;
    height: 45px;
  }
`

const NameWrapper = styled.div`
  font-family: 'HelveticaNeue-Medium';
  font-size: 16px;
  color: #9b9b9b;
  flex: 1 1 40%;
  margin-right: 62px;
`

const ViewsWrapper = styled.div`
  font-family: 'HelveticaNeue-Medium';
  font-size: 20px;
  color: black;
  flex: 1 1 20%;
  margin-right: 20px;
  text-align: right;
`

const LatestOrdersContentWrapper = styled.div`
  margin-top: 30px;
`

const OrderWrapper = styled.div`
  display: flex;
  padding: 8px 0;
  border-bottom: 1px solid #ebebeb;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
    border-bottom: 0;
  }

  > img {
    width: 100px;
    height: 100px;
  }
`

const Content = styled.div`
  margin-left: 21px;
  align-self: center;
`

const Name = styled.div`
  font-family: 'HelveticaNeue-Bold';
  font-size: 20px;
  color: black;
  margin-bottom: 8px;
`

const Date = styled.div`
  margin-bottom: 8px;
  font-family: 'HelveticaNeue';
  font-size: 16px;
  color: #9b9b9b;
  display: flex;
  align-items: center;

  svg {
    min-width: 12px;
    height: 12px;
    margin-right: 7px;
    color: #757575;
  }
`

const Buyer = styled.div`
  font-family: 'HelveticaNeue';
  font-size: 16px;
  color: #9b9b9b;
  display: flex;
  align-items: center;

  svg {
    min-width: 12px;
    height: 12px;
    margin-right: 7px;
    color: #757575;
  }
`

const Price = styled.div`
  font-family: 'HelveticaNeue-Bold';
  font-size: 20px;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  margin-left: auto;

  > span {
    font-size: 14px;
  }
`

export default class TransactionAndOrders extends PureComponent {
  state = {
    showRateTooltip: -1
  }

  handleRateMouseEnter = idx => () => {
    this.setState({ showRateTooltip: idx })
  }

  handleRateMouseLeave = () => {
    this.setState({ showRateTooltip: -1 })
  }

  getTooltipStyles = idx =>
    cx({
      ['tooltip-wrapper']: true,
      ['hidden']: this.state.showRateTooltip !== idx
    })

  getRateArrowIcon = idx => {
    const { views, lastWeekViews } = websites[idx]
    return views - lastWeekViews < 0 ? 'arrow-down' : 'arrow-up'
  }

  getRateStyles = idx => {
    const { views, lastWeekViews } = websites[idx]
    const UpOrDownColor = views - lastWeekViews < 0 ? 'down' : 'up'
    return cx({
      ['rate-wrapper']: true,
      [UpOrDownColor]: true
    })
  }

  getRateContent = idx => {
    const { views, lastWeekViews } = websites[idx]
    const viewsCount = views - lastWeekViews
    const increaseOrDecrease = viewsCount < 0 ? 'DECREASE' : 'INCREASE'
    return (
      <div>
        <div className='views-style'>
          <span>{increaseOrDecrease}</span> <span className='views-count'>{Math.abs(viewsCount)}</span>{' '}
          <span>VIEWS</span>
        </div>
        <div className='last-week-style'>last week: {thousandComma(lastWeekViews)}</div>
      </div>
    )
  }

  transactionContent = () => {
    const { showRateTooltip } = this.state
    return (
      <TransactionContentWrapper>
        {websites.map((website, idx) => (
          <WebsiteWrapper key={idx}>
            <IconWrapper>{website.icon}</IconWrapper>
            <NameWrapper>{website.name}</NameWrapper>
            <ViewsWrapper>{thousandComma(website.views)}</ViewsWrapper>
            <div
              className={this.getRateStyles(idx)}
              onMouseEnter={this.handleRateMouseEnter(idx)}
              onMouseLeave={this.handleRateMouseLeave}
            >
              <FontAwesomeIcon icon={this.getRateArrowIcon(idx)} />
              {website.rate}
              {showRateTooltip === idx && (
                <div className={this.getTooltipStyles(idx)}>
                  <Tooltip content={this.getRateContent(idx)} direction='top' />
                </div>
              )}
            </div>
          </WebsiteWrapper>
        ))}
      </TransactionContentWrapper>
    )
  }

  latestOrdersContent = () => {
    return (
      <LatestOrdersContentWrapper>
        {orders.map((order, idx) => (
          <OrderWrapper key={idx}>
            <img src={order.image} alt='not found' />
            <Content>
              <Name>{order.name}</Name>
              <Date>
                <FontAwesomeIcon icon='clock' />
                {order.date}
              </Date>
              <Buyer>
                <FontAwesomeIcon icon='male' />
                {order.buyer}
              </Buyer>
            </Content>
            <Price>
              <span>Total</span>
              {order.price}
            </Price>
          </OrderWrapper>
        ))}
      </LatestOrdersContentWrapper>
    )
  }

  render() {
    return (
      <TransactionAndOrdersWrapper>
        <div>
          <Card title='Transaction Website' content={this.transactionContent()} />
        </div>
        <div>
          <Card title='Latest Orders' content={this.latestOrdersContent()} />
        </div>
      </TransactionAndOrdersWrapper>
    )
  }
}
