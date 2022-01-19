import React, { Component } from 'react'
import spinner from './spinner.gif'

export class Loadspinner extends Component {
    render() {
        return (
            <div className='text-center'>
                <img src={spinner} alt="spin" />
            </div>
        )
    }
}
export default Loadspinner