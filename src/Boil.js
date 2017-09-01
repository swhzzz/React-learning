import React from 'react'
import BoilingVerdict from './BoilingVerdict'

class Boil extends React.Component{
    state={
        value: '',
        temperature: ''
    }
    // currentTemp = if(this.state.tempature>=100){
    //     return <p><
    //
    // }

    handleChange = (event)=>{
        this.setState({value: event.target.value})
    }

    render(){
        return (
            <fieldset>
                <legend>Input a number: </legend>
                <input type="text" value={this.state.value} onChange={this.handleChange}/>
                <BoilingVerdict currentTemp={this.state.value} />
            </fieldset>
        )
    }
}

export default Boil;