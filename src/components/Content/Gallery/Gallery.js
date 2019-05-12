import React from 'react'

export default ({ content }) => {
    const text = content.settings.text

    if (text !== '') return <div dangerouslySetInnerHTML={{ __html: text }}></div>

    return null
}