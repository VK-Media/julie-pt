import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

import './Button.scss'

const Button = ({ content, pages }) => {
    const text = content.settings.text
    const url = content.settings.url
    const linkedPage = content.settings.link
    let page = null
    const asset = content.settings.download
    const target = content.settings.target ? content.settings.target : '_top'
    let className = ['button']

    if (content.settings.alignment){
        className.push(content.settings.alignment.toLowerCase())
    }

    if (linkedPage !== ''){
        page = _.find(pages, current => {
            console.log(current)
            console.log(linkedPage)
            return current._id === linkedPage._id
        })
    }

    if(text !== ''){
        if(url !== ''){
            return <div className={className.join(' ')}><a href={url} target={target}>{text}</a></div>
        } else if(page){
            return <div className={className.join(' ')}><a href={page.title_slug} target={target}>{text}</a></div>
        } else if(asset !== ''){
            console.log(asset)
            return <div className={className.join(' ')}><a href="https://google.dk" download target={target}>{text}</a></div>
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