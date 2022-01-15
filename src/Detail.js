import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';


function Detail(props) {
  const params = useParams();
  const [id, setID] = useState(params.id);

  // useParams를 쓰자마자 그 자리에는 {}가 남고 그 안에는 {사용자가 입력한 URL파라미터들} 이 있고 그걸 id에 저장한 것
  //만약, detail/2를 입력하면 id는 2가 됌.
  let history = useHistory();
  //방문기록을 저장해놓은 object

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
        </div>
        <div className="col-md-6 mt-4">

          <h4 className="pt-5">{props.shoes[id].title}</h4>
          <p>{props.shoes[id].content}</p>
          <p>{props.shoes[id].price}원</p>
          {/* shoes를 다시 선언안하고 굳이 전송해야하는 이유는 중요한 데이터는 app안에 보관하는 게 좋기 때문 */}
          <button className="btn btn-danger" onClick={() => { history.goBack() }}>뒤로가기</button>
          {/*  history.push('/')와 동일 */}
          <button className="btn btn-danger">주문하기</button>

        </div>
      </div>
    </div>
  )
};

export default Detail;