import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_TODO_ITEM} from './actionTypes';

const defaultState = {
    inputvalue: '',
    list: []
};//默认数据,由reducer来管理

/**
 * reducer负责管理整个应用的数据，由defaultState设置默认数据
 * 1. Reducer必须是一个纯函数，在输入确定的情况下， 输出是唯一确定的
 * 2。 Reducer不能更改store中的state，state只能由store自身修改
 * @param state
 * @param action
 * @returns {{inputvalue: string, list: string[]}}
 */
//retucer可以接收state，但不能修改state
export default (state = defaultState,action)=>{
    console.log(state,action);
    if(action.type === CHANGE_INPUT_VALUE){
        const newState = JSON.parse(JSON.stringify(state));//深拷贝state
        newState.inputvalue = action.value; //修改newstate
        return newState;
    }
    if(action.type === ADD_TODO_ITEM){//添加项
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputvalue);//向列表新增一项
        newState.inputvalue = '';
        return newState;//将最新的状态返回给store
    }
    if(action.type === DELETE_TODO_ITEM){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index,1);//删除newState中的数据
        return newState;

    }
    return(
        state
    )
}