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
        this.handleClick = this.handleClick.bind(this)
    }

    changeNumber(newNumber) {
        this.setState({
            number : newNumber
        })
    }

    handleClick() {
        if (!this.props.users.isFetching) {
            this.props.fetchUser()
        }
    }


    render() {
        const { count, increment, decrement, delayIncrement, users } = this.props
        return (
            <div>
                <TextInput number={this.state.number} changeNumber={this.changeNumber} />    
                <Count {...this.props} number={this.state.number} />
                <button onClick={this.handleClick}>获取用户</button>
                {users.isFetching && <div>isLoading...</div>}
                <ul>
                    { users.users.map((user, index) => <li key={index}>{user.name}</li>) }
                </ul>
                {users.error && <h2>{users.error}</h2>}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        count : state.count,
        users : state.users
    }
}



export default connect(mapStateToProps, actions)(App)