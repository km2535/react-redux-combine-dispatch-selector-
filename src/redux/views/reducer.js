import {ADD_VIEW, ZERO_SET} from './types';

const initialState = {
  count : 0,
}

const viewReducer = (state = initialState, action) => {
  switch(action.type){
    case ADD_VIEW : 
      return {
        ...state, 
        count : state.count+1
      }
    case ZERO_SET : 
      return {
        count : 0
      }
    default : 
      return state;
  }
}

export default viewReducer;