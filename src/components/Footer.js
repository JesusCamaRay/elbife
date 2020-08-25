import React from 'react'
import Container from 'react-bootstrap/Container'
import styled from 'styled-components'

const ContainerStyled = styled(Container)`
    padding:10px 10px;
    background-color:#10151f;
    display:flex;
    align-content:center;
    justify-content:center;
    .h6{
        text-align: center;
        color:white;
        margin:0px;
    }
    .link{
        color:white;
    }
`

function Footer() {
    return (
        <ContainerStyled fluid>
            <h6 className="h6">© {document.write(new Date().getFullYear())}Carnicerías El Bife. | Desarrollado por <a className="link" target="_blank" rel="noopener noreferrer" href="https://jesuscama.com">Jesus C.</a></h6>
        </ContainerStyled>
    )
}

export default Footer
