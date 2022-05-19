import styled from "styled-components";

const UserListContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 100px;
`

const UserListColumn = styled.div`
    display: flex;
    align-items: center;
    height: 300px;
    width: 100%;
    overflow-y: auto;
`

export const Styled = {
    UserListContainer,
    UserListColumn,
}