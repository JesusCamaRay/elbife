import React from 'react'
import Figure from 'react-bootstrap/Figure'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import Container from 'react-bootstrap/Container'


const Styles=styled(Container)`
    background-color:#ede8de;
    border-radius: 10px;
    display:flex;
    flex-direction:column;

    align-items:center;
    padding:10px 10px 10px 10px;

    .link{
        text-decoration:none;
        color: white;
    }
    .h3{
        text-align:center;
    }
    
`


function MeatContainer(props) {
    const { title,caption,image,link,button} = props;


    return (
        <Styles fluid>
        <Figure>    
            <Figure.Image
                alt="image"
                src={require(`../assets/images/${image.toLowerCase()}.jpg`)}
            />
            <h3 className="h3">{title}</h3>
            <Figure.Caption>
            {caption}
            </Figure.Caption>
        </Figure>
        <Link className="link" to={link}><Button variant="success">{button}</Button></Link>
        </Styles>
    )
}

export default MeatContainer
