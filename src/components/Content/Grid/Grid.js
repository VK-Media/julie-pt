import React from 'react'

import Content from '../Content'

import './Grid.scss'

export default ({ content }) => {
    const columnCount = content.columns.length
    const gridClass = `grid columns-${columnCount} p-lr-2`

    const renderColumns = () => {
        return content.columns.map((column, i) => {
            return <div key={i} className="grid__item">{ renderChildren(column) }</div>
        })
    }

    const renderChildren = column => {
        return column.children.map((child, i) => {
            return <Content key={i} content={child} />
        })
    }

    return <div className={ gridClass }>{ renderColumns() }</div>
}