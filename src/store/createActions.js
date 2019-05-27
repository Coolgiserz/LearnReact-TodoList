import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_TODO_ITEM} from './actionTypes';//从actionTypes中导入action的类型

//统一管理action创建器
export const getInputChangeAction = (value)=>({
    type: CHANGE_INPUT_VALUE,
    value
});

export const getAddItemAction = ()=>({
    type: ADD_TODO_ITEM
});

export const getDeleteItemAction = (index)=>({
    type: DELETE_TODO_ITEM,
    index
});