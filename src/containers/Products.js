import React from 'react';
import Container from 'react-bootstrap/Container';
import HeaderPresentation from '../components/HeaderPresentation';
import Cow from '../components/Cow';
import Pig from '../components/Pig';
import Mutton from '../components/Mutton';
import Poultry from '../components/Poultry';
import Nav from 'react-bootstrap/Nav'
import {Route,  Link} from 'react-router-dom'
import MeatNav from '../components/MeatNav'



function Products({ match }) {
 
    return (
            <>
            <HeaderPresentation title="Nuestras Carnes" description="Los Mejores y más Sabrosos Cortes"/>
            <Nav variant="tabs" className="justify-content-center">
                <Nav.Item>
                    <Nav.Link ><Link to={`${match.url}/res`}>Carne de Res</Link></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1"><Link to={`${match.url}/cerdo`}>Carne de Cerdo</Link></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2"><Link to={`${match.url}/cordero`}>Carne de Cordero</Link></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-3"><Link to={`${match.url}/ave-corral`}>Carne de Aves</Link></Nav.Link>
                </Nav.Item>
            </Nav>
            <MeatNav/>
  
            <Route exact path={`${match.path}`} component={Cow}/>
            <Route path={`${match.path}/res`} component={Cow}/>
            <Route path={`${match.path}/cerdo`} component={Pig}/>
            <Route path={`${match.path}/cordero`} component={Mutton}/>
            <Route path={`${match.path}/ave-corral`} component={Poultry}/> 
            </>
    )
}

export default Products
