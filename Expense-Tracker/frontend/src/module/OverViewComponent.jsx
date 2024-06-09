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
    if (props.amount) {
      setCurrent(props.amount.current_amount)
      setincome(props.amount.total_income)
      setexpense(props.amount.total_expense)
    }
  }, [props.amount])

  const [isAddTxnVisible, toggleAddTxn] = useState(false)
  return (
    <>
      <Container>
        <BalanceBox>
          Balance: Rs. {current}
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
            <span>Rs. {expense}</span>
          </ExpenseBox>
          <IncomeBox>
            Income<span>Rs. {income}</span>
          </IncomeBox>
        </ExpenseConatiner>
      </Container>
    </>
  )
}

export default OverViewComponent
