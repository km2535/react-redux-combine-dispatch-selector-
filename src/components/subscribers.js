import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {ADD_SUBSCRIBER, REMOVE_SUBSCRIBER} from '../redux/subscribers/types';

const Subscribers = () => {
  const count = useSelector((state) => state.subscribers.count)
  const dispatch = useDispatch();
  const addSubscribe = () =>{
    dispatch({
      type : ADD_SUBSCRIBER
    })
  }
  const cancelSubscrib = () => {
    dispatch({
      type : REMOVE_SUBSCRIBER
    })
  }
return (
    <div className="items">
      <p>구독자 수 : {count}</p>
      <button onClick={addSubscribe}>구독하기</button>
      <button onClick={cancelSubscrib}>구독취소하기</button>
    </div>
  )
}

export default Subscribers;