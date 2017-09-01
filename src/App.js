import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Clock from './Clock'
// import {Button} from './Button'
// import Test from './Test'
// import Toggle from './Toggle'
// import If from './If'
// import LoginControl from './LoginControl'
// import Loop from './Loop'
// import Form from './Form'
// import TextArea from './TextArea'
// import Select from './Select'
import Boil from './Boil'

function App() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        {/*<Clock/>*/}
        {/*<Button/>*/}
        {/*<Test/>*/}
        {/*<Toggle/>*/}
        {/*<If sayHi="true"/>*/}
        {/*<LoginControl/>*/}
        {/*<Loop/>*/}
        {/*<Form/>*/}
        {/*<TextArea/>*/}
          {/*<Select/>*/}
          <Boil/>
      </div>
    );
}


export default App;
