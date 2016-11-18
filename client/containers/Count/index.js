'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions'

import style from './style.css'


class Count extends Component {
    constructor(props) {
        super(props)
        this.addHandle = this.addHandle.bind(this)
        this.subHandle = this.subHandle.bind(this)
        this.delayHandle = this.delayHandle.bind(this)
        this.sagaHandle = this.sagaHandle.bind(this)
    }

    addHandle() {
        this.props.increment(parseInt(this.props.number))
    }

    subHandle() {
        this.props.decrement(parseInt(this.props.number))
    }

    delayHandle() {
        this.props.delayIncrement(parseInt(this.props.number))
    }

    sagaHandle() {
        this.props.sagaRequest()
    }

    render() {
        const { count } = this.props
        return (
            <div>
                <h1 className={style.red}>
                    { count }
                    <p className={style.good}>Hello</p>
                </h1>
                <button onClick={this.addHandle}>add</button>
                <button onClick={this.subHandle}>sub</button>
                <button onClick={this.delayHandle}>delay</button>
                <button onClick={this.sagaHandle}>delay</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        count : state.count
    }
}


export default connect(mapStateToProps, actions)(Count)