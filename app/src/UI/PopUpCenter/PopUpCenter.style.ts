import styled from "styled-components";

export const PopUpCenter = styled.div<{isOpen: boolean}>`
    display: ${(props) => props.isOpen ? 'flex': 'none'};
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 100px;
    position: fixed;
    top: 50%;
    transform: translateX(-50%);
    background: #292A2D;
    border: 1px solid #963838;
    box-shadow: 4px 6px 5px 2px rgba(0, 0, 0, 0.25);
    border-radius: 18px;
    padding: 20px;
`

export const PopUptTextCenter = styled.p`
    font-style: normal;
    font-weight: 800;
    font-size: 26px;
    line-height: 44px;
    color: #C03F3F;
    text-align: center;
`