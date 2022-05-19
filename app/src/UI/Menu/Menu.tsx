import React, { FC } from 'react'
import Button from '../Button/Button'
import { MenuContainer, MenuLinkContainer, MenuTitle, CustomLinkMenu } from './style/Menu.style'
import { useNavigate } from 'react-router-dom'

interface MenuProps {
  links: string[][],
}

const Menu:FC<MenuProps> = ({links}) => {


  const nav = useNavigate()
  const onExit = () => {
    localStorage.clear()
    nav('/login')
    return false
  }

  return (
    <MenuContainer>
      <MenuTitle>
        PARKING <br/> SYSTEM
      </MenuTitle>
      <MenuLinkContainer>
          {links.map(item => (
              <CustomLinkMenu to={`/${item[0]}`} key={item[0]}> 
                {item[1]}
              </CustomLinkMenu>
            ))
          }
      </MenuLinkContainer>
      <Button onClick={onExit}> Выйти </Button>
    </MenuContainer>
  )
}

export default Menu
