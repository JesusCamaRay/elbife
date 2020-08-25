import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import styled from 'styled-components'
import meat18 from '../assets/images/meat18.jpg'
import Card from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion'

const ContainerStyled = styled(Container)`
    margin-top:15px;
    margin-bottom:15px;
    .row{
        margin-bottom:15px;
    }
    .card-header{
        text-decoration: none;
        color:black;
    }
   `

function Presentation() {
    return (
        <ContainerStyled>
            <Row>
              
                    <Col xs={12} md={6}>
                        <Card>
                            <Card.Body>
                            <p>
                            <strong>El bife S.A.C</strong> está compuesto por profesionales y expertos en el rubro de alimentos frescos tales como: <strong>Res, Pollos, Caprinos, Porcinos</strong> y otros de consumo masivo. Llevamos trabajando en este rubro <strong>más de 20 años</strong> lo cual respaldan nuestra experiencia y calidad.
                            </p>
                            <p>La propuesta abarca la recepción de pedidos diarios y la <strong>entrega</strong> de los mismos a las <strong>horas</strong> pactadas con nuestros clientes, manteniendo siempre la <strong>puntualidad</strong> en nuestras entregas ya que este es un factor muy importante para nosotros.
                            </p>
                            <p>
                            Adicionalmente contamos con <strong>movilidades propias</strong> adecuadas para el rubro como <strong>camión frigorífico</strong> el mismo que nos permite trasportar los alimentos con estándares de <strong>alta calidad</strong>.
                            Mantenemos constante <strong>comunicación</strong> con nuestros clientes a fin de brindarles un <strong>mejor servicio</strong> cada día.
                            </p>
                            <p>Esperamos que nuestra propuesta supla <strong>sus necesidades</strong>, si tiene alguna duda o comentario al respecto <strong>no dude en contactarnos</strong>.
                            </p>
                            </Card.Body>
                            
                        </Card>
                    </Col>
                    <Col xs={12} md={6}>
                        <Image src={meat18} rounded fluid/>
                    </Col>
           
            </Row>
            <Row>
                <Col>
                    <Accordion defaultActiveKey="0">
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="0">
                            Misión
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                            <Card.Body>La misión de nuestra empresa es la creciente creación de valor, logrando un destacado retorno de las inversiones, superior al costo del capital empleado.
                            En nuestros negocios de alimentos  buscamos siempre mejorar la calidad de vida del consumidor y el progreso de nuestra gente.
                            Buscamos el crecimiento rentable con marcas líderes, servicio superior y una excelente distribución a nivel nacional e internacional.
                            Gestionamos nuestras actividades comprometidos con el desarrollo sostenible; con el mejor talento humano; innovación sobresaliente y un comportamiento corporativo ejemplar.
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="1">
                            Visión
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="1">
                            <Card.Body>Juntos lograremos triplicar nuestro negocio de alimentos, proporcionando calidad de vida al consumidor con productos que satisfagan 
                                sus aspiraciones de bienestar, nutrición y placer.</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        </Accordion>
                </Col>
            </Row>
        </ContainerStyled>
    )
}

export default Presentation
