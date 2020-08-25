import React from 'react';
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

function Pig() {
    return (
        <ContainerStyled>
            <Row>
            <Col lg={3} md={4} sm={6} xs={12} className="col">
                    <MeatContainer className="meatcontainer"
                    title="Bondiola"
                    link="/contacto"
                    image="cerdobondiola"
                    button="Comprar"/>
                </Col>
                <Col lg={3} md={4} sm={6} xs={12} className="col">
                    <MeatContainer className="meatcontainer"
                    title="Brazuelo"
                    link="/contacto"
                    image="cerdobrazuelo"
                    button="Comprar"/>
                </Col>
                <Col lg={3} md={4} sm={6} xs={12} className="col">
                    <MeatContainer className="meatcontainer"
                    title="Chuleta"
                    link="/contacto"
                    image="cerdochuleta"
                    button="Comprar"/>
                </Col>
                <Col lg={3} md={4} sm={6} xs={12} className="col">
                    <MeatContainer className="meatcontainer"
                    title="Cochinillo"
                    link="/contacto"
                    image="cerdocochinilla"
                    button="Comprar"/>
                </Col>
                <Col lg={3} md={4} sm={6} xs={12} className="col">
                    <MeatContainer className="meatcontainer"
                    title="Costilla"
                    link="/contacto"
                    image="cerdoribs"
                    button="Comprar"/>
                </Col>
                <Col lg={3} md={4} sm={6} xs={12} className="col">
                    <MeatContainer className="meatcontainer"
                    title="Lomo"
                    link="/contacto"
                    image="cerdolomo"
                    button="Comprar"/>
                </Col>
                <Col lg={3} md={4} sm={6} xs={12} className="col">
                    <MeatContainer className="meatcontainer"
                    title="Lomo Fino"
                    link="/contacto"
                    image="cerdolomofino"
                    button="Comprar"/>
                </Col>
                <Col lg={3} md={4} sm={6} xs={12} className="col">
                    <MeatContainer className="meatcontainer"
                    title="Panceta"
                    link="/contacto"
                    image="cerdopanceta"
                    button="Comprar"/>
                </Col>
                <Col lg={3} md={4} sm={6} xs={12} className="col">
                    <MeatContainer className="meatcontainer"
                    title="Pierna Deshuesada"
                    link="/contacto"
                    image="cerdopiernadeshuesada"
                    button="Comprar"/>
                </Col>
                <Col lg={3} md={4} sm={6} xs={12} className="col">
                    <MeatContainer className="meatcontainer"
                    title="Pierna Entera"
                    link="/contacto"
                    image="cerdopiernaentera"
                    button="Comprar"
                    />
                </Col>
            </Row>
        </ContainerStyled>
    )
}

export default Pig

