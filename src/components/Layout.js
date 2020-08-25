import React from 'react';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';

const ContainerStyled=styled(Container)`
    z-index: 1000;
    padding-right: 0px;
    padding-left: 0px;
    
`

function Layout(props) {
    return (
        <ContainerStyled fluid>
                {props.children}
        </ContainerStyled>
    )
}

export default Layout
