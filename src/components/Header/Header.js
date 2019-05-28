import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Transition from 'react-transition-group/Transition'

import './Header.scss'

import { toggleMenu } from '../../actions/'

const Header = ({ pages, header, toggleMenu, showMenu, landingpage, isScrolled }) => {
    const renderNavLinks = () => {
        return pages.map(page => {
            if (page.showInMenu && !page.landingpage) {
                return <NavLink onClick={toggleMenu} key={page._id} activeClassName="active" exact to={'/' + page.title_slug}>{page.title}</NavLink>
            }

            return null
        })
    }

    const renderLogoPath = () => {
        const baseUrl = 'http://admin.julie-pt.dk/'
        let logoPath

        if (!landingpage) {
            if (isScrolled) {
                logoPath = header.logoLight ? baseUrl + header.logoLight.path : null
            } else {
                logoPath = header.logoDark ? baseUrl + header.logoDark.path : null
            }
        } else {
            logoPath = header.logoLight ? baseUrl + header.logoLight.path : null
        }

        if (showMenu) {
            logoPath = header.logoLight ? baseUrl + header.logoLight.path : null
        }

        return logoPath

    }

    const headerClass = showMenu ? 'd-f jc-sb ai-c active' : 'd-f jc-sb ai-c'

    return (
        <header className={headerClass}>
            <NavLink id="main-logo" style={{ backgroundImage: "url(" + renderLogoPath() + ")" }} exact to="/"></NavLink>
            <div onClick={toggleMenu}><span></span><span></span><span></span></div>
            <Transition in={showMenu} timeout={200}>
                {state => <nav className={state}>{renderNavLinks()}</nav>}
            </Transition>
            <Transition in={showMenu} timeout={200}>
                {state => <div className={state} id="overlay"></div>}
            </Transition>
        </header>
    )
}

const mapStateToProps = state => {
    return {
        pages: state.pages,
        header: state.header,
        showMenu: state.showMenu
    }
}

export default connect(mapStateToProps, { toggleMenu })(Header)