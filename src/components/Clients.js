import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import styled from 'styled-components';
import belmond from '../assets/images/belmond.png';
import costaDelSol from '../assets/images/costadelsol.jpg';
import usil from '../assets/images/usil.png';
import sheraton from '../assets/images/sheraton.png';
import panchita from '../assets/images/panchita.png';
import sonesta from '../assets/images/sonesta.jpg';

const ContainerStyled = styled(Container)`
    background-color:#ede8de;
    padding-top:10px;
    padding-bottom: 15px;

    .h2{
        margin:20px 20px;
        color:black;
        text-align:center;
    
    }

    .row{
        display:flex;
    }
    .col{
        display:flex;
        justify-content:center;
        margin-top:10px;
        margin-bottom:10px;
    }

`
function Clients() {
    return (
        <ContainerStyled fluid>
            <h2 className="h2">Nuestros Clientes</h2>
            <Container>
                <Row className="justify-content-md-center">
                    <Col md={{ span: 2}} xs={6} className="col">
                        <Image width={100}
                        src={usil} rounded fluid alt='Universidad San Ignacio de Loyola'/>
                    </Col>
                    <Col md={{ span: 2}} xs={6} className="col">
                        <Image width={100}
                        src={sheraton} rounded fluid alt='Hoteles Sheraton'/>
                    </Col>
                    <Col md={{ span: 2}} xs={6}  className="col">
                        <Image width={100}
                        src={costaDelSol} rounded fluid alt='Hoteles Costa del Sol'/>
                    </Col>
                    <Col md={{ span: 2}} xs={6}  className="col">
                        <Image width={100}
                        src={belmond} rounded fluid alt='Hoteles Belmond'/>
                    </Col>
                    <Col md={{ span: 2}} xs={6}  className="col">
                        <Image width={100}
                        src={sonesta} rounded fluid alt='Hoteles Sonesta'/>
                    </Col>
                    <Col md={{ span: 2}} xs={6} className="col">
                        <Image width={100}
                        src={panchita} rounded fluid alt='Panchita'/>
                    </Col>
                </Row>
            </Container>
        </ContainerStyled>
    )
}

export default Clients
