import React, { FC, HTMLInputTypeAttribute, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UiLibStyled } from '../../UI'
import { checkSession } from '../../utils/checkSession'
import LoginContainer from './style/Login.style'
import fetchData from '../../hooks/fetchData'
import { API_URL } from '../../utils/API/urls'
import { PopUp, PopUptText } from '../../UI/PopUp/PopUp.style'

const {
  Button,
  Form,
  FormContainer,
  Input,
  CustomLink,
} = UiLibStyled

const Login:FC = () => {

  const [ isOpen, setIsOpen ] = useState<boolean>(false)
  const [ formData, setFormData ] = useState<object>({})
  const nav = useNavigate()
  useEffect(() => {
    const CurrentSession = checkSession('user')
    CurrentSession && nav('/')
  })

  const onSubmitData = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    const data = await fetchData(API_URL.login, formData)
    if(!data.status) {
      setIsOpen(true)
      return false    
    }
    setIsOpen(false)
    localStorage.setItem('user', JSON.stringify(data))
    nav('/')
  }

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target
    setFormData((prev) => ({...prev, [name]: value}))
    console.log(formData)
  } 

  return (
    <LoginContainer>
        <FormContainer>
          <Form onSubmit={onSubmitData}>
            <Input placeholder='login' onChange={onChangeInput} name='login'/>
            <Input placeholder='Password' onChange={onChangeInput} name='password'/>
            <Button>
              Войти
            </Button>
            <CustomLink to='/registration'> Нет аккаунта ? </CustomLink>
          </Form>
        </FormContainer>
        <PopUp isOpen={isOpen}>
          <PopUptText> Неправельный логин или пароль </PopUptText>
        </PopUp>
    </LoginContainer>
  )
}

export default Login
