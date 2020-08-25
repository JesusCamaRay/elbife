import React from 'react';

import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image'

import meat1 from '../assets/images/meat1.jpg';
import meat9 from '../assets/images/meat9.jpg';
import meat17 from '../assets/images/meat17.jpg';
import styled from 'styled-components';


const CarouselStyled = styled(Carousel)`

    .title{
        display:inline-block;
        background-color:rgba(0, 0, 0, 0.7);
        font-family: 'GoldRush';

    }
    .description{
        display:inline-block;
        background-color:rgba(0, 0, 0, 0.7);
    }
    .carousel-caption{
        position: absolute;
        right: 15%;
        bottom: 35%;
        left: 15%;
        z-index: 10;
        padding-top: 20px;
        padding-bottom: 20px;
        color: #fff;
        text-align: center;
    }


    // Small devices (landscape phones, 576px and up)
    @media (max-width: 576px) { 
        .carousel-caption {
        bottom: 5%;
    }
    
    .title{
        font-size:6vw;
        padding:5px 30px 5px 30px;
      

    }
    .principal{
        font-size:7vw;
    }
    .description{
       
        padding:5px 30px 5px 30px;
    }}

    @media (min-width: 576px) { 
        .carousel-caption {
            bottom: 10%;
        }
        .title{
            font-size:8vw;
            padding:5px 30px 5px 30px;
            margin-bottom:20px;
    
        }
        .description{
            font-size:3vw;
            padding:5px 30px 5px 30px;
        }}

    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) { 
    .carousel-caption {
        bottom: 15%;
    }
    .title{
        font-size:8vw;
        padding:5px 30px 5px 30px;
        margin-bottom:20px;

    }
    .description{
        font-size:3vw;
        padding:5px 30px 5px 30px;
    }}

    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) { 
        .carousel-caption {      
            bottom: 35%;
        }
        .title{
            font-size:6vw;
            padding:5px 30px 5px 30px;
            margin-bottom:20px;

        }
        .description{
            font-size:3vw;
            padding:5px 30px 5px 30px;
        }
     }



`

function CarouselHome() {
    return (
            <CarouselStyled>
                <Carousel.Item>
                    <Image
                    className="d-block w-100 image-carousel"
                    src={meat1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h1 className="title principal"> — EL BIFE — </h1>
                    <br/>
                    <p className="description">Calidad y Sabor Superior</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image
                    className="d-block w-100 image-carousel"
                    src={meat9}
                    alt="Second slide"
                    fluid
                    />

                    <Carousel.Caption>
                    <h1 className="title">Productos de Calidad</h1>
                    <p className="description">Seguridad, Garantía y Responsabilidad</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image
                    className="d-block w-100 image-carousel"
                    src={meat17}
                    alt="Third slide"
                    fluid
                    />

                    <Carousel.Caption>
                    <h1 className="title">Las Mejores Carnes</h1>
                    <p className="description">El Mejor Precio y en la Puerta de tu Local</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </CarouselStyled>
    )
}

export default CarouselHome
