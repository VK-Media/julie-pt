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
        return this.props.pages ? <Routes /> : null
    }
}

const mapStateToProps = state => {
    return {
        pages: state.pages
    }
}

export default connect(mapStateToProps, { fetchPages, fetchHeader, fetchFooter, fetchPrices })(App)
