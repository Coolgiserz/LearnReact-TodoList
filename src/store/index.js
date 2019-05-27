import {createStore} from 'redux';//引用redux

import reducer from './reducer';//创建store时要引用reducer
const store = createStore(reducer);



export default store;//导出store