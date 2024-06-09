import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px 22px;
  font-size: 18px;
  width: 100%;
  gap: 10px;
  font-weight: bold;
  & input {
    padding: 10px 12px;
    border-radius: 12px;
    border: 1px solid #e6e8e9;
    background: #e6e8e9;
    outline: none;
    width: 100%;
  }
`

const Cell = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 15px;
  font-size: 14px;
  width: 90%;
  font-weight: normal;
  border: 1px solid #e6e8e9;
  border-right: 5px solid ${props => (props.$isExpense ? 'red' : 'green')};
  border-radius: 10px;
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
const ExpenseConatiner = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  margin: 20px;
`
const ExpenseBox = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #e6e8e9;
  padding: 15px 20px;
  border-radius: 4px;
  width: 135px;
  font-size: 16px;

  & span {
    color: red;
    font-weight: bold;
    font-size: 20px;
  }
`
const IncomeBox = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #e6e8e9;
  padding: 15px 20px;
  border-radius: 4px;
  width: 135px;
  font-size: 16px;

  & span {
    color: #26c026;
    font-weight: bold;
    font-size: 20px;
  }
`
const TraContainer = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
`
const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #e6e8e9;
  cursor: pointer;
  background-color: #ca0202;
  color: white;
  font-size: 14px;
  padding: 10px;
  border-radius: 10px;
`

export {
  Container,
  Cell,
  RadioButton,
  AddTransation,
  AddTransationContainer,
  BalanceBox,
  ExpenseBox,
  IncomeBox,
  ExpenseConatiner,
  TraContainer,
  BtnContainer
}
