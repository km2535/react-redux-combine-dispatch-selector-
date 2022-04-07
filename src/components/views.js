import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {ADD_VIEW, ZERO_SET} from '../redux/views/types';

const Views = () => {
  const count = useSelector((state) => state.views.count)
  const dispatch = useDispatch();
  const addSubscribe = () =>{
    dispatch({
      type : ADD_VIEW
    })
  }
  const zeroset = () =>{
    dispatch({
      type: ZERO_SET
    })
  }
  
return (
    <div className="items">
      <p>조회 수 : {count}</p>
      <button onClick={addSubscribe}>조회하기</button>
      <button onClick={zeroset}>초기화</button>
      
    </div>
  )
}

export default Views;