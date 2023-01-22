import React,{ useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import { Translate } from '@material-ui/icons';

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);

  return (
    <Container>
      <a href="https://www.tesla.com">
        <img src="/images/logo.svg" alt="Tesla"/>
      </a>
      <Menu>
        <a href='#'>Model 3</a>
        <a href='#'>Model S</a>
        <a href='#'>Model X</a>
        <a href='#'>Model Y</a>
        <a href='#'>Solar Roof</a>
        <a href='#'>Solar Panel</a>
      </Menu>
      <RightMenu>
        <a href='#'>Shop</a>
        <a href='#'>Account</a>
        <CustomMenu onClick={()=>{
          setBurgerStatus(true);
        }}><p>Menu</p></CustomMenu>
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWrap>
          <CrossIcon onClick={()=>{
            setBurgerStatus(false);
          }}></CrossIcon>
        </CloseWrap>
        <li><a href="#">Existing Inventory</a></li>
        <li><a href="#">Used Inventory</a></li>
        <li><a href="#">Cyber Truck</a></li>
        <li><a href="#">Roadaster</a></li>
        <li><a href="#">Test Drive</a></li>
      </BurgerNav>
    </Container>
  )
}

export default Header

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  img{
    width: 110px;
    height: 15px;
    margin-left: 30px;
  }
  z-index: 1;
`

const Menu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;
  margin-left: 20px;
  a{
    font-weight: 600;
    padding: 10px;
    flex-wrap: no-wrap;
    margin: 0 5px;
    transition: background-color 0.2s;
    border-radius: 4px;
    &:hover{
      backdrop-filter: blur(10px);
    }
  }
  cursor: pointer;
  @media(max-width: 1200px){
    display: none;
  }
`

const RightMenu = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-left: 20px;
a{
  font-weight: 600;
  padding: 10px;
  flex-wrap: no-wrap;
  margin: 0 5px;
  transition: background-color 0.2s;
  &:hover{
    background-color: rgb(228, 226, 226);
    border-radius: 4px;
  }
}
cursor: pointer;
`

const CustomMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  p{
    font-weight: 600;
    padding: 10px;
    flex-wrap: no-wrap;
    transition: background-color 0.2s;
    &:hover{
      background-color: rgb(228, 226, 226);
      border-radius: 4px;
    }
  }
`

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  width: 300px;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${props =>
    props.show ? 'translateX(0)' : 'translateX(100%)'
  }}
  li{
    padding: 15px 0;
    border-bottom-style: solid;
    border-width: 1px;
    a{
      font-weight: 600;
    }
  }
  transition: transform 0.2s;
  
`
const CrossIcon = styled(CloseIcon)`
  cursor: pointer;
`

const CloseWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 10px;
`