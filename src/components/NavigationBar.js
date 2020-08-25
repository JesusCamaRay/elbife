import React, { useState, useEffect}  from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import styled, {keyframes} from 'styled-components';
import {Link} from 'react-router-dom';
import logo from '../assets/images/logo.png'
import Image from 'react-bootstrap/Image'

const animationHeader = keyframes`
    0% {
    opacity: 0.5;
    }
    50% {
    opacity: 0.7;
    }
    100% {
        opacity: 1;
    }
    `

    const Styles = styled.div`
        .navbar{
            align-items:flex-start;
        }
        .navbar-nav{
            display:flex;
            width:500px;
            justify-content:space-evenly;
            margin-right:7vw;
        }

        .navbar-brand{
            color:white;
        }
        .navbar-collapse{
            margin-top:15px;
            justify-content:flex-end;
            font-size:1.2em;
        }

        .nav-item{
            margin:10px 10px 10px 10px;
        }
      
        .link{
            text-decoration:none;
            color:white;
        }


        .hidden{
            background-image: linear-gradient(rgba(27, 34, 42,1), rgba(255,0,0,0));

        }

        .visible{
            background-color:rgba(27, 34, 42,1);
            animation-name: ${animationHeader};
            animation-duration: 1s;
            animation-timing-function: linear;
            animation-fill-mode: forwards;
        }


        .navbar-toggler-icon {
            background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255,255,255, 1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
        } 


    `
    const ImageStyled = styled.div`
    // Small devices (landscape phones, 576px and up)
    @media (max-width: 576px) { 
        .visible-logo{
            margin-left: 7vw;
            width: 16vw;
        }
        .hidden-logo{
            margin-left: 2vw;
            width: 25vw;
            }
    }

    @media (min-width: 576px) { 
        .visible-logo{
            margin-left: 7vw;
            width: 14vw;
        }
        .hidden-logo{
            margin-left: 2vw;
            width: 25vw;
            }
        }

    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) { 
        .visible-logo{
            margin-left: 7vw;
            width: 7vw;
        }
        .hidden-logo{
            margin-left: 2vw;
            width: 20vw;
            }
    }

    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) { 
        .visible-logo{
            margin-left: 7vw;
            width: 7vw;
        }
        .hidden-logo{
            margin-left: 2vw;
            width: 20vw;
            }
     }
    `




function NavigationBar() {
    const [classNav, setclassNav] = useState('hidden');
    const [classLogo, setclassLogo] = useState('hidden-logo');

    const handleAnimation = () => {       
        if (document.documentElement.scrollTop > 90) {           
            setclassNav('visible'); 
            setclassLogo('visible-logo'); 

           
        }else if(document.documentElement.scrollTop<=90){
            setclassNav('hidden')
            setclassLogo('hidden-logo')
            }
        };

        useEffect(()=>{
            window.onscroll = () =>handleAnimation();  
        })


    return (
 
        <Styles className= 'fixed-top'>
            <Navbar expand="lg" className={`${classNav}`}>
                <ImageStyled>
                    <Image
                    src={logo}
                    className={`${classLogo} d-inline-block align-top`}
                    alt="logo"
                    />
                </ImageStyled>
                 
                <Navbar.Toggle aria-controls="basic-navbar-nav" ></Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav.Item><Link className="link" to="/">Inicio</Link></Nav.Item>
                        <Nav.Item><Link className="link" to="/productos">Productos</Link></Nav.Item>
                        <Nav.Item><Link className="link" to="/empresa">La Empresa</Link></Nav.Item>
                        <Nav.Item><Link className="link" to="/contacto">Contáctenos</Link></Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Styles>

    )
}

export default NavigationBar

