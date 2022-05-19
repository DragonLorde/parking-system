import styled from "styled-components";
import CustomLink from "../../Link/Link";

export const MenuContainer = styled.div`
    display: flex;
    width: 20%;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    margin-left: 20px;
    border-right: 1px solid white;
    padding-right: 10px;
`

export const MenuTitle = styled.h1`
    font-style: normal;
    font-weight: 400;
    font-size: 48px;
    line-height: 58px;
    text-align: center;
    color: #FFFFFF;
`

export const MenuLinkContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 200px;
`

export const MenuLabel = styled.p`
    font-style: normal;
    font-weight: 200;
    font-size: 20px;
    line-height: 24px;

    color: #FFFFFF;
`
export const CustomLinkMenu = styled(CustomLink)`
    text-align: left;
    height: 40px;
    display: flex;
    align-items: center;
    padding-left: 20px;
    width: calc(100% - 20px);
    transition: 0.4s ease-in-out;
    &:hover {
        background: #292A2D;
        border-radius: 10px;
        color: #4B4FA7;
    }
`

