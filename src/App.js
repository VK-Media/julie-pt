import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRecipes, fetchPages } from './store/effects'
import { fetchFooter, fetchHeader, fetchPrices } from './store/actions'
import './App.scss'
import Routes from './routes'

const App = () => {
    const dispatch = useDispatch()
    const pages = useSelector(state => state.pages)

    useEffect(() => {
        dispatch(fetchPages())
        dispatch(fetchHeader())
        dispatch(fetchFooter())
        dispatch(fetchPrices())
        dispatch(fetchRecipes())
    }, [dispatch])

    return pages.length ? <Routes/> : null
}

export default App
