import React from 'react'
import Figure from 'react-bootstrap/Figure'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'
import styled from 'styled-components'


const Styles=styled.div`
    background-color:#ede8de;
    border-radius: 10px;
    margin:20px 20px;
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


function ProductMeatContainer(props) {
    const { title,caption,image,link} = props;


    return (
        <Styles>
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
        <Link className="link" to={link}><Button variant="success">VER CORTES</Button></Link>
        </Styles>
    )
}

export default ProductMeatContainer