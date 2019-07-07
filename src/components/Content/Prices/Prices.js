import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import _ from 'lodash'

import './Prices.scss'

const Prices = ({ content, prices, pages }) => {
    const renderPrices = () => {
        if(!content.settings.prices) return null

        return content.settings.prices.map(priceItem => {
            const fullPrice = _.find(prices, price => price._id === priceItem._id)
            
            if(fullPrice){
                const linkedPage = fullPrice.buttonLink
                let classes = ['price']

                if(fullPrice.onSale){
                    classes.push('campaign')
                }

                const renderButton = () => {
                    const buttonText = fullPrice.buttonText ? fullPrice.buttonText : fullPrice.name
                    let page = null

                    if (!_.isEmpty(linkedPage)) {
                        page = _.find(pages, current => current._id === linkedPage._id)
                    }

                    if(buttonText && page){
                        return <div className="button"><NavLink exact to={page.title_slug}>{buttonText}</NavLink></div>
                    }

                    return null                        
                }
                
                if(renderButton()){
                    classes.push('has-button');
                }

                return (
                    <div key={fullPrice._id} className={classes.join(' ')} >
                        <h3>{fullPrice.name}</h3>
                        <div className="teaser" dangerouslySetInnerHTML={{ __html: fullPrice.teaser }}></div>
                        <h4>{fullPrice.defaultPrice}</h4>
                        {renderButton()}
                    </div>
                )
            } else {
                return null
            }
        })
    }

    return (
        <div className="prices component">
            {renderPrices()}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        prices: state.prices,
        pages: state.pages
    }
}

export default connect(mapStateToProps, {})(Prices)

