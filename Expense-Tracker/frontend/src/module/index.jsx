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
  const csrftoken = Token('csrftoken')

  const list_transactions = () => {
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
        } catch (error) {
          console.error('Error fetching transactions:', error)
        }
      }
      fetchTransactions()
    }, [])
  }
  list_transactions()

  const postTransaction = async props => {
    const url = 'http://127.0.0.1:8000/transation-create/'
    const amount = props.amount
    const description = props.desc
    const type = props.type
    console.log(amount, description, type)
    try {
      const response = await axios.post(url, {
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': csrftoken
        },
        body: JSON.stringify({
          name: description,
          amount: amount,
          type: type
        })
      })
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      list_transactions()
    } catch (error) {
      console.error('Error posting transaction:', error)
    }
  }
  return (
    <>
      <Container>
        <OverViewComponent addTransation={postTransaction} />
        <TransactionComponent Transactions={transactions} />
      </Container>
    </>
  )
}

export default HomeComponent
