import React, {Component, Fragment} from 'react';
import './style.css'
class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            show: true
        };

    }
    render(){
        return(
            <Fragment>
                <div className={this.state.show?'show':'hide'}>hello css</div>
                <button onClick={this.handleClick.bind(this)}>toggle</button>
            </Fragment>
        )
    }
    handleClick(){
        this.setState({
            show: this.state.show?false:true
        })
    }
}

export default App;