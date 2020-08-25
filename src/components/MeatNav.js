import React from 'react'
import styled from 'styled-components'
import Container from 'react-bootstrap/Container'
import {Route,Link, useRouteMatch} from 'react-router-dom'



const StyledContainer=styled(Container)`
    display:flex;

`

function MeatNav() {
    let { url } = useRouteMatch();
    return (
        <StyledContainer fluid>
            <Link to={`${url}/res`}>Carne de Res</Link>
            <Link to={`${url}/cerdo`}>Carne de Cerdo</Link>
            <Link to={`${url}/cordero`}>Carne de Cordero</Link>
            <Link to={`${url}/ave-corral`}>Carne de Aves</Link>
        </StyledContainer>
    )
}

export default MeatNav
