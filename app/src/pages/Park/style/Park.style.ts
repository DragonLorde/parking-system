import styled from "styled-components";
import { Form } from "../../../UI/Form/Form.style";

const CreateContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: space-evenly;
    align-items: left;
    flex-direction: column;
    margin-left: 200px;
`

const CustomForm = styled(Form)`
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 90%;
`

const Seet = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 80%;
    overflow-y: auto;
    height: 456px;
    max-height: 456px;
    &::-webkit-scrollbar {
        width: 10px;
    }
    &::-webkit-scrollbar-track {
        -webkit-box-shadow: 5px 5px 5px -5px rgba(34, 60, 80, 0.2) inset;
        background-color: #f9f9fd;
        border-radius: 10px;
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background: #292A2D;
    }
`

const ParkingBlock = styled.div<{ isColor: any }>`
    width: 140px;
    height: 200px;
    background: ${(props) => props.isColor  ? '#4B4FA7' : '#D7D7D7'};
    border-radius: 15px;
    margin-left: 15px;
    margin-right: 15px;
    margin-top: 14px;
    margin-bottom: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 46px;
    transition: 0.4s ease-in-out;
    border: 3px solid rgba(16, 177, 52, 0);
    cursor: pointer;
    &:hover {
        border: 3px solid #10B134;
    }
`

export const Styled2 = {
    CreateContainer,
    CustomForm,
    Seet,
    ParkingBlock,
}