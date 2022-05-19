import styled from "styled-components";

const ParkingListContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-left: 100px;
    margin-top: 200px;
    flex-direction: column;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    flex-direction: column;
    .wrap {
        margin-top: 70px;
        flex-direction: column;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        overflow-y: scroll;
        height: 450px;
    }
    color: #4B4FA7;
    span {
        color: #FFFFFF;
        padding-left: 10px;
    }    
`

export const Styled = {
    ParkingListContainer,
}