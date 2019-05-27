import React, {Component, Fragment} from 'react';//Fragment:占位符
import 'antd/dist/antd.css'
import {Input, Button, List} from 'antd';

/**
 * antd 中 Input、Button、List等组件的基本使用
 * https://ant.design/components/list-cn/
 * @type {string[]}
 */
const data = [
    'CSU',
    'HNU',
    'QNU',
];
class Todolist extends React.Component{//JSX必须在最外层包一个元素
	//使用Todolist时，构造函数优先执行

    constructor(props){ //固定写法
		super(props);
		this.state = {//组件状态
			inputvalue: '生活艰难',//输入框中的内容，要将其与输入框绑定
			list: []
		};

		//======把bind放在构造函数完成，性能更好
        this.handleInputChange=this.handleInputChange.bind(this);
        this.handleButtonClick=this.handleButtonClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
	}

	//return后的内容若有多行，要用括号括起
	render(){
		const inputvalue = this.state.inputvalue;
		return (
			<Fragment>
				<div>
				<Input
					placeholder='To do'
					style={{width : '300px' , marginLeft:'10px'}}
				/>
					<Button type='primary'>提交</Button>
				</div>
                <List
                    size="small"
                    header={<div>Header</div>}
                    footer={<div>Footer</div>}
                    bordered
                    dataSource={data}
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