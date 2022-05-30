import React, { FC, useEffect, useState } from 'react'
import { Styled } from './style/Header.style'
import axios from 'axios'
import Text from '../Text/Text.style'

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
    const date = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString().slice(0,-3);
    const [ avatar, setAvatar ] = useState<string>('https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png')

    const getRadnom = (min: number, max: number): number => {
        return Math.floor(min + Math.random() * (max - min))
    }

    const countUsers = getRadnom(1, 50)

    return (
    <HeaderContainer>
        <Text style={{
            marginRight: '60px',            
        }}>
            Дата: {date}
            <br />
            Время: {time}
        </Text>
        <Text style={{
            marginRight: '60px',            
        }}>
            Количество посещений: {countUsers}
        </Text>
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
