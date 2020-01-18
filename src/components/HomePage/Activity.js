import React from 'react'
import styled from 'styled-components'
import Card from 'components/Card'
import chartImage from 'assets/images/chart.jpg'

const CardActivity = styled.div`
  height: 406px;
  margin-bottom: 20px;

  img {
    width: 100%;
    display: inline-block;
    margin-top: 15px;
  }
`

const Activity = () => {
  return (
    <CardActivity>
      <Card title='Activity' content={<img src={chartImage} />} />
    </CardActivity>
  )
}

export default Activity
