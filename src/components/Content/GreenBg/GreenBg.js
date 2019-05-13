import React from 'react'

import Content from '../Content'

import './GreenBg.scss'

export default ({ content }) => {
    const renderChildren = () => {
        return content.children.map((child, i) => {
            return <Content key={i} content={child} />
        })
    }

    return (
        <section className="green-bg">
            { renderChildren() }
        </section>
    )
}