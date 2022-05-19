import React from 'react'
import styled from 'styled-components'

const Documents = () => {
  return (
    <DonlowadContainer>
        <DonlowadLink href='src/doc.docx' download>
            Договор
        </DonlowadLink>
        <DonlowadLink href='src/doc2.pdf' download>
            Типовой документ
        </DonlowadLink>
    </DonlowadContainer>
  )
}

const DonlowadLink = styled.a`
    color: white;
    font-size: 32px;
    margin: 20px;
`

const DonlowadContainer = styled.div`
    display: flex;
    width: calc(100% - 100px);
    height: 100%;
    justify-content: center;
    align-items: flex-start;
    margin-left: 100px;
    flex-direction: column;
`

export default Documents