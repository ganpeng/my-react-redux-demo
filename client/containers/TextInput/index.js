'use strict'

import React, { Component } from 'react'

class TextInput extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.props.changeNumber(e.target.value)
    }

    render() {
        const { number } = this.props 
        return (
            <div>
                <input 
                    type="text"
                    placeholder="输入一个数字"     
                    onChange={this.handleChange}
                    value={number}
                />
            </div>
        )
    }
}

export default TextInput