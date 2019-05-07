import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

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
        <header>
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