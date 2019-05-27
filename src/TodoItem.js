import React, {Component} from 'react';

class TodoItem extends Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);//为该函数绑定父组件的作用域，this指向父组件
    }
    render(){
        const {content} = this.props;

        return(
            <div onClick={this.handleClick}>
                {this.props.content}

                </div>

        )
    }
    handleClick(){
        this.props.deleteItem(this.props.index);//调用父组件的方法：deleteItem实际上是handleItemDelete
    }
    // deleteItem(){
    //     alert(this.props.index);
    //     // this.handleDeleteItem()
    // }

}

export default TodoItem;