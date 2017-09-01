import React from 'react'

class Button extends React.Component{
    state = {
        count: 0
    };
    increment=()=>{
        this.setState({
            count: this.state.count +1
        })
    }
    componentWillMount(){
        console.log('componentWillMount is called')
    }
    componentDidMount(){
        console.log('componentDidMount is called')
        this.setState({
            count: this.state.count +1
        })
    }
    componentWillReceiveProps(){
        console.log('componentWillReceiveProps is called')
    }
    shouldComponentUpdate(){
        console.log('shouldComponentUpdate is called')
        return true
    }
    componentWillUpdate(){
        console.log('componentWillUpdate is called')
    }
    componentDidUpdate(){
        console.log('componentDidUpdate is called')
    }
    render(){
        console.log('render is called....')

        return <button onClick={this.increment}>{this.state.count}</button>
    }
}

export default Button;