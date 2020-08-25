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

function Mutton() {
    return (
        <ContainerStyled>
            <Row>
            <Col lg={3} md={4} sm={6} xs={12} className="col">
                    <MeatContainer className="meatcontainer"
                    title="Chuleta"
                    link="/contacto"
                    image="corderochuleta"
                    button="Comprar"/>
                </Col>
                <Col lg={3} md={4} sm={6} xs={12} className="col">
                    <MeatContainer className="meatcontainer"
                    title="Costilla"
                    link="/contacto"
                    image="corderocostilla"
                    button="Comprar"/>
                </Col>
                <Col lg={3} md={4} sm={6} xs={12} className="col">
                    <MeatContainer className="meatcontainer"
                    title="Pierna Deshuesada"
                    link="/contacto"
                    image="corderopiernadeshuesada"
                    button="Comprar"/>
                </Col>
                <Col lg={3} md={4} sm={6} xs={12} className="col">
                    <MeatContainer className="meatcontainer"
                    title="Pierna Entera"
                    link="/contacto"
                    image="corderopiernaentera"
                    button="Comprar"/>
                </Col>
                <Col lg={3} md={4} sm={6} xs={12} className="col">
                    <MeatContainer className="meatcontainer"
                    title="Cabrito de Leche"
                    link="/contacto"
                    image="corderocabritodeleche"
                    button="Comprar"/>
                </Col>
            </Row>
        </ContainerStyled>
    )
}

export default Mutton