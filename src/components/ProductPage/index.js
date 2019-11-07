import React from 'react'
import styles from './product-page.module.scss'
import FadeIn from 'components/FadeIn'
import TitleBar from 'components/ProductPage/TitleBar'
import Table from 'containers/TableProducts'
import AddNewProductModel from 'containers/AddNewProductModel'
import Dialog from 'containers/Dialog'

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
