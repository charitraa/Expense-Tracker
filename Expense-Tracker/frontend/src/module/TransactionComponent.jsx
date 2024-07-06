import axios from 'axios'
import { Container, Cell } from './Style'
import { TraContainer, BtnContainer } from './Style'

const TransactionCell = props => {
  const DeleteTransaction = async () => {
    try {
      const response = await axios.delete(
        `http://127.0.0.1:8000/transation-delete/${props.id}/`
      )
      props.fetchtransaction()
      props.fetchamount()
    } catch (error) {
      console.error('Error fetching amount:', error)
    }
  }

  return (
    <TraContainer>
      <Cell $isExpense={props.payload?.type === 'expense'}>
        <span>{props.payload?.name}</span>
        <span>{props.payload?.amount}</span>
      </Cell>
      <BtnContainer onClick={DeleteTransaction}>Delete</BtnContainer>
    </TraContainer>
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
            <TransactionCell
              id={payload.id}
              key={payload.id}
              payload={payload}
              fetchtransaction={props.fetchTransaction}
              fetchamount={props.fetchamount}
            />
          ))
        ) : (
          <p>No transactions available</p>
        )}
      </Container>
    </>
  )
}

export default TransactionComponent
