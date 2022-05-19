import React from 'react'
import { Styled } from './style/StartDash.style'
import car from '../../../src/sourse/img/pngwing 1.png'

const {
    StartContainer,
    StartImg,
    StartTitle,
} = Styled

const StartDash = () => {
  return (
    <StartContainer>
        <StartTitle>
            Информационно-справочная система 
        </StartTitle>
        <StartImg src = {car} />
    </StartContainer>
  )
}

export default StartDash
