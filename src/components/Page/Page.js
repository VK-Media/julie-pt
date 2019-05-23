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

        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount = () => {
        if (this.props.page.landingpage) {
            document.body.classList.remove('landing-page')
        }

        window.removeEventListener('scroll', this.handleScroll);
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

    renderPageUrl = () => {
        const baseUrl = 'http://localhost/vk-cockpit/'
        return baseUrl + this.props.page.title_slug
    }

    renderOGImage = () => {
        if(this.props.page.seoImage.path){
            return <meta property="og:image" content={ 'http://localhost' + this.props.page.seoImage.path } />
        }
    }

    handleScroll = event => {
        const scrollTop = document.documentElement.scrollTop
        const _class = 'scrolled'
        const hasClass = document.body.classList.contains(_class)

        if (scrollTop > 60) {
            if(!hasClass) {
                document.body.classList.add('scrolled')
            }
        } else {
            if(hasClass) {
                document.body.classList.remove('scrolled')
            }
        }
    }

    render(){
        return (
            <>
                <Helmet>
                    <title>{ this.renderPageTitle() }</title>
                    <meta name="description" content={ this.props.page.seoDescription } />
                    <meta property="og:title" content={ this.renderPageTitle() } />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content={ this.renderPageUrl() } />
                    <meta property="og:description" content={this.props.page.seoDescription } />
                    { this.renderOGImage() }
                </Helmet>

                <Header />
                <main>{this.renderContent()}</main>
                <Footer landingpage={this.props.page.landingpage} />
            </>
        )
    }
}

export default Page