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
    background-: #e6e8e9;
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
  border-radius: 2px;
  width: 100%;
  font-weight: normal;
  border:1px solid #e6e8e9
  border-right: 4px solid
    ${props => {
      props.isExpense ? 'red' : 'green'
    }};

`
const TransactionCell = () => {
  return (
    <Cell isExpense={props.playload?.type === 'expense'}>
      <span>{props.playload.desc}</span>
      <span>{props.playload.amount}</span>
    </Cell>
  )
}
const TransactionComponent = props => {
  return (
    <>
      <Container>
        Transaction
        <input placeholder='search' type='search' />
        {props.transactions?.length
          ? props.transactions.map(playload => (
              <TransactionCell key={playload.id} playload={playload} />
            ))
          : ''}
      </Container>
    </>
  )
}

export default TransactionComponent
