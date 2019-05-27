import React, {Component} from 'react';
import PropTypes from 'prop-types';
class TodoItem extends Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);//为该函数绑定父组件的作用域，this指向父组件
    }
    render(){
        const {test,content} = this.props;

        return(
            <div onClick={this.handleClick}>
                {test} - {content}
                </div>

        )
    }
    handleClick(){
        // const index = this.props.index;
        // const deleteItem = this.props.deleteItem;
        const {index, deleteItem} = this.props;
        deleteItem(index);//调用父组件的方法：deleteItem实际上是handleItemDelete
    }
}
//对属性类型进行强校验
TodoItem.propTypes = {
    index: PropTypes.number,
    content: PropTypes.string.isRequired,

};

//默认属性
TodoItem.defaultProps = {
    test: 'By Default'
};
export default TodoItem;