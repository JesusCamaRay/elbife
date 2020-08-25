import React from 'react'
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';
import MeatContainer from './MeatContainer';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const ContainerStyled = styled(Container)`
    .col{
        margin:0px;
        padding-top:10px;
        padding-bottom:10px;
        padding-right:5px;
        padding-left:5px;
    }
    .container-fluid{
        margin:0px;
    }
`

function Poultry() {
    return (
        <ContainerStyled>
            <Row>
            <Col lg={3} md={4} sm={6} xs={12} className="col">
                    <MeatContainer className="meatcontainer"
                    title="Encuentro"
                    link="/contacto"
                    image="polloencuentro"
                    button="Comprar"/>
                </Col>
                <Col lg={3} md={4} sm={6} xs={12} className="col">
                    <MeatContainer className="meatcontainer"
                    title="Entero"
                    link="/contacto"
                    image="polloentero"
                    button="Comprar"/>
                </Col>
                <Col lg={3} md={4} sm={6} xs={12} className="col">
                    <MeatContainer className="meatcontainer"
                    title="Pecho Filete"
                    link="/contacto"
                    image="pollopechofilete"
                    button="Comprar"/>
                </Col>
                <Col lg={3} md={4} sm={6} xs={12} className="col">
                    <MeatContainer className="meatcontainer"
                    title="Pechuga con Hueso"
                    link="/contacto"
                    image="pollopechugaconhueso"
                    button="Comprar"/>
                </Col>
                <Col lg={3} md={4} sm={6} xs={12} className="col">
                    <MeatContainer className="meatcontainer"
                    title="Pierna con Encuentro"
                    link="/contacto"
                    image="pollopiernaencuentro"
                    button="Comprar"/>
                </Col>
            </Row>
        </ContainerStyled>
    )
}

export default Poultry;
