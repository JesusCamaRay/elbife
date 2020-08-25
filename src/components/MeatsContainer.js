import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MeatContainer from '../components/MeatContainer';
import styled from 'styled-components';

const ContainerStyled = styled(Container)`
    padding:0px;
    .row{
        margin:10px 10px;
    }
    .col{
        padding-top:10px;
        padding-bottom:10px;
    }
`;


function MeatsContainer() {
    return (
        <ContainerStyled fluid>
            <Row className="row">
                <Col lg={3} md={6} xs={12} className="col">
                    <MeatContainer 
                    title="Carne de Res"
                    caption="Distribuimos una gran variedad de productos cárnicos de res y menudencias nacionales"
                    link="/productos/res"
                    image="meat14"
                    button="Ver Cortes"
                    />
                </Col>
                <Col lg={3} md={6} xs={12} className="col">
                    <MeatContainer 
                    title="Carne de Cerdo"
                    caption="Exquisita carne de cerdos elaborada con los mejores procesos de la industria peruana."
                    link="/productos/cerdo"
                    image="meat15"
                    button="Ver Cortes"
                    />
                </Col>
                <Col lg={3} md={6} xs={12} className="col">
                    <MeatContainer 
                    title="Carne de Cordero"
                    caption="Exquisita carne de cerdos elaborada con los mejores procesos de la industria peruana."
                    link="/productos/cordero"
                    image="meat8"
                    button="Ver Cortes"
                    />
                </Col>
                <Col lg={3} md={6} xs={12} className="col">
                    <MeatContainer 
                    title="Carne de Aves"
                    caption="Exquisita carne de aves elaborada con los mejores procesos de la industria peruana."
                    link="/productos/ave-corral"
                    image="meat16"
                    button="Ver Cortes"
                    />
                </Col>
            </Row>
        </ContainerStyled>
    )
}

export default MeatsContainer
