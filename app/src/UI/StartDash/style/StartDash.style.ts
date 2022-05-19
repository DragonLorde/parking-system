import styled from "styled-components";

const StartContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`

const StartTitle = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 48px;
    line-height: 58px;
    color: #FFFFFF;
`
const StartImg = styled.img`
    width: 800px;
    height: 430px;
`

export const Styled = {
    StartContainer,
    StartImg,
    StartTitle,
}