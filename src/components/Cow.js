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

function Cow() {
    return (
        <ContainerStyled>
            <Row>
                <Col lg={3} md={4} sm={6} xs={12} className="col">
                    <MeatContainer className="meatcontainer"
                    title="Aguja"
                    link="/contacto"
                    image="vacaaguja"
                    button="Comprar"/>
                </Col>
                <Col lg={3} md={4} sm={6} xs={12} className="col">
                    <MeatContainer className="meatcontainer"
                    title="Asado Ruso"
                    link="/contacto"
                    image="vacaasadoruso"
                    button="Comprar"/>
                </Col>
                <Col lg={3} md={4} sm={6} xs={12} className="col">
                    <MeatContainer className="meatcontainer"
                    title="Bife Ancho"
                    link="/contacto"
                    image="vacabifeancho"
                    button="Comprar"/>
                </Col>
                <Col lg={3} md={4} sm={6} xs={12} className="col">
                    <MeatContainer className="meatcontainer"
                    title="Bife Angosto"
                    link="/contacto"
                    image="vacabifeangosto"
                    button="Comprar"/>
                </Col>
                <Col lg={3} md={4} sm={6} xs={12} className="col">
                    <MeatContainer className="meatcontainer"
                    title="Bistec Tapa"
                    link="/contacto"
                    image="vacabistectapa"
                    button="Comprar"/>
                </Col>
                <Col lg={3} md={4} sm={6} xs={12} className="col">
                    <MeatContainer className="meatcontainer"
                    title="Bola de Lomo"
                    link="/contacto"
                    image="vacaboladelomo"
                    button="Comprar"/>
                </Col>
                <Col lg={3} md={4} sm={6} xs={12} className="col">
                    <MeatContainer className="meatcontainer"
                    title="Cadera"
                    link="/contacto"
                    image="vacacadera"
                    button="Comprar"/>
                </Col>
                <Col lg={3} md={4} sm={6} xs={12} className="col">
                    <MeatContainer className="meatcontainer"
                    title="Churrasco"
                    link="/contacto"
                    image="vacachurrasco"
                    button="Comprar"/>
                </Col>
                <Col lg={3} md={4} sm={6} xs={12} className="col">
                    <MeatContainer className="meatcontainer"
                    title="Entraña"
                    link="/contacto"
                    image="vacaentraña"
                    button="Comprar"/>
                </Col>
                <Col lg={3} md={4} sm={6} xs={12} className="col">
                    <MeatContainer className="meatcontainer"
                    title="Lomo Fino"
                    link="/contacto"
                    image="vacalomofino"
                    button="Comprar"
                    />
                </Col>
                <Col lg={3} md={4} sm={6} xs={12} className="col">
                    <MeatContainer className="meatcontainer"
                    title="Osobuco"
                    link="/contacto"
                    image="vacaosobuco"
                    button="Comprar"/>
                </Col>
               <Col lg={3} md={4} sm={6} xs={12} className="col">
                    <MeatContainer className="meatcontainer"
                    title="Picanha"
                    link="/contacto"
                    image="vacapicanha"
                    button="Comprar"/>
                </Col>
                <Col lg={3} md={4} sm={6} xs={12} className="col">
                    <MeatContainer className="meatcontainer"
                    title="Tebone"
                    link="/contacto"
                    image="vacatebone"
                    button="Comprar"/>
                </Col>
                <Col lg={3} md={4} sm={6} xs={12} className="col">
                    <MeatContainer className="meatcontainer"
                    title="Tortuga"
                    link="/contacto"
                    image="vacatortuga"
                    button="Comprar"/>
                </Col>
                <Col lg={3} md={4} sm={6} xs={12} className="col">
                    <MeatContainer className="meatcontainer"
                    title="Tuétano"
                    link="/contacto"
                    image="vacatuetano"
                    button="Comprar"/>
                </Col>
            </Row>
        </ContainerStyled>
    )
}

export default Cow
