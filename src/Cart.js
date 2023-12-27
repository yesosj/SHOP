import React from 'react';
import {Table} from 'react-bootstrap';
import { connect, useDispatch, useSelector } from 'react-redux';

//import Table: export default 된거 가져오기
//import {Table}: Table이라는 변수/함수 가져오기.

function Cart(props){

    let state = useSelector((state)=> state)
    console.log(state.reducer)
    let dispatch = useDispatch();
    //왼쪽 state는 redux store에 있던 모든 데이터. 오른쪽은 return state. 따라서 이 자리에 state가 남음

    return(
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>변경</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.reducer.map((a,i)=>{
                            return(
                                <tr key={i}>
                                <td>{a.id}</td>
                                <td>{a.name}</td>
                                <td>{a.quan}</td>
                                <td><button onClick={()=>{dispatch({type : '수량증가', payload : a.id})}}>+</button></td>
                                <td><button onClick={()=>{dispatch({type : '수량감소', payload : a.id})}}>-</button></td>
                                </tr>
                            
                            //데이터 수정요청을 할 땐 props.dispatch()
                            //dispatch()로 수정요청할 때 데이터를 보낼 수도 있음. ) dispatch({type :  , payload : 보낼 데이터}).{}안의 값이 액션파라미터 임.
                    
                            )
                        })
                    }
                   {/* <tr>
                    <td>1</td>
                    <td>{props.state[0].name}</td>
                    <td>{props.state[0].quan}</td>
                    <td>Table cell</td>
                    </tr> */}
                    {/* 위처럼 반복문으로 바꾸기 */}
                </tbody>
                </Table>
                    { props.alert열렸니 === true
                    ?  <div className="my-alert2">
                            <p>지금 구매하시면 신규할인 20%</p>
                            <button onClick={()=>{dispatch({type : 'alert열렸니'})}}>닫기</button>
                        </div>
                    : null
                    }
                     {/* true && false; true && true; 첫번째는 false, 두번짼 true가 남음 근데 js에선 이상한 현상이 있음
                    true && '안녕'; false && '안녕'; 처럼 문자열을 넣으면 첫번짼 '안녕'이 두번짼 false가 나옴.
                    UI만들때 "만약에 이 변수가 참이면 <P></P>를 이 자리에 뱉고 참이 아니면 null 뱉고" 이런 패턴이 90%임.
                    따라서 이떄 &&연산자를 쓰면 됨. props.alert열렸니 === true && <p>지금 구매하시면 신규할일 20%</p>*/}
        </div>
    )
}
// function state를props화(state){
//     return{
//         state : state.reducer,
//         alert열렸니 : state.reducer2
//     }
// }
//redux store 데이터 가져와서 props로 변환해주는 함수
//왼쪽 state이라는 이름의 props로 바꿔주삼. 오른쪽 state는 store에있던 모든 데이터
//위 문법보다 state꺼내쓰는 더 쉬운 방법. useSelector()
// export default connect(state를props화)(Cart)


//컴포넌트에서 store에 있는 state쓰려면 1. function 만들기 
// 2.export default connect()() 3.store데이터를 props로 등록하기

//redux 쓰는 이유 
//1.깊은 하위컴포넌트들도 props여러번 전송없이 state를 직접 갖다쓸 수 있음
//2. state 데이터 관리가능(redux에선 state데이터의 수정이 간편하여 state 에러추적 용이.)



export default Cart;

