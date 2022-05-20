import React, { useState, useEffect, useMemo } from 'react'
import Title from '../../UI/Title/Title.style'
import { Styled } from '../ParkingList/ParkingList.style'
import { Styled2 } from './style/Park.style'
import axios from 'axios'
import { API_URL } from '../../utils/API/urls'
import { useParams } from 'react-router-dom'

const {
    CreateContainer,
    CustomForm,
    ParkingBlock,
    Seet,
} = Styled2

const {
    ParkingListContainer,
} = Styled

const Park = () => {
    let { id } = useParams()
    const [parkingData, setParkingData] = useState<any>({
        lenght:0,
        reserved:[0],
    })

    const ParkingSeet = useMemo(() => {
        const arrMemo = []
        for(let i = 1; i <= parkingData.lenght; i++) {
            arrMemo.push(false)
        }
        console.log(arrMemo);
        return arrMemo
    }, [parkingData])

    const getData = async () => {
        const response = await axios.get(`${API_URL.getParking}/${id}`)
        const data = response.data
        setParkingData(data)
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <ParkingListContainer>
            <Title>
                {parkingData.name}
            </Title>
            <Title>
                {parkingData.locathion}
            </Title>
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
                    <ParkingBlock isColor={item} key={ Math.floor(Math.random() * 25) }>
                        {++index}
                    </ParkingBlock>
                ))}
            </Seet>
        </ParkingListContainer>
    )
}

export default Park
