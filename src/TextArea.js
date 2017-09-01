import React from 'react'

class TextArea extends React.Component{
    state={
        value: 'Hello bro!'
    }
    handleChange = (event)=>{
        this.setState({
            value: event.target.value
        })
    }

    render(){
        return (
            <textarea value={this.state.value} onChange={this.handleChange} />
        )
    }
}


export default TextArea;