import React from 'react'
import _ from 'lodash'

import Heading from '../Heading/Heading'
import Image from '../Image/Image'
import Text from '../Text/Text'
import Button from '../Button/Button'

import './TextWithImage.scss'

export default ({ content }) => {
    
    const renderImage = () => {
        const firstImage = _.find(content.children, child => child.component === 'image')
        
        if(firstImage){
            return <Image content={firstImage} />
        }

        return null
    }
    
    const renderHeading = () => {
        const firstHeading = _.find(content.children, child => child.component === 'heading')

        if(firstHeading) {
            return <Heading content={firstHeading} />
        }
            
        return null
    }

    const renderText = () => {
        const firstText = _.find(content.children, child => child.component === 'text')

        if(firstText){
            return <Text content={ firstText } />
        }

        return null
    }

    const renderButton = () => {
        const firstButton = _.find(content.children, child => child.component === 'button')

        if (firstButton) {
            return <Button content={firstButton} />
        }

        return null
    }

    return (
        <div className="text-with-image">
            { renderImage() }
            { renderHeading() }
            { renderText() }
            { renderButton() }
        </div>
    )
}