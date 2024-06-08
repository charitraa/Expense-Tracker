import { Container, Cell } from './Style'

const TransactionCell = props => {
  return (
    <Cell $isExpense={props.payload?.type === 'expense'}>
      <span>{props.payload?.name}</span>
      <span>{props.payload?.amount}</span>
    </Cell>
  )
}
const TransactionComponent = props => {
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
