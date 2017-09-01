import React from 'react'

class Form extends React.Component {
    state = {
        value: ''
    }

    // handleChange = (event) => {
    //         this.setState({
    //             value: event.target.value.toUpperCase()
    //         })
    // }

    handleSubmit = (event) => {
        event.preventDefault()
        alert(this.state.value)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.value} onChange={this.handleChange}/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}


export default Form;