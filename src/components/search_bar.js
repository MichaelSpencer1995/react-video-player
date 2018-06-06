import React, { Component } from 'react'

class SearchBar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            term: ''
        }
    }

    render() {
        return (
            <div>
                <input onChange={e => this.setState({term: e.target.value})} />
                Value of the input:<strong style={{ color: 'red' }}>{this.state.term}</strong>
            </div>
        )
    }
}

export default SearchBar