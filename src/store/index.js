import {createStore} from 'redux';//引用redux

import reducer from './reducer';//创建store时要引用reducer
//https://github.com/zalmoxisus/redux-devtools-extension
const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()//使用redux-develop tools
    );



export default store;//导出store