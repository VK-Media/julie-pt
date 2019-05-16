import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchPages, fetchHeader, fetchFooter, fetchPrices } from './actions'
import './App.scss'
import Routes from './routes'

class App extends Component {
    componentDidMount() {
        this.props.fetchPages()
        this.props.fetchHeader()
        this.props.fetchFooter()
        this.props.fetchPrices()
    }

    render() {
        return <Routes />
    }
}

export default connect(null, { fetchPages, fetchHeader, fetchFooter, fetchPrices })(App)
