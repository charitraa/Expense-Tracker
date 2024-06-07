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

const TransactionCell = props => {
  return (
    <Cell $isExpense={props.payload?.type === 'expense'}>
      <span>{props.payload?.name}</span>
      <span>{props.payload?.amount}</span>
    </Cell>
  )
}
const TransactionComponent = props => {
  console.log(props.Transactions)
  return (
    <>
      <Container>
        Transaction
        <input placeholder='search' type='search' />
        {props.Transactions && props.Transactions.length > 0 ? (
          props.Transactions.map(payload => (
            <TransactionCell key={payload.id} payload={payload} />
          ))
        ) : (
          <p>No transactions available</p>
        )}
      </Container>
    </>
  )
}

export default TransactionComponent
