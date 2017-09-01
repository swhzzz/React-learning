import React from 'react'

class Test extends React.Component{
    constructor(props){
        super(props)
        console.log('constructor is called')
    }
    componentWillMount(){
        console.log('componentWillMount is called')
    }
    render(){
        console.log('render is called')
        return <h1>This is a test</h1>;
    }
    componentDidMount(){
        console.log('componentDidMount is called')
    }
}




export default Test;