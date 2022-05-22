import React, { FC, useState, useEffect } from 'react'
import Button from '../Button/Button'
import { MenuContainer, MenuLinkContainer, MenuTitle, CustomLinkMenu } from './style/Menu.style'
import { useNavigate } from 'react-router-dom'
import { PopUpCenter } from '../PopUpCenter/PopUpCenter.style'
import { PopUptText } from '../PopUp/PopUp.style'
import { checkSession } from '../../utils/checkSession'


interface MenuProps {
  links: string[][],
}

const Menu:FC<MenuProps> = ({links}) => {
  const [currentSession, setCurrentSesion] = useState<any>(' ')
  const [isOpen, setIsOpen] = useState(false)
  const [isAdmin, setIsAdmin] = useState(true)
  const nav = useNavigate()
  const onExit = () => {
    localStorage.clear()
    nav('/login')
    return false
  }

  useEffect(() => {
    const session = checkSession('user')
    if(!session.data.pass) {
     setIsAdmin(false)
    }
  }, [])

  const onSale = () => {
    if(isAdmin) {
      setIsOpen(!isOpen)
    }
    return false
  }

  function randomInteger(min: number, max: number) {
    let res = []
    for(let i = 0; i < 5; i++) {
      let rand = min - 0.5 + Math.random() * (max - min + 1)
      res.push(Math.round(rand))
    }
    return res.join(' ')
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
      <PopUpCenter isOpen={isOpen} style={{
        transform: 'translateX(200%)',
        border:'1px solid green',
      }}>
        <PopUptText>
          Промокод: {randomInteger(2, 10)} 
        </PopUptText>
      </PopUpCenter>
      { isAdmin &&(<Button onClick={onSale}> Выдать скидку </Button>)}
      <Button onClick={onExit}> Выйти </Button>
    </MenuContainer>
  )
}

export default Menu
