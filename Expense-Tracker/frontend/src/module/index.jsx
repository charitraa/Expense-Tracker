import styled from 'styled-components'
import OverViewComponent from './OverViewComponent'
import TransactionComponent from './TransactionComponent'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Token from './Token'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 0 10px;
  width: 360px;
`

const HomeComponent = () => {
  const [transactions, updateTransaction] = useState([])
  const [amount, setAmount] = useState({
    total_income: 0,
    total_expense: 0,
    current_amount: 0
  })

  const csrftoken = Token('csrftoken')

  const fetchTransactions = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/transation-list/')
      if (response.status !== 200) {
        console.log('Slight server error')
      }
      const data = await response.data
      updateTransaction(data)
    } catch (error) {
      console.error('Error fetching transactions:', error)
    }
  }

  const fetchAmount = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/amount/')
      if (response.status !== 200) {
        console.log('Slight server error')
      }
      const data = response.data
      setAmount(data)
    } catch (error) {
      console.error('Error fetching amount:', error)
    }
  }

  useEffect(() => {
    fetchTransactions()
    fetchAmount()
  }, [])

  const postTransaction = async props => {
    const url = 'http://127.0.0.1:8000/transation-create/'
    const amount = props.amount
    const description = props.desc
    const type = props.type
    try {
      const reqBody = {
        name: description,
        amount: amount,
        type: type
      }

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': csrftoken
        },
        body: JSON.stringify(reqBody)
      })
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      // Fetch updated transactions and amounts after posting the transaction
      await fetchTransactions()
      await fetchAmount()
    } catch (error) {
      console.error('Error posting transaction:', error)
    }
  }

  return (
    <>
      <Container>
        <OverViewComponent addTransation={postTransaction} amount={amount} />
        <TransactionComponent Transactions={transactions} />
      </Container>
    </>
  )
}

export default HomeComponent
