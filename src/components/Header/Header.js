import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Transition from 'react-transition-group/Transition'
import _ from 'lodash'

import './Header.scss'

import { toggleMenu } from '../../store/actions/'

const Header = ({ pages, header, toggleMenu, showMenu, landingpage, isScrolled }) => {
    const renderNavLinks = () => {
        if(!_.isEmpty(header.menu)){
            return header.menu.map(page => {
                const fullPage = _.find(pages, statePage => statePage._id === page._id)

                if(!_.isEmpty(fullPage)){
                    return <NavLink onClick={toggleMenu} key={fullPage._id} activeClassName="active" exact to={'/' + fullPage.title_slug}>{fullPage.title}</NavLink>
                }

                return null
            })
        }

        return null
    }

    const renderLogo = () => {
        const baseUrl = 'https://admin.julie-pt.dk/'
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

        if(logoPath) return <NavLink id="main-logo" style={{ backgroundImage: "url(" + logoPath + ")" }} exact to="/"></NavLink>

        return null
    }

    const headerClass = showMenu ? 'd-f jc-sb ai-c active' : 'd-f jc-sb ai-c'

    return (
        <header className={headerClass}>
            { renderLogo() }
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
