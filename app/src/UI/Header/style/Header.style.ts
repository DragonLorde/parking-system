import styled from "styled-components";

const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: right;
    align-items: center;
    height: 75px;
    box-shadow: 2px 17px 35px -5px rgba(122, 122, 122, 0.22);
    
`

const HeaderLogin = styled.div`
    width: auto;
    display: flex;
    align-self: center;
    justify-content: space-between;
    margin-right: 60px;
`

const Avatar = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-left: 30px;
`

const Login = styled.p`
    font-style: normal;
    font-weight: 200;
    font-size: 36px;
    line-height: 44px;

    color: #FFFFFF;
`

export const Styled = {
    HeaderContainer,
    HeaderLogin,
    Avatar,
    Login
}