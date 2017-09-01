import React from 'react'

class If extends React.Component{
    constructor(props){
        super(props)
        this.state={
            xx: props.sayHi
        }
    }
    render(){
        if(this.state.xx){
            return <div>Hi.</div>
        }else{
            return <div>No Hi.</div>
        }
    }
}

export default If;