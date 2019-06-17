import React from 'react'
import { connect } from 'react-redux'

import './Button.scss'

const Button = ({ content }) => {
    const text = content.settings.text
    const url = content.settings.url
    const page = content.settings.link
    const asset = content.settings.download
    const target = content.settings.target ? content.settings.target : '_top'
    let className = ['button']

    if (content.settings.alignment){
        className.push(content.settings.alignment.toLowerCase())
    }

    if(text !== ''){
        if(url !== ''){
            return <div className={className.join(' ')}><a href={url} target={target}>{text}</a></div>
        } else if(page !== ''){
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