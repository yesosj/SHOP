import React, {useState, useContext} from 'react';
import logo from './logo.svg';
import { Navbar, Container, Nav, NavDropdown, Jumbotron, Button, Tabs, Tab, Sonnet } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Data from './data';
import Detail from './Detail';
import styled from 'styled-components'; //수많은 컴포넌트로 인해 css짜기가 복잡해서
import axios from 'axios';
import {useHistory, Link, Route, Switch, useNavigate, Outlet} from 'react-router-dom';
import Cart from './Cart.js';

export let 재고context = React.createContext();
//같은 변수값을 공유할 범위 생성. 그 이름은 재고context.

function App() {

  let [shoes, shoes변경] = useState(Data);
  let [재고,재고변경] = useState([10,11,12]);

  return (
    <div className="App">
    <Navbar bg="light" expand="lg">
   <Container>
     <Navbar.Brand href="/">ShoeShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/detail/0">Detail</Nav.Link>
              {/* <Nav.Link onClick={()=>{navigate('/detail')}}>Detail</Nav.Link>
              link to 가 못생겼으면 useNavigate 써도 됨. 더 유용. */}
              {/* useNavigate() 쓰면 그 자리에 유용한 함수가 남습니다. 페이지 이동시켜주는 함수입니다.
              그럼 이제 navigate('/detail') 이런 코드가 실행되면 /detail 페이지로 이동가능합니다
              navigate(2) 숫자넣으면 앞으로가기, 뒤로가기 기능개발도 가능합니다.
              -1 넣으면 뒤로 1번 가기
              2 넣으면 앞으로 2번 가기 기능입니다.  */}

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
                <Button variant="primary">Learn more</Button>
                </p>
              </div>
              <div className="container">

              <재고context.Provider value={재고}>
       

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
                    //메인페이지 상품을 누르면 각각 상세페이지로 이동해야함.
                    //<컴포넌트>엔 onClick부여 ㄴㄴ, Card컴포넌트 안에다가 달기.
                  })
                  }
                  {/* <Card shoes={shoes} />
                  <Card shoes={shoes} />
                  <Card shoes={shoes} /> */}
                </div>
              </재고context.Provider>
           
            
            <button className="btn btn-primary" onClick={()=>{

              // axios.post('서버URL', {id : 'codingapple', pw : 1234});
              //

              axios.get('https://codingapple1.github.io/shop/data2.json')
              .then((result)=>{
                console.log(result.data);
                shoes변경([...shoes, ...result.data]);
              })//ajax요청 성공시
              .catch(()=>{
                console.log('실패했어요')
              });//실패시
            }}>더보기</button>
             </div>
      </Route>

      {/* <Route  path="/detail">

              <Detail shoes={shoes}/>

      </Route> */}
{/* 
유저가 이상한 경로로 접속했을 때 "없는 페이지입니다" 이런거 보여주고 싶으면

 

<Route path="*" element={ <div>없는페이지임</div> } />
<Route path="*"> 하나 맨 밑에 만들어두면 됩니다.

* 경로는 모든 경로를 뜻해서

위에 만들어둔 /detail 이런게 아닌 이상한 페이지 접속시 * 경로로 안내해줍니다.  */}

{/* 3. 서브경로 만들 수 있는 nested routes

 

/about/member로 접속하면 회사멤버 소개하는 페이지

/about/location으로 접속하면 회사위치 소개하는 페이지

를 만들고 싶으면 어떻게 합니까. 

 

<Route path="/about/member" element={ <div>멤버들</div> } />
<Route path="/about/location" element={ <div>회사위치</div> } />
이렇게 만들어도 되겠지만

 

 

<Route path="/about" element={ <About/> } >  
  <Route path="member" element={ <div>멤버들</div> } />
  <Route path="location" element={ <div>회사위치</div> } />
</Route>
이렇게 만들어도 됩니다.

 

<Route>안에 <Route>를 넣을 수 있는데 이걸 Nested routes 라고 부릅니다.

저렇게 쓰면

/about/member로 접속시 <About> &<div>멤버들</div> 을 보여줍니다.

/about/location으로 접속시 <About> & <div>회사위치</div> 을 보여줍니다.

진짜 보이는지 <About>컴포넌트 하나 만들어서 확인해봅시다.  */}

{/* Q. <div>는 안보이는데요

 

실은 위처럼 코드짜면 

/about/member로 접속시 <About>안에 <div>멤버들</div> 을 보여줍니다.

그래서 <About> 컴포넌트 안에 <div>를 어디다 보여줄지 표기해야 잘보여줍니다. 

 

<Route path="/about" element={ <About/> } >  
  <Route path="member" element={ <div>멤버들</div> } />
  <Route path="location" element={ <div>회사위치</div> } />
</Route>
function About(){
  return (
    <div>
      <h4>about페이지임</h4>
      <Outlet></Outlet>
    </div>
  )
}
위에서 import해온 <Outlet>은 nested routes안의 element들을 어디에 보여줄지 표기하는 곳입니다. 

그래서 이렇게 해두면 

/about/member로 접속시 <Outlet>자리에 아까의 <div> 박스들이 잘 보입니다. 

그래서 유사한 서브페이지들이 많이 필요하다면 이렇게 만들어도 됩니다.

 

 

방금 만든거 보면 페이지 url을 바꿀 때 마다 각각 다른 UI를 보여주는데

이것도 동적인 UI 만드는 방법 중 하나입니다.

그래서 라우터써도 동적인 UI 만들 수 있습니다.

라우터쓰면 뒤로가기 버튼을 이용가능하다는 장점이 있을듯요  */}





      <Route path="/detail/:id"> 

        <재고context.Provider value={재고}>
           <Detail shoes={shoes} 재고={재고} 재고변경={재고변경}/>
        </재고context.Provider>

      </Route>

      <Route path="/cart">
        <Cart></Cart>

      </Route>

                  
      <Route path="/:id">
          <div>아무거나 적었을 떄 이거 보여주셈</div>
      </Route>
      {/* /:id는 /모든 문자 와 동일 */}
      </Switch>
          {/* Switch 컴포넌트는 여러개가 맞아도 맨 위 하나만 보여주세요 의미. 중복 매칭 허용 안함
           */}
    </div>

           //페이지 혹은 반복되는 내용 많을 때 만드는 법 => 1. 각각의 다른 컴포넌트 100만개 만들기. 2. 하나의 컴포넌트로 각각 다른 내용 보여주기.
    //각 페이지마다 다른 html 파일이 아니다. (index.html하나만 있음) 내용을 갈아치워서 다른페이지처럼 보여주는 것.
  );
}



function Card(props) {

  let 재고 = useContext(재고context);
  let history = useHistory();

  
  return(
    <div className="col-md-4" onClick={()=>{history.push('/detail/'+ props.shoes.id)}}>
      <img src={'https://codingapple1.github.io/shop/shoes' + (props.shoes.id + 1) +   '.jpg'} width="100%" alt="신발" />  
            <h4>{props.shoes.title}</h4>
            <p>{props.shoes.content}</p> <p>Price : {props.shoes.price}</p>

      <Test/>
    </div>
  )
}
function Test(){
  let 재고 = useContext(재고context);
  return <p>Stock : {재고[0]}</p>
}


export default App;

//Ajax 서버에 새로고침(1,2 할때마다 항상 새로고침이 됨) 없이 요청을 할수 있게 도와줌.
//1. GET요청 : 주소창에 URL때려박는 요청(특정페이지/자료읽기) 
//2. POST요청 : 서버로 중요 정보 전달(로그인시)
//Ajax 쓰는 법 1. jQuery->$ajax() 2. axios->axios.get()//Vue,React에서 3. 쌩자바스크립트->fetch()
//axios는 JSON형식을 Object로 알아서 바꿔주므로 fetch보다 좋음.


//context만들기(app에 있는 재고 state를 card안의 컴포넌트에 데이터바인딩하려면?->props대신 context쓰기)
//1.React.createContext()로 범위생성. 2.같은 값을 공유할 html을 <범위.Provider>로 감싸고 value={공유원하는 값} 3. useContext(범위이름)로 공유된 값 사용하기.
//이 문법 편한가? 노노 props가 제일 편함. (저는 그냥 컴포넌트 많이 안만들어서 props씁니다.)
//(Redux라는 라이브러리 : 모든 컴포넌트파일들이 같은 겂을 공유할수있는 저장공간 생성가능)

//App.js이런데다가 가짜 데이터 하나 만들기. <App>-><Cart> props 전송?(귀찮음)
//그럴 때 redux를 쓰기.장점 1. props없이 모든 컴포넌트가 state를 갖다쓰기 가능

//DB편
//새로고침하면 js파일도 첨부터 다시 읽기 때문에 장바구니추가해도 새로고침/재접속하면 초기화됨.
//STATE데이터를 기억하게 하려면 1.서버에 보내서 DB에 저장 2. 브라우저 임시저장공간에 저장(LOCALSTORAGE)
//LocalStorage는 브라우저를 꺼도 저장가능 . Session Storage는 끄면 사라짐. 텍스트 5MB정도
//문법 3개. 1. 자료저장 : 콘솔창에 (자료이름, 자료값.) localStorage.setItem('name', 'Kim') 
// 2. 자료출력 : localStorage.getItem('name') 3. 자료삭제 : localStorage.removeItem('name')
//localStorage에 object자료를 저장하려면 -그냥 넣으면 깨짐(object자료를 강제로 글로 바꾸면 깨짐)/배열도 깨짐.->localStorage는 문자혹은 숫자만 저장가능하므로
//따라서 obj를 저장할땐 .setItem('obj', JSON.stringify({name:'kim'})) 로 따옴표쳐서 JSON만들기. -JSON.stringify()
//꺼내려면 JSON형식을 다시 제거해야함. var a = localStorage.getItem('obj'), JSON.parse(a)로 따옴표 제거하기.
