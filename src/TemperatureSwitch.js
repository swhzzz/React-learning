import React from 'react'
import Boil from './Boil'
import BoilingVerdict from './BoilingVerdict'

function convertFTempToCTemp(fTemp) {
    return (parseFloat(fTemp) - 32) * 5 / 9;
}

function convertCTempToFTemp(cTemp) {
    return (parseFloat(cTemp) * 9 / 5) + 32;
}

class TemperatureSwitch extends React.Component {
    state = {
        cTemperature: '',
        fTemperature: ''
    }

    handleCTempChange = (cTemp) => {
        console.log("cTemp is " + cTemp)
        const fTemp = convertCTempToFTemp(cTemp)
        // console.log('fTemp is '+fTemp,typeof fTemp)
        this.setState({cTemperature: cTemp})
        this.setState({fTemperature: fTemp})
    }

    handleFTempChange = (fTemp) => {
        // console.log(fTemp)
        const cTemp = convertFTempToCTemp(fTemp)
        this.setState({fTemperature: fTemp})
        this.setState({cTemperature: cTemp})
    }

    render() {

        return (
            <div>
                <Boil scale='Celsius' currentTemp={this.state.cTemperature} handleChange={this.handleCTempChange}/>
                <Boil scale='Fahrenheit' currentTemp={this.state.fTemperature} handleChange={this.handleFTempChange}/>
                <BoilingVerdict currentTemp={this.state.cTemperature}/>
            </div>
        )
    }
}

export default TemperatureSwitch;


