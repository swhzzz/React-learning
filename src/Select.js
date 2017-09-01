import React from 'react'

class Select extends React.Component {
    state = {
        value: 'run'
    }
    handleChange = (event) => {
        this.setState({
            value: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        alert(this.state.value)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="swim">swim</option>
                        <option value="drink">drink</option>
                        <option value="run">run</option>
                    </select>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default Select