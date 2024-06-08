import { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'

import {
  AddTransationContainer,
  AddTransation,
  BalanceBox,
  RadioButton,
  ExpenseBox,
  IncomeBox,
  ExpenseConatiner
} from './Style'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  width: 100%;
`
const AddTransitionView = props => {
  const [amount, setAmount] = useState()
  const [desc, setDesc] = useState()
  const [type, setType] = useState()
  const addTransation = () => {
    console.log(amount, desc, type)
    props.toggle()
    props.addTransation({ amount: Number(amount), desc, type })
  }
  return (
    <AddTransationContainer>
      <input
        placeholder='Amount'
        name='amount'
        type='number'
        value={amount}
        onChange={e => setAmount(e.target.value)}
      />
      <input
        placeholder='Description'
        name='desc'
        value={desc}
        onChange={e => setDesc(e.target.value)}
      />
      <RadioButton>
        <input
          type='radio'
          name='expense
'
          value='expense'
          id='expense'
          checked={type === 'expense'}
          onChange={e => setType(e.target.value)}
        />
        <label htmlFor='expense'>Expense</label>
        <input
          type='radio'
          name='income'
          value='income'
          id='income'
          checked={type === 'income'}
          onChange={e => setType(e.target.value)}
        />
        <label htmlFor='income'>Income</label>
      </RadioButton>
      <AddTransation onClick={addTransation}>Add Transation</AddTransation>
    </AddTransationContainer>
  )
}

const OverViewComponent = props => {
  const [current, setCurrent] = useState(null)
  const [income, setincome] = useState(null)
  const [expense, setexpense] = useState(null)

  useEffect(() => {
    const fetchcurrent = async () => {
      try {
        const response = await axios.get(
          'http://127.0.0.1:8000/current-amount/'
        )
        if (response.status !== 200) {
          console.log('slight server error')
        }
        const data = response.data
        setCurrent(data)
      } catch (error) {
        console.error('Error fetching transactions:', error)
      }
    }
    fetchcurrent()
  }, [])
  useEffect(() => {
    const fetchincome = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/total-income/')
        if (response.status !== 200) {
          console.log('slight server error')
        }
        const data = response.data
        setincome(data)
      } catch (error) {
        console.error('Error fetching transactions:', error)
      }
    }
    fetchincome()
  }, [])

  useEffect(() => {
    const fetchexpense = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/total-expense/')
        if (response.status !== 200) {
          console.log('slight server error')
        }
        const data = response.data
        setexpense(data)
      } catch (error) {
        console.error('Error fetching transactions:', error)
      }
    }
    fetchexpense()
  }, [])

  const [isAddTxnVisible, toggleAddTxn] = useState(false)
  return (
    <>
      <Container>
        <BalanceBox>
          Balance: Rs. {current ? current.current_amount : 'Loading...'}
          <AddTransation onClick={() => toggleAddTxn(!isAddTxnVisible)}>
            {isAddTxnVisible ? 'Cancel' : 'Add'}
          </AddTransation>
        </BalanceBox>
        {/* condition for UI */}
        {isAddTxnVisible && (
          <AddTransitionView
            toggle={toggleAddTxn}
            addTransation={props.addTransation}
          />
        )}
        <ExpenseConatiner>
          <ExpenseBox>
            Expense
            <span>Rs. {expense ? expense.total_expense : 'Loading...'}</span>
          </ExpenseBox>
          <IncomeBox>
            Income<span>Rs. {income ? income.total_income : 'Loading...'}</span>
          </IncomeBox>
        </ExpenseConatiner>
      </Container>
    </>
  )
}

export default OverViewComponent
