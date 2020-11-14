import React from 'react'
import styled from 'styled-components'
import FadeIn from 'components/FadeIn'
import TitleBar from 'components/OrdersPage/TitleBar'
import Table from 'components/OrdersPage/Table'

const Container = styled.div`
  max-width: 960px;
  margin: auto;
`

const TableWrapper = styled.div`
  width: 100%;
`

const OrdersPage = () => {
  return (
    <FadeIn>
      <Container>
        <TitleBar />
        <TableWrapper>
          <Table />
        </TableWrapper>
      </Container>
    </FadeIn>
  )
}

export default OrdersPage
