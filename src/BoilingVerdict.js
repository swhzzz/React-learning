import React from 'react'

class BoilingVerdict extends React.Component {
    render() {
        // console.log(this.props.currentTemp);
        if (this.props.currentTemp>= 100) {
            return <p>The water is boiling</p>
        }else {
            return <p>The water is not boiling</p>
        }
    }
}

// function BoilingVerdict(props) {
//     if (props.currentTemp >= 100) {
//         return <p>The water is boiling</p>
//     } else {
//         return <p>The water is not boiling</p>
//     }
// }


export default BoilingVerdict;