import React, { useState, useEffect, useMemo } from 'react'
import Title from '../../UI/Title/Title.style'
import { Styled } from '../ParkingList/ParkingList.style'
import { Styled2 } from '../Park/style/Park.style'
import axios from 'axios'
import { API_URL } from '../../utils/API/urls'
import { useParams } from 'react-router-dom'
import Input from '../../UI/Input/Input'
import Button from '../../UI/Button/Button'
import { useNavigate } from 'react-router-dom'


const {
    CreateContainer,
    CustomForm,
    ParkingBlock,
    Seet,
} = Styled2

const {
    ParkingListContainer,
} = Styled

const ParkUser = () => {
    const nav = useNavigate()
    let { id } = useParams()
    const [error, setError] = useState(false)
    const [parkingDataUser, setParkingDataUser] = useState({
        index: 0,
        id: id
    })
    const [parkingData, setParkingData] = useState<any>({
        lenght:0,
        reserved:[0],
    })
    const [isOpen, setIsOpen] = useState<boolean>(false);
    

    const getData = async () => {
        const response = await axios.get(`${API_URL.getParking}/${id}`)
        const data = response.data
        setParkingData(null)
        setParkingData(data)
    }
    useEffect(() => {
        getData()
    }, [])

    const ParkingSeet = useMemo(() => {
        const arrMemo = []
        for(let i = 1; i <= parkingData.lenght; i++) {
            arrMemo.push(i)
        }
        return arrMemo
    }, [parkingData])

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        setParkingDataUser((prev) => ({...prev, [name]: parseInt(value)}))
        console.log(parkingData)
    }

   

    const onSubmitData = async (e: React.ChangeEvent<HTMLFormElement>) => {
        console.log('asfasfasf');
        
        e.preventDefault()
        const data = await axios.post(API_URL.seetParking, parkingDataUser)
        if(!data.status) {
            setError(true)
          return false    
        }
        setError(false)
        nav('/')
    }

    return (
        <ParkingListContainer>
            <Title>
                {parkingData.name}
            </Title>
            <Title>
                {parkingData.locathion}
            </Title>
            <CustomForm onSubmit={onSubmitData}>
                <Input placeholder='Номер места' onChange={onChangeInput} name='index'/> 
                <Button> Зарезерировать </Button>
            </CustomForm>
            <br />
            <Title>
                Обзор стоянки
            </Title>
            <br />
            <Title>
                Кол-во мест: {parkingData.lenght} 
            </Title> 
            <Seet>
                {ParkingSeet.map((item, index) => (
                    <ParkingBlock isColor={false} key={ Math.floor(Math.random() * 25) }>
                        {++index}
                    </ParkingBlock>
                ))}
            </Seet> 

        </ParkingListContainer> 
    )
}

export default ParkUser
