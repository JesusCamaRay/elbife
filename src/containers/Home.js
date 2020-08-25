import React from 'react';
import CarouselHome from '../components/CarouselHome';
import MeatsContainer from '../components/MeatsContainer';
import Clients from '../components/Clients';
import Info from '../components/Info';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';
import infoWallpaper from '../assets/images/meat13.jpg'

const ContainerStyled = styled(Container)`
    background-image:linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${infoWallpaper});
    background-position: center;
    background-attachment: fixed;
    margin:0px;
    padding:0px;
`

function Home() {
    return (
        <ContainerStyled fluid>
            <CarouselHome/>
            <MeatsContainer/>
            <Clients/>
            <Info/>
        </ContainerStyled>
    )
}

export default Home
