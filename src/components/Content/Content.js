import React from 'react'

import Hero from './Hero/Hero'
import Grid from './Grid/Grid'
import Heading from './Heading/Heading'
import Text from './Text/Text'

export default ({ content }) => {
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
        default:
            return null
    }
}