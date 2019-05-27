const defaultState = {
    inputvalue: 'test input',
    list: ['emmmm?','aaaaaaa']
};//默认数据,由reducer来管理

/**
 * reducer负责管理整个应用的数据，由defaultState设置默认数据
 * @param state
 * @param action
 * @returns {{inputvalue: string, list: string[]}}
 */
export default (state = defaultState,action)=>{
    return(
        state
    )
}