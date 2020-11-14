import React from 'react'
import styled from 'styled-components'
import Card from 'components/Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const RevenueCostIncomeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 18px;

  > div {
    box-sizing: border-box;
    flex: 1 0 30%;
    height: 150px;
    margin-right: 20px;

    &:last-child {
      margin: 0;
    }

    .card-income-content {
      color: #4a90e2;
    }
  }
`

const CardTitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
`

const IconWrapper = styled.div`
  margin-right: 8px;
`

const CardTitle = styled.div`
  font-family: 'HelveticaNeue-Medium';
  font-size: 16px;
  color: black;
`

const CardContent = styled.div`
  font-family: 'HelveticaNeue-Bold';
  font-size: 36px;
  color: black;
  text-align: center;
`

const CardRevenueContent = styled(CardContent)`
  color: #7ed321;
`

const CardCostContent = styled(CardContent)`
  color: #d0021b;
`

const CardIncomeContent = styled(CardContent)`
  color: #4a90e2;
`

const totalRevenueContent = () => {
  return (
    <div>
      <CardTitleWrapper>
        <IconWrapper>
          <FontAwesomeIcon icon='hand-holding-usd' />
        </IconWrapper>
        <CardTitle>TOTAL REVENUE</CardTitle>
      </CardTitleWrapper>
      <CardRevenueContent>54,540</CardRevenueContent>
    </div>
  )
}

const totalCostContent = () => {
  return (
    <div>
      <CardTitleWrapper>
        <IconWrapper>
          <FontAwesomeIcon icon='coins' />
        </IconWrapper>
        <CardTitle>TOTAL COST</CardTitle>
      </CardTitleWrapper>
      <CardCostContent>12,660</CardCostContent>
    </div>
  )
}

const netIncomeContent = () => {
  return (
    <div>
      <CardTitleWrapper>
        <IconWrapper>
          <FontAwesomeIcon icon='money-bill' />
        </IconWrapper>
        <CardTitle>NET INCOME</CardTitle>
      </CardTitleWrapper>
      <CardIncomeContent>41,880</CardIncomeContent>
    </div>
  )
}

const RevenueAndCostAndIncome = () => {
  return (
    <RevenueCostIncomeWrapper>
      <Card content={totalRevenueContent()} />
      <Card content={totalCostContent()} />
      <Card content={netIncomeContent()} />
    </RevenueCostIncomeWrapper>
  )
}

export default RevenueAndCostAndIncome
