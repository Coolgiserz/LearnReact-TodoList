import React, {Component, Fragment} from 'react';//Fragment:占位符

import store from './store/index';
import axios from 'axios';
import {getInputChangeAction,getAddItemAction,getDeleteItemAction, getInitTodoItem} from './store/createActions'
import TodolistUI from './TodolistUI';
const data = [];
class Todolist extends Component{//JSX必须在最外层包一个元素
    constructor(props){ //固定写法
		super(props);
		this.state = store.getState();//取出store中的数据
		console.log('sss',this.state);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleItemSubmit = this.handleItemSubmit.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        store.subscribe(this.handleStoreChange)//当store发生改变，回调函数handleStoreChange就会被调用

	}

	//return后的内容若有多行，要用括号括起
	render(){
		return (
            <TodolistUI
				content = 'Hello world'
                value = {this.state.inputvalue}
                handleInputChange = {this.handleInputChange}
                handleItemSubmit = {this.handleItemSubmit}
                handleStoreChange = {this.handleStoreChange}
                handleItemDelete = {this.handleItemDelete.bind(this)}
                list = {this.state.list}
			/>


			)
	}

	componentDidMount(){
    	//ajax request for initilized data
		console.log('Did mount ');
        axios.get('/testapi.json')
			.then((res)=>{
				// 成功回调函数
				// console.log('res:', res);
				const data = res.data;
                const action = getInitTodoItem(data);
                store.dispatch(action);

            }
		).catch(()=>{
			//错误回调函数
		});
	}
    /**
	 * store改变时执行此方法
     */
    handleStoreChange(){
		this.setState(store.getState());//将store中新的状态赋予该组件
	}
    handleItemDelete(index){//点击后将数据从数组删除

		const action = getDeleteItemAction(index);
		store.dispatch(action);
	}

    /**
	 * 用户点击提交后，将输入框中的文本发送给store，由store转发给reducer处理
     */
    handleItemSubmit(){

        const action = getAddItemAction();

        store.dispatch(action);//派发action
	}


	handleInputChange(e){
        const action = getInputChangeAction(e.target.value);

    	store.dispatch(action);
	}
}
export default Todolist;//导出方能被引用