import React, { FC, useEffect, useState } from 'react'
import { Styled } from './style/Header.style'
import axios from 'axios'


interface HeaderProps {
    userName: string,
}

const {
    HeaderContainer,
    Avatar,
    HeaderLogin,
    Login,
} = Styled

const Header:FC<HeaderProps> = ({userName}) => {
    
    const [ avatar, setAvatar ] = useState<string>('https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png')

    return (
    <HeaderContainer>
        <HeaderLogin>
            <Login>
                {userName}
            </Login>
            <Avatar src={avatar} />
        </HeaderLogin>
    </HeaderContainer>
  )
}

export default Header
