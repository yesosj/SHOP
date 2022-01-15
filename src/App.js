import React, {useState} from 'react';
import logo from './logo.svg';
import { Navbar, Container, Nav, NavDropdown, Jumbotron, Button, Tabs, Tab, Sonnet } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Data from './data';
import Detail from './Detail';


import {Link, Route, Switch} from 'react-router-dom';


function App() {

  let [shoes, shoes변경] = useState(Data);

  return (
    <div className="App">
         <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link><Link to="/">Home</Link></Nav.Link>
              <Nav.Link><Link to="/detail">Detail</Link></Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        
      <Switch>

      <Route exact path="/">

            <div className="jumbotron">
                <h1>20% Season Off</h1>
                <p>
                  this is a simple hero unit, a simple jumbotron-style component for calling.
                </p>
                <p>
                <Button variant="primary">Primary</Button>
                </p>
              </div>
              <div className="container">
              <div className="row">
                {/* 
                {
                shoes.map(function(a, i){
                  return(
                    <div className="col-md-4" key={i}>
                    <img src="https://codingapple1.github.io/shop/shoes[i].jpg" width="100%" alt="신발" />  
                    <h4>{shoes[i].title}</h4>
                    <p>{shoes[i].content} & {shoes[i].price}</p>
                </div>
                  )
                })
                } */}
                {
                shoes.map((a,i)=> {
                  return(
                    <Card shoes={a} i={i} key={i} />
                  )
                  
                })
                }
                {/* <Card shoes={shoes} />
                <Card shoes={shoes} />
                <Card shoes={shoes} /> */}
              </div>
            </div>
        
      </Route>

      {/* <Route  path="/detail">

              <Detail shoes={shoes}/>

      </Route> */}

      <Route path="/detail/:id">
        <Detail shoes={shoes}/>


      </Route>
                  
      <Route path="/:id">
          <div>아무거나 적었을 떄 이거 보여주셈</div>
      </Route>
      {/* /:id는 /모든 문자 와 동일 */}
      </Switch>
          {/* Switch 컴포넌트는 여러개가 맞아도 하나만 보여주세요 의미. 중복 매칭 허용 안함
           */}



    </div>

  
    //각 페이지마다 다른 html 파일이 아니다. (index.html하나만 있음) 내용ㅇ을 갈아치워서 다른페이지처럼 보여주는 것.
  );
}



function Card(props) {
  return(
    <div className="col-md-4">
      <img src={'https://codingapple1.github.io/shop/shoes' + (props.i + 1) +   '.jpg'} width="100%" alt="신발" />  
            <h4>{props.shoes.title}</h4>
            <p>{props.shoes.content} & {props.shoes.price}</p>
    </div>
  )
}

export default App;


