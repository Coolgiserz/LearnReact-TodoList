import React, {Component, Fragment} from 'react';//Fragment:占位符
import 'antd/dist/antd.css'
import {Input, Button, List} from 'antd';
import store from './store/index';
import {getInputChangeAction,getAddItemAction,getDeleteItemAction} from './store/createActions'
import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_TODO_ITEM} from './store/actionTypes';//从actionTypes中导入action的类型
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
			<Fragment>
				<div>
				<Input
					value={this.state.inputvalue}
					placeholder='To do'
					style={{width : '300px' , marginLeft:'10px'}}
					onChange={this.handleInputChange}
				/>
					<Button type='primary' onClick={this.handleItemSubmit}>提交</Button>
				</div>
                <List

                    size="small"
                    bordered
					style={{width:'320px', marginLeft:'10px'}}
                    dataSource={this.state.list}
                    renderItem={(item,index) => <List.Item onClick={this.handleItemDelete.bind(this.index)}>{item}</List.Item>}
                />
			 </Fragment>
			)
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