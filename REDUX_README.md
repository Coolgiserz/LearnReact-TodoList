## Redux工作流程
由Store保存组件的状态，数据的处理工作由Reducer完成。当用户激发某事件时，通过store.dispatch(action)方法将事件发送给store，store并不直接处理数据，而是将目前的状态以及action转发给Reducer处理，
Reducer处理完毕后返回新的状态给store，而后再进行组件的更新
### 示例
事件响应，将事件处理类型和对应的数据发给store
```jsx harmony
	handleInputChange(e){
    	const action = {
    		type:'change_input_value',
			value: e.target.value

		};
    	store.dispatch(action);
	}
```

Redux中store已经实现：当接收到action时自动将目前的store状态和action转发给Reducer

Reducer对数据进行修改返回新的state。需注意Reducer并不能直接修改接收到的state，而只能先对数据做拷贝，而后修改副本并返回修改后的副本
```jsx harmony
    if(action.type === 'change_input_value'){
        const newState = JSON.parse(JSON.stringify(state));//深拷贝state
        newState.inputvalue = action.value; //修改newstate
        return newState;
    }
```

Store检测到状态改变后调用回调函数
```jsx harmony
        this.handleStoreChange = this.handleStoreChange.bind(this);
        store.subscribe(this.handleStoreChange)//当store发生改变，回调函数handleStoreChange就会被调用
```

```jsx harmony
    /**
	 * store改变时执行此方法
     */
    handleStoreChange(){
		this.setState(store.getState());//将store中新的状态赋予该组件
	}
```