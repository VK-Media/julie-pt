import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import _ from 'lodash'
import ReactGA from 'react-ga'

import './Button.scss'

const Button = ({ content, pages }) => {
    const text = content.settings.text
    const url = content.settings.url
    const linkedPage = content.settings.link
    let page = null
    const asset = content.settings.download
    const target = content.settings.target ? content.settings.target : '_top'
    let className = ['button']

    const handleClick = () => {
        ReactGA.event({
            category: 'Button',
            action: text
        });
    }

    if (content.settings.alignment){
        className.push(content.settings.alignment.toLowerCase())
    }

    if (!_.isEmpty(linkedPage)){
        page = _.find(pages, current => current._id === linkedPage._id)
    }

    if(text){
        if(url){
            return <div className={className.join(' ')}><Link to={url} onClick={() => handleClick()} target={target}>{text}</Link></div>
        } else if(page){
            return <div className={className.join(' ')}><Link to={page.title_slug} onClick={() => handleClick()} target={target}>{text}</Link></div>
        } else if(!_.isEmpty(asset)){
            const assetLink = `https://admin.julie-pt.dk/storage/uploads${asset.path}`
            return <div className={className.join(' ')}><a href={assetLink} onClick={() => handleClick()} target="_blank" rel="noopener noreferrer">{text}</a></div>
        }
    }

    return null
}

const mapStateToProps = state => {
    return {
        pages: state.pages
    }
}

export default connect(mapStateToProps, {})(Button)