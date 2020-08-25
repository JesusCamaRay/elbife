import React from 'react';
import Container from 'react-bootstrap/Container'
import styled from 'styled-components';
import wallpaper from '../assets/images/meat23.jpg';

const ContainerStyled = styled(Container)`
   
        background-image: url(${wallpaper});
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-position: center;
        height:50vw;
        position: relative;
        padding-top: 20px;
        padding-bottom: 20px;
        color: #fff;
        text-align: center;
        display:flex;
        justify-content:center;
        align-content:center;
        align-items:center;
        flex-direction:column;
 

    .title{
        background-color:rgba(0, 0, 0, 0.7);
        font-family: 'Montserrat', sans-serif;
    }
    .description{
        background-color:rgba(0, 0, 0, 0.7);
    }


    // Small devices (landscape phones, 576px and up)
    @media (max-width: 576px) { 

        height:80vw;


    .title{
        font-size:6vw;
        padding:5px 30px 5px 30px;
      

    }
    .description{
        padding:5px 30px 5px 30px;
    }}

    @media (min-width: 576px) { 
 
            height:50vw;
  

        .title{
            font-size:6vw;
            padding:5px 30px 5px 30px;
            margin-bottom:20px;
    
        }
        .description{
            font-size:3vw;
            padding:5px 30px 5px 30px;
        }}

    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) { 
 
            height:40vw;


        .title{
            font-size:6vw;
            padding:5px 30px 5px 30px;
            margin-bottom:20px;

        }
        .description{
            font-size:3vw;
            padding:5px 30px 5px 30px;
        }}

    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) { 

            height:40vw;
    
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

function HeaderPresentation(props) {
    
    return (
        <ContainerStyled fluid>
                    <h1 className="title">{props.title}</h1>
                    <br/>
                    <p className="description">{props.description}</p>
            </ContainerStyled>
    )
}

export default HeaderPresentation
