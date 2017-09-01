import React from 'react'
class Clock extends React.Component {
    state={
        date: new Date()
    }
    componentDidMount(){
            this.timer = setInterval(()=>{
            this.setState({
                date: new Date()
            })
        },1000)
    }
    componentWillUnmount(){
        clearInterval(this.timer)
    }
    render(){
        return <div>Time is: {this.state.date.toLocaleTimeString()}</div>
    }
}

export default  Clock;