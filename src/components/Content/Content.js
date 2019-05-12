import React from 'react'

import Hero from './Hero/Hero'
import Grid from './Grid/Grid'
import Heading from './Heading/Heading'
import Text from './Text/Text'
import Image from './Image/Image'
import Gallery from './Gallery/Gallery.js'
import Button from './Button/Button.js'

export default ({ content }) => {
    console.log(content)
    switch (content.component) {
        case 'section':
            const type = content.settings.type.toLowerCase()

            switch (type) {
                case 'hero':
                    return <Hero content={content} />
                default:
                    return null
            }
        case 'grid':
            return <Grid content={content} />
        case 'heading':
            return <Heading content={content} />
        case 'text':
            return <Text content={content} />
        case 'image':
            return <Image content={content} />
        case 'gallery':
            return <Gallery content={content} />
        case 'button':
            return <Button content={content} />
        default:
            return null
    }
}