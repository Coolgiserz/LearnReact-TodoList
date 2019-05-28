import React, {Fragment} from 'react';
import 'antd/dist/antd.css'
import {Input, Button, List} from 'antd';
const TodolistUI = (props)=>{
    return(
        <Fragment>
            <div>
                <Input
                    value={props.inputvalue}
                    placeholder='To do'
                    style={{width : '300px' , marginLeft:'10px'}}
                    onChange={props.handleInputChange}
                />
                <Button type='primary' onClick={props.handleItemSubmit}>提交</Button>
            </div>
            <List

                size="small"
                bordered
                style={{width:'320px', marginLeft:'10px'}}
                dataSource={props.list}
                renderItem={(item,index) => <List.Item onClick={(index)=>props.handleItemDelete(index)}>{item}</List.Item>}
            />
        </Fragment>
    )
};

export default TodolistUI;