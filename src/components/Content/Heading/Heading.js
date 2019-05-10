import React from 'react'

import './Heading.scss'

export default ({ content, className }) => {
    const text = content.settings.text
    const HeadingTag = content.settings.tag

    if (text !== ''){
        if (HeadingTag !== ''){
            return <HeadingTag className={ className }>{text}</HeadingTag>
        } else {
            return <h1 className="hero__content">{text}</h1>
        }
    }

    return null
}

