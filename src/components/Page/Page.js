import React from 'react'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'

export default ({ page }) => {
    console.log(page)
    return (
        <>
            <Header />

            <main>
                <h1>{page.title}</h1>
            </main>
            
            <Footer />
        </>
    )
}