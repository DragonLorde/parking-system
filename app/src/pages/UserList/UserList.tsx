import React, { useCallback, useEffect, useState } from 'react'
import axios from 'axios'
import { API_URL } from '../../utils/API/urls'
import { Styled } from '../ParkingList/ParkingList.style'
import Title from '../../UI/Title/Title.style'
import ListContainer from '../../UI/List/List.style'
import Input from '../../UI/Input/Input'

const {
    ParkingListContainer,
} = Styled

const UserList = () => {
    const [inputValue, setInputValue] = useState('')
    const [userData, setUserData] = useState<any[]>()
    const [userDataFiltered, setUserDataFiltered] = useState<any[]>()
    const getData = async () => {
        const response = await axios.get(API_URL.getAllUsers)
        const data = response.data
        setUserData(data)
        setUserDataFiltered(data)
    }
    useEffect(() => {
        getData()
    }, [])
    const onFilter = useCallback((e: any) => {
            const inputValue = e.target.value.toLowerCase()
            
            let resArr = userData?.filter((item) => {
                return item.login.search(inputValue) !== -1
            })
            console.log(resArr?.length);
            
            setUserDataFiltered(resArr?.length === 0 ? userData: resArr)
            setInputValue(e.target.value)
            
    }, [userData, inputValue])
    return (
        <ParkingListContainer>
            <Title>
                Список клиентов
            </Title>
            <div>
                <Input 
                    placeholder='Фильтр'
                    onChange={onFilter}
                    value={inputValue}
                />
            </div>
            <div className='wrap' style={{
                justifyContent:'initial'
            }}>
                {userDataFiltered && userDataFiltered.map((item) => (
                    <ListContainer to='/user_list' key={item.login}>
                        <p>Логин: <span>{item.login}</span> </p>
                        <p>Фамилия: <span>{item.lastName}</span></p>
                        <p>Гос-номер: <span>{item.regNumber}</span> </p>
                    </ListContainer>
                ))}
            </div>
        </ParkingListContainer>
    )
}

export default UserList
