import React from 'react'
import styled from 'styled-components'
import FadeIn from 'components/FadeIn'
import TitleBar from 'components/ProductPage/TitleBar'
import Table from 'components/ProductPage/Table'
import AddNewProductModel from 'components/ProductPage/AddNewProductModel'
import Dialog from 'components/Dialog'

const Container = styled.div`
  max-width: 960px;
  margin: auto;
`

const ProductPage = () => {
  return (
    <FadeIn>
      <Container>
        <TitleBar />
        <Table />
        <Dialog name='addNewProduct' component={AddNewProductModel} />
      </Container>
    </FadeIn>
  )
}

export default ProductPage
