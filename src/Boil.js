import React from 'react'


class Boil extends React.Component{
    handleChange = (e)=>{
        // console.log('e.target.value is:'+e.target.value)
        this.props.handleChange(e.target.value)
    }

    render(){
        // console.log(this.props)
        return (
            <fieldset>
                <legend>Enter a temperature in {this.props.scale} </legend>
                <input type="text" value={this.props.currentTemp} onChange={this.handleChange} />
            </fieldset>
        )
    }
}

export default Boil;