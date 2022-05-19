import React, {FC, useEffect, useState} from 'react'
import Title from '../../UI/Title/Title.style'
import { Styled } from '../ParkingList/ParkingList.style'
import { useNavigate } from 'react-router-dom'
import { checkSession } from '../../utils/checkSession'
import { API_URL } from '../../utils/API/urls'
import axios from 'axios'
import ListContainer from '../../UI/List/List.style'
import CustomLink from '../../UI/Link/Link'

const {
    ParkingListContainer,
} = Styled


const ParkingListUser:FC = () => {
    const [parkingData, setParkingData] = useState<any[]>([{
        name:'',
        location:'',
        item:'',
        lenght:0,
    }])
    const nav = useNavigate()
    const getData = async () => {
        const response = await axios.get(API_URL.getAllParking)
        const data = response.data
        setParkingData(data)
    }
    useEffect(() => {
        getData()
    }, [])
    return (
    <ParkingListContainer>

        <Title>
            Список стоянок
        </Title>
        <div className='wrap'>
            {parkingData && parkingData.map((item) => (
                <ListContainer key={item.name} to={`../park/${item._id}`}>
                    <p>Название: <span>{item.name}</span> </p>
                    <p>Локация: <span>{item.locathion}</span></p>
                    <p>Кол-во мест: <span>{item.lenght}</span> </p>
                </ListContainer>
            ))}
        </div>
    </ParkingListContainer>
  )
}

export default ParkingListUser
