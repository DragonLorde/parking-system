import React, { FC, HTMLInputTypeAttribute, useEffect, useState } from 'react'
import RegistrationContainer from './style/Registration.style'
import { UiLibStyled } from '../../UI'
import { useNavigate } from 'react-router-dom'
import { checkSession } from '../../utils/checkSession'
import fetchData from '../../hooks/fetchData'
import { API_URL } from '../../utils/API/urls'



const {
    Button,
    Form,
    FormContainer,
    Input,
    CustomLink,
  } = UiLibStyled

const Registration = () => {

  const [ isOpen, setIsOpen ] = useState<boolean>(false)
  const [ formData, setFormData ] = useState<object>({
    pass:false,
  })
  const nav = useNavigate()
  useEffect(() => {
    const CurrentSession = checkSession('user')
    CurrentSession && nav('/')
  })

  const onSubmitData = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    const data = await fetchData(API_URL.reg, formData)
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
    <RegistrationContainer>
        <FormContainer style={{
          height: '775px',
        }}>
          <Form onSubmit={onSubmitData}>
            <Input placeholder='login' required onChange={onChangeInput} name='login'/>
            <Input placeholder='Password' required onChange={onChangeInput} name='password'/>
            <Input placeholder='lastName' required onChange={onChangeInput} name='lastName'/>
            <Input placeholder='Укажите марку' required  name='lastName'/>
            <Input placeholder='Укажите модель' required  name='lastName'/>
            <Input placeholder='Укажите цвет' required  name='lastName'/>
            <Input placeholder='загрузите фото' required name='lastName' type='file'/>
            <Input placeholder='regNumber' required onChange={onChangeInput} name='regNumber'/>
            <Button>
              Регистрация
            </Button>
            <CustomLink to='/login'> Есть аккаунт ? </CustomLink>
          </Form>
        </FormContainer>
    </RegistrationContainer>
  )
}

export default Registration