import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

import './Header.scss'

import { toggleMenu } from '../../actions/'

const Header = ({ pages, header, toggleMenu, showMenu }) => {
    const renderNavLinks = () => {
        return pages.map(page => {
            if (page.showInMenu && !page.landingpage) {
                return <NavLink onClick={toggleMenu} key={page._id} activeClassName="active" exact to={'/' + page.title_slug}>{page.title}</NavLink>
            }

            return null
        })
    }

    const headerClass = showMenu ? 'd-f jc-sb ai-c active' : 'd-f jc-sb ai-c'

    const logoPath = header.logo ? 'http://localhost' + header.logo.path : null

    return (
        <header className={headerClass}>
            <NavLink id="main-logo" style={{ backgroundImage: "url(" + logoPath + ")" }} exact to="/"></NavLink>
            <div onClick={toggleMenu}><span></span><span></span><span></span></div>
            <nav>{renderNavLinks()}</nav>
            <div id="overlay"></div>
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