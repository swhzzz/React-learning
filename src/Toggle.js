import React from 'react';

class Toggle extends React.Component{
    state= {
        isToggleOn: false,
    }
    change=()=>{
        // console.log(this)
        this.setState({
            isToggleOn: !this.state.isToggleOn
        })
    }
    render(){
        return <button onClick={this.change}>{this.state.isToggleOn?'on':'off'}</button>
    }
}

export default Toggle;