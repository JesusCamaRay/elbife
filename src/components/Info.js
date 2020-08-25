import React from 'react'
import Container from 'react-bootstrap/Container'
import styled from 'styled-components'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ScrollAnimation from 'react-animate-on-scroll';


/*const fadeInUpAnimation = keyframes`${fadeInUp}`;
const CardStyled = styled(Card)`
    animation: 1s ${fadeInUpAnimation};
`;*/

const ContainerStyled = styled(Container)`


    .card{
        background-color:rgba(0,0,0,0.6);
        color:white;
        margin:10px 10px;
    }
    .line{
        color: white;
        background-color: white;
        height: 2px;
        border-color : white;
    }
`

function Info() {
    return (
        <ContainerStyled fluid>
            <Container>
                <Row>
                    <Col xs={12} md={4}>
                        <ScrollAnimation animateIn="fadeIn">
                        <Card>
                            <Card.Body >
                                <Card.Title>Carnicerias El Bife</Card.Title>
                                <Card.Text>
                                Nuestra continua misión es dar a cada uno de nuestros clientes, 
                                servicios y productos de calidad lo cual se traduce en beneficios 
                                de tranquilidad y confianza.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        </ScrollAnimation>
                    </Col>
                    <Col xs={12} md={4}>
                        <ScrollAnimation animateIn="fadeIn">
                        <Card>
                            <Card.Body>
                                <Card.Title>Horario</Card.Title>
                                <Card.Text>
                                    Lunes a Sábado de 6am a 2pm
                                </Card.Text>
                                <hr className="line"/>
                                <Card.Title>Contacto</Card.Title>
                                <Card.Text>
                                Whatsapp: 956030264 <br/>
                                RPC: 981159394 / 993976880 <br/>
                                Oficina: (01) 464 1598
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        </ScrollAnimation>
                    </Col>
                    <Col xs={12} md={4}>
                        <ScrollAnimation animateIn="fadeIn">
                        <Card>
                            <Card.Body>
                                <Card.Title>Recibe nuestras ofertas</Card.Title>
                                <Card.Text>
                                Deja tu correo electrónico y te enviaremos las ofertas o escribenos a pedidoselbife@outlook.com.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                      </ScrollAnimation>
                    </Col>
                </Row>
            </Container>
        </ContainerStyled>
    )
}

export default Info
