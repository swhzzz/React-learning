import React from 'react'

class Loop extends React.Component {
    render() {
        return (
            <ul>{[1, 2, 3, 4].map((number, index) =>
                <li key={index}>{number}</li>
            )}</ul>
        )
    }
}

export default Loop