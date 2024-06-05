import styled from 'styled-components'
import OverViewComponent from './OverViewComponent'
import TransactionComponent from './TransactionComponent'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 0 10px;
  width: 360px;
`

const HomeComponent = () => {
  return (
    <>
      <Container>
        <OverViewComponent />
        <TransactionComponent />
      </Container>
    </>
  )
}

export default HomeComponent
