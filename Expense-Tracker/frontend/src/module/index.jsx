import styled from 'styled-components'
import OverViewComponent from './OverViewComponent'
import TransactionComponent from './TransactionComponent'
import { useState } from 'react'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 0 10px;
  width: 360px;
`

const HomeComponent = () => {
  const [transactions, updateTransaction] = useState([])
  const addTransation = payload => {
    const transactionArray = [...transactions]
    transactionArray.push(payload)
    updateTransaction(transactionArray)
  }
  return (
    <>
      <Container>
        <OverViewComponent addTransation={addTransation} />
        <TransactionComponent Transactions={transactions} />
      </Container>
    </>
  )
}

export default HomeComponent
