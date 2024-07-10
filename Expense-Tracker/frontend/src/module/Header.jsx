import styled from 'styled-components'
import HomeComponent from './index'
import { logout } from './auth'
import { useNavigate } from 'react-router-dom';


import { AddTransation } from './Style'
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
const Profiles = styled.div`
 display: flex;
 justify-content: space-between;
 margin: 0 100px;
`


function Header() {
  const navigate = useNavigate();
  const handelLogout = () => {
  navigate("/")
  logout()

}
  return (
    <>
      <Profiles>
        <span>Hello, </span>
        <AddTransation onClick={handelLogout}>logout</AddTransation>
      </Profiles>
      <Container>
        <Headers>Expense Tracker</Headers>
        <HomeComponent />
      </Container>
    </>
  )
}

export default Header
