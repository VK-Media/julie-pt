import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Page from './components/Page/Page'

const Routes = () => {
    const pages = useSelector(state => state.pages)
    const recipes = useSelector(state => state.recipes)
    const [routes, setRoutes] = useState([])

    useEffect(() => {
        const pagesRoutes = pages.map(page => {
            page.path = `/${page.title_slug}`

            return page
        })

        const recipesRoutes = recipes.map(recipe => {
            recipe.path = `/opskrifter/${recipe.title_slug}`

            return recipe
        })

        const routes = pagesRoutes.concat(recipesRoutes)

        setRoutes(routes)
    }, [pages, recipes])

    const renderRoutes = () => {
        return routes.map(route => {
            if (route) {
                if (route.landingpage) {
                    return (
                        <Route
                            key={route._id}
                            path="/"
                            exact
                            render={() => <Page page={route}/>}
                        />
                    )
                }

                return (
                    <Route
                        key={route._id}
                        path={route.path}
                        exact
                        render={() => <Page page={route}/>}
                    />
                )
            }

            return null
        })
    }

    return <Router>{renderRoutes()}</Router>
}

export default Routes
