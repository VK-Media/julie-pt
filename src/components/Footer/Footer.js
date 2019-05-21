import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

import './Footer.scss'

const Footer = ({ footer }) => {
    const renderLogo = () => {
        const logoPath = footer.logo ? 'http://localhost' + footer.logo.path : null
        
        if(logoPath){
            return <NavLink id="footer-logo" style={{ backgroundImage: "url(" + logoPath + ")" }} exact to="/"></NavLink>
        }
    }

    const renderContent = () => <div className="content" dangerouslySetInnerHTML={ { __html: footer.content} }></div>

    const renderSome = () => {
        const renderFacebook = () => {
            if(footer.facebook){
                return <a href={footer.facebook} rel="noopener noreferrer" target="_blank"><i className="fab fa-facebook-square"></i></a>
            }

            return null
        }

        const renderInstagram = () => {
            if(footer.instagram){
                return <a href={footer.instagram} rel="noopener noreferrer" target="_blank"><i className="fab fa-instagram"></i></a>
            }

            return null
        }

        return (
            <div className="some">
                {renderFacebook()}
                {renderInstagram()}
            </div>
        )
    }

    return (
        <footer>
            { renderLogo() }
            { renderContent() }
            { renderSome() }
        </footer>
    )
}

const mapStateToProps = state => {
    return {
        footer: state.footer
    }
}

export default connect(mapStateToProps, {})(Footer)