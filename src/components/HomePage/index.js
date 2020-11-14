import React, { PureComponent } from 'react'
import styled from 'styled-components'
import TitleBar from './TitleBar'
import RevenueAndCostAndIncome from './RevenueAndCostAndIncome'
import Activity from './Activity'
import TransactionAndOrders from './TransactionAndOrders'
import FadeIn from 'components/FadeIn'

const Container = styled.div`
  max-width: 960px;
  margin: auto;
`

export default class HomePage extends PureComponent {
  render() {
    return (
      <FadeIn>
        <Container>
          <TitleBar />
          <RevenueAndCostAndIncome />
          <Activity />
          <TransactionAndOrders />
        </Container>
      </FadeIn>
    )
  }
}
