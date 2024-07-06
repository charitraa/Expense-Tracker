import styled from 'styled-components'
import HomeComponent from './index'
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 0 10px;
`

const Headers = styled.span`
  color: black;
  font-size: 25px;
  font-weight: bold;
`
function Header () {
  return (
    <>
      <Container>
        <Headers>Expense Tracker</Headers>
        <HomeComponent />
      </Container>
    </>
  )
}

export default Header
