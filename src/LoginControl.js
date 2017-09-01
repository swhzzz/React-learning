import React from 'react'

class LoginControl extends React.Component{
    constructor(props){
        super(props)
        this.state={
            isLoginOn: false
        }
    }
    switchToLogOut=()=>{
        this.setState({
            isLoginOn: false
        })
    }

    switchToLogIn=()=>{
        this.setState({
            isLoginOn: true
        })
    }

    render(){
        const isLoginOn = this.state.isLoginOn
        console.log(isLoginOn)
        if(isLoginOn){
            // console.log(this.state.isLoginOn)
            return (<div>
                <div>Welcome bro!</div>
                <button onClick={this.switchToLogOut}>{isLoginOn?'logOut':'logIn'}</button>
            </div>)
        }else {
            // console.log(this.state.isLoginOn)
            return (<div>
                <div>Sign up please.</div>
                <button onClick={this.switchToLogIn}>{isLoginOn?'logOut':'logIn'}</button>
            </div>)
        }
    }
}

export default LoginControl;