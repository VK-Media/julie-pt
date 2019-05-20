import React from 'react'
import { connect } from 'react-redux'

import './Footer.scss'

const Footer = ({ footer }) => {
    const renderFooterContent = () => ({ __html: footer.content })

    return (
        <footer dangerouslySetInnerHTML={ renderFooterContent() }></footer>
    )
}

const mapStateToProps = state => {
    return {
        footer: state.footer
    }
}

export default connect(mapStateToProps, {})(Footer)