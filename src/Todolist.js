import React, {Component, Fragment} from 'react';//Fragment:占位符
import './style.css';
import TodoItem from './TodoItem';
class Todolist extends React.Component{//JSX必须在最外层包一个元素
	//使用Todolist时，构造函数优先执行
	constructor(props){ //固定写法
		super(props);
		this.state = {//组件状态
			inputvalue: '?',//输入框中的内容，要将其与输入框绑定
			list: []
		};
	}

	//return后的内容若有多行，要用括号括起
	render(){
		return (
			<Fragment>
                <label htmlFor="insertArea">输入内容</label>

				<input
					id="insertArea"
					className='input'
					value={this.state.inputvalue}
					onChange={this.handleInputChange.bind(this)}
				/>
				<button onClick={this.handleButtonClick.bind(this)}>提交</button>
				<ul>
					{
						this.state.list.map((item,index)=>{
							{/*绑定删除功能*/}                {/*不转义html*/}

                            return(
                            	<li>
									<TodoItem content={item} index={index} deleteItem={this.handleItemDelete.bind(this)}/>
								</li>
							)

					})
					}
				</ul>
			 </Fragment>
			)
	}
    handleItemDelete(index){//点击后将数据从数组删除
		const list = [...this.state.list];//...是展开运算符，此操作拷贝了一份数据
		list.splice(index,1);//删除下标为index的list，splice
		console.log(index);
		this.setState({
			list: list
		});
	}
    handleButtonClick(e){
		this.setState({
			list: [...this.state.list,this.state.inputvalue],
			inputvalue:''
		});
	}
	handleInputChange(e){
		console.log(this);
		this.setState({
			inputvalue: e.target.value
		});
		//不对的写法this.state.inputvalue = e.target.value;//这种写法不对！此时this为undefine而不是Todolist的组件
		console.log(e.target.value);

	}
}
export default Todolist;//导出方能被引用