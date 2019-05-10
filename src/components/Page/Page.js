import React from 'react'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Content from '../Content/Content'

export default ({ page }) => {
    const renderContent = () => {
        return page.content.map((content, i) => {
            return <Content key={i} content={content} />
        })
    }

    return (
        <>
            <Header />
            <main>{ renderContent() }</main>
            <Footer />
        </>
    )
}