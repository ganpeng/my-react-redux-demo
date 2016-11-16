'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'

import Count from '../Count'
import TextInput from '../TextInput'

import * as actions from '../../actions'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            number : 2
        }
        this.changeNumber = this.changeNumber.bind(this)
    }

    changeNumber(newNumber) {
        this.setState({
            number : newNumber
        })
    }


    render() {
        const { count, increment, decrement, delayIncrement } = this.props
        return (
            <div>
                <TextInput number={this.state.number} changeNumber={this.changeNumber} />    
                <Count {...this.props} number={this.state.number} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        count : state.count
    }
}



export default connect(mapStateToProps, actions)(App)