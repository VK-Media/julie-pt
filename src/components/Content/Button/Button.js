import React from 'react'

import './Button.scss'

export default ({ content }) => {
    const text = content.settings.text
    const url = content.settings.url
    const target = content.settings.target ? content.settings.target : '_top'
    const className = content.settings.alignment ? 'button ' + content.settings.alignment.toLowerCase() : 'button'

    if (text !== '' && url !== '') return <div className={className}><a href={url} target={target}>{text}</a></div>

    return null
}