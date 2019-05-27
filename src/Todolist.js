import React, {Component, Fragment} from 'react';//Fragment:占位符
import 'antd/dist/antd.css'
import {Input, Button, List} from 'antd';
import store from './store/index';
const data = [];
class Todolist extends Component{//JSX必须在最外层包一个元素
    constructor(props){ //固定写法
		super(props);
		this.state = store.getState();//取出store中的数据
		console.log('sss',this.state);
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
				/>
					<Button type='primary'>提交</Button>
				</div>
                <List
                    size="small"
                    bordered
					style={{width:'320px'}}
                    dataSource={this.state.list}
                    renderItem={item => <List.Item>{item}</List.Item>}
                />
			 </Fragment>
			)
	}
	//在此生命周期函数中做ajax请求
	componentDidMount(){

	}
    handleItemDelete(index){//点击后将数据从数组删除

	}
    handleButtonClick(e){

	}

	getToDoItem(){

	}
	handleInputChange(e){

	}
}
export default Todolist;//导出方能被引用