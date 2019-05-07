import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

import './Header.scss'

const Header = ({ pages, header }) => {
    const renderNavLinks = () => {
        return pages.map(page => {
            if (page.showInMenu && !page.landingpage){
                return <NavLink key={page._id} activeClassName="active" exact to={ '/' + page.title_slug }>{ page.title }</NavLink>
            }
            
            return null
        })
    }

    return (
        <header className="d-f jc-sb ai-c">
            <NavLink id="main-logo" style={{backgroundImage: "url('http://localhost/cockpit-master/storage/uploads/2019/05/03/5ccc0e9c4f6c1march.png')"}} exact to="/"></NavLink>
            <div id="toggle-menu"></div>
            <nav>{ renderNavLinks() }</nav>
        </header>
    )
}

const mapStateToProps = state => {
    return {
        pages: state.pages,
        header: state.header
    }
}

export default connect(mapStateToProps, {})(Header)