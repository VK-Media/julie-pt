import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import _ from 'lodash'
import './Button.scss'

const Button = ({ content }) => {
    const pages = useSelector(state => state.pages)
    const text = content.settings.text
    const url = content.settings.url
    const linkedPage = content.settings.link
    let page = null
    const asset = content.settings.download
    const target = content.settings.target ? content.settings.target : '_top'
    let className = ['button']

    if (content.settings.alignment) {
        className.push(content.settings.alignment.toLowerCase())
    }

    if (!_.isEmpty(linkedPage)) {
        page = _.find(pages, current => current._id === linkedPage._id)
    }

    if (text) {
        if (url) {
            return <div className={className.join(' ')}><Link to={url} target={target}>{text}</Link></div>
        } else if (page) {
            return <div className={className.join(' ')}><Link to={page.title_slug} target={target}>{text}</Link></div>
        } else if (!_.isEmpty(asset)) {
            const assetLink = `https://admin.julie-pt.dk/storage/uploads${asset.path}`
            return <div className={className.join(' ')}><a
                href={assetLink}
                target="_blank"
                rel="noopener noreferrer"
            >{text}</a></div>
        }
    }

    return null
}

export default Button
