import React from 'react'

import './Heading.scss'

export default ({ content, className }) => {
    const text = content.settings.text
    const HeadingTag = content.settings.tag ? content.settings.tag : 'h1'

    const getClass = () => {
        let classes = 'component heading '

        if(content.settings.alignment){
            classes += content.settings.alignment
        } else {
            classes += 'left'
        }

        if(className){
            classes += ' ' + className
        }

        return classes
    }

    if (text !== '') return <HeadingTag className={ getClass() }>{text}</HeadingTag>

    return null
}

