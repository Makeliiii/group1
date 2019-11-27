import React, { Component } from 'react'

// import approuter
import AppRouter from './AppRouter/AppRouter'
import Nav from './Nav/Nav'

class Main extends Component {
    constructor() {
        super()
        this.state = {
            data: [],
            isLoading: true
        }
    }

    // fetch all live trains
    componentDidMount() {
        // fetch trains and stations
        fetch('https://rata.digitraffic.fi/api/v1/trains')
            .then(res => res.json())
            .then(data => {
                this.setState({ data: data, isLoading: false })
            })
    }

    render() {
        if (this.state.isLoading) {
            return "Loading..."
        }

        return (
            <div>
                <Nav />
                <h1>Train Tracker</h1>
                <AppRouter 
                    data={this.state.data} 
                />
            </div>
            
        )
    }
}

export default Main