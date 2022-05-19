import React, { useMemo, useState } from 'react'
import Button from '../../UI/Button/Button'
import Input from '../../UI/Input/Input'
import { PopUp, PopUptText } from '../../UI/PopUp/PopUp.style'
import Text from '../../UI/Text/Text.style'
import Title from '../../UI/Title/Title.style'
import { Styled } from './style/CreateParking.style'
import fetchData from '../../hooks/fetchData'
import { useNavigate } from 'react-router-dom'
import { API_URL } from '../../utils/API/urls'

const {
    CreateContainer,
    CustomForm,
    Seet,
    ParkingBlock,
} = Styled

const CreateParking = () => {

    const nav = useNavigate()
    const [error, setError] = useState(false)
    const [parkingData, setParkingData] = useState({
        locathion: '',
        name: 'Новая стоянка',
        lenght: 0,
        reserved: [0],
    })
    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        setParkingData((prev) => ({...prev, [name]: value}))
        console.log(parkingData)
    }
    const ParkingSeet = useMemo(() => {
        if(parkingData.lenght > 25) {
            setError(true)
            return []
        }
        const arrMemo = []
        for(let i = 0; i < parkingData.lenght; i++) {
            arrMemo.push(i)
        }
        setError(false)
        return arrMemo
    }, [parkingData])
    
    const onSubmitData = async (e: React.ChangeEvent<HTMLFormElement>) => {
        console.log('asfasfasf');
        
        e.preventDefault()
        
        const data = await fetchData(API_URL.createParking, parkingData)
        if(!data.status) {
            setError(true)
          return false    
        }
        setError(false)
        nav('/')
    }

    return (
        <CreateContainer>
            <Title>
                {parkingData.name || 'Новая стоянка'} 
            </Title>
            <CustomForm onSubmit={onSubmitData}>
                <Input placeholder='название' onChange={onChangeInput} name='name'/>
                <Input placeholder='Локация' onChange={onChangeInput} name='locathion'/>
                <Input placeholder='Кол-во мест' onChange={onChangeInput} name='lenght'/>
                <Button> Создать </Button>
            </CustomForm>
            <div>
                <Title>
                    Стоянка
                </Title>
                <br />
                <Text>
                    Кол-во мест: {parkingData.lenght}
                </Text>
            </div>
            <Seet>
                {ParkingSeet.map((Item) => (<ParkingBlock key={Item}/>))}
            </Seet>
            <PopUp isOpen={error}> 
                <PopUptText> 
                    Прившен лимит мест
                </PopUptText>
            </PopUp>
        </CreateContainer>
    )
}

export default CreateParking