import React from 'react';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';
import Image from 'react-bootstrap/Image';
import mapImage from '../assets/images/map.JPG';

const ContainerStyled = styled(Container)`

`

function Map() {
    return (
        <ContainerStyled>
            <Image src={mapImage} fluid></Image>
        </ContainerStyled>
    )
}

export default Map;
