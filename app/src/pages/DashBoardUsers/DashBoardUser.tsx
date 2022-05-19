import React, { FC, useEffect, useState } from 'react'
import Header from '../../UI/Header/Header'
import Menu from '../../UI/Menu/Menu'
import { checkSession } from '../../utils/checkSession'
import { Styled } from './style/DashBoard.style'
import { useNavigate } from 'react-router-dom'
import StartDash from '../../UI/StartDash/StartDash.style'
import { Outlet } from 'react-router-dom'

const {
  DashBoardContainer,
  DashBoardRightContainer,
} = Styled

const DashBoardUser:FC = () => {

  const nav = useNavigate()
  const [currentSession, setCurrentSesion] = useState<any>(' ')
  useEffect(() => {
    const session = checkSession('user')
    if(!session) {
      nav('/login')
      return
    }
    setCurrentSesion(session)    
    if(!session.data.pass) {
      nav('/userDashboard')
    }
  }, [])

  return (
    <DashBoardContainer>
      <Menu links={[
        ['userDashboard/parking', 'Парковка'],
        ['userDashboard/document', 'Документы'],
      ]}/>
      <DashBoardRightContainer>
        <Header userName={currentSession?.data?.login}></Header>
        <Outlet />

      </DashBoardRightContainer>
    </DashBoardContainer>
  )
}

export default DashBoardUser