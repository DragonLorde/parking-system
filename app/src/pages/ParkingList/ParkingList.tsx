import React, {FC, useEffect, useState} from 'react'
import Title from '../../UI/Title/Title.style'
import { Styled } from './ParkingList.style'
import { useNavigate } from 'react-router-dom'
import { checkSession } from '../../utils/checkSession'
import { API_URL } from '../../utils/API/urls'
import axios from 'axios'
import ListContainer from '../../UI/List/List.style'
import CustomLink from '../../UI/Link/Link'

const {
    ParkingListContainer,
} = Styled


const ParkingList:FC = () => {
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
            Создать новую стоянку ?        
        </Title>
        <CustomLink to='/setParking' style={{
            marginTop:'30px',
            marginBottom:'30px',
            textAlign:'left',
            background: '#292A2D',
            width: '230px',
            height: '40px',
            display: 'flex',
            alignItems:'center',
            justifyContent:'center',
            borderRadius:'10px'
        }}>
            создать
        </CustomLink>
        <Title>
            Список стоянок
        </Title>
        <div className='wrap' style={{
            height:'320px',
        }}>
            {parkingData && parkingData.map((item) => (
                <ListContainer key={item.name} to={`/park/${item._id}`}>
                    <p>Название: <span>{item.name}</span> </p>
                    <p>Локация: <span>{item.locathion}</span></p>
                    <p>Кол-во мест: <span>{item.lenght}</span> </p>
                </ListContainer>
            ))}
        </div>
    </ParkingListContainer>
  )
}

export default ParkingList
