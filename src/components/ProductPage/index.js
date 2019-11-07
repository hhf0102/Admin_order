import React from 'react'
import styles from './product-page.module.scss'
import FadeIn from 'components/FadeIn'
import TitleBar from 'components/ProductPage/TitleBar'
import Table from 'components/ProductPage/Table'
import AddNewProductModel from 'components/ProductPage/AddNewProductModel'
import Dialog from 'components/Dialog'

const ProductPage = () => {
  return (
    <FadeIn>
      <div className={styles['container']}>
        <TitleBar />
        <Table />
        <Dialog name='addNewProduct' component={AddNewProductModel} />
      </div>
    </FadeIn>
  )
}

export default ProductPage
