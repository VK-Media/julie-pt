import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Content from '../Content/Content'

class Page extends Component {
    componentDidMount = () => {
        if(this.props.page.landingpage){
            document.body.classList.add('landing-page')
        }
    }

    componentWillUnmount = () => {
        if (this.props.page.landingpage) {
            document.body.classList.remove('landing-page')
        }
    }

    renderContent = () => {
        return this.props.page.content.map((content, i) => {
            return <Content key={i} content={content} />
        })
    }

    renderPageTitle = () => {
        const title = this.props.page.seoTitle ? this.props.page.seoTitle : this.props.page.title
        return title + ' | Julie - personlig træner'
    }

    render(){
        return (
            <>
                <Helmet>
                    <title>{ this.renderPageTitle() }</title>
                    <meta name="description" content={ this.props.page.seoDescription } />
                </Helmet>

                <Header />
                <main>{this.renderContent()}</main>
                <Footer />
            </>
        )
    }
}

export default Page