import { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  width: 100%;
`
const BalanceBox = styled.div`
  display: flex;
  width: 100%;
  font_weight: bold;
  font-size: 18px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const AddTransation = styled.button`
  background: black;
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  font-size: 12px;
`

const AddTransationContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #e6e8e9;
  gap: 20px;
  text-align: center;
  padding: 15px 20px;
  width: 100%;
  margin: 10px 20px;
  & input {
    outline: none;
    padding: 10px 20px;
    border-radius: 4px;
    border: 1px solid #e6e8e9;
  }
`
const RadioButton = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
`

const AddTransitionView = props => {
  const [amount, setAmount] = useState()
  const [desc, setDesc] = useState()
  const [type, setType] = useState()
  const addTransation = () => {
    console.log(amount, desc, type)
    props.toggle()
  }
  return (
    <AddTransationContainer>
      <input
        placeholder='Amount'
        name='amount'
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
          name='type'
          value='expense'
          id='expense'
          checked={type === 'expense'}
          onChange={e => setType(e.target.value)}
        />
        <label htmlFor='expense'>Expense</label>
        <input
          type='radio'
          name='type'
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

const OverViewComponent = () => {
  const [isAddTxnVisible, toggleAddTxn] = useState(false)
  return (
    <>
      <Container>
        <BalanceBox>
          Balance: $1000
          <AddTransation onClick={() => toggleAddTxn(!isAddTxnVisible)}>
            {isAddTxnVisible ? 'Cancel' : 'Add'}
          </AddTransation>
        </BalanceBox>
        {/* condition for UI */}
        {isAddTxnVisible && <AddTransitionView toggle={toggleAddTxn} />}
      </Container>
    </>
  )
}

export default OverViewComponent
