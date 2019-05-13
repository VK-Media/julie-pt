import React from 'react'

import './Heading.scss'

export default ({ content, className }) => {
    const text = content.settings.text
    const HeadingTag = content.settings.tag

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

    if (text !== ''){
        if (HeadingTag !== ''){
            return <HeadingTag className={ getClass() }>{text}</HeadingTag>
        } else {
            return <h1 className="hero__content">{text}</h1>
        }
    }

    return null
}

