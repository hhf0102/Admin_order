import React from 'react'
import styles from './orders-page.module.scss'
import FadeIn from 'components/FadeIn'
import TitleBar from 'components/OrdersPage/TitleBar'
import Table from 'components/OrdersPage/Table'

const OrdersPage = () => {
  return (
    <FadeIn>
      <div className={styles['container']}>
        <TitleBar />
        <div className={styles['table-wrapper']}>
          <Table />
        </div>
      </div>
    </FadeIn>
  )
}

export default OrdersPage
