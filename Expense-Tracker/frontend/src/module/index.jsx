import styled from 'styled-components'
import OverViewComponent from './OverViewComponent'
import TransactionComponent from './TransactionComponent'
import { useState, useEffect } from 'react'
import axios from 'axios'
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
    // const transactionArray = [...transactions]
    // transactionArray.push(payload)
    // updateTransaction(transactionArray)
  }

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get(
          'http://127.0.0.1:8000/transation-list/'
        )
        if (response.status !== 200) {
          console.log('slight server error')
        }
        const data = response.data
        updateTransaction(data)
        console.log(data)
      } catch (error) {
        console.error('Error fetching transactions:', error)
      }
    }

    fetchTransactions()
  }, [])

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
