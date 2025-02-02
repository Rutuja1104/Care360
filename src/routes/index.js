import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { AUTH_PROTECTED_ROUTES, OPEN_PUBLIC_ROUTES, PUBLIC_ROUTES } from './allRoutes'
import { AuthProtected, FullPageRoute } from './authProtected'
import VerticalLayout from '../layouts/index'
import DataLoader from '../libs/dataloader/DataLoader'

const index = () => {

    return (
        <React.Fragment>
            <Routes>
                {PUBLIC_ROUTES.map((route, idx) => {
                    return (
                        <Route
                            path={route.path}
                            key={idx}
                            element={
                                <FullPageRoute>
                                    {route.component}
                                </FullPageRoute>
                            }
                        />
                    )
                })}

                {AUTH_PROTECTED_ROUTES.map((route, idx) => {
                    const { path, component, ...rest } = route
                    return (
                        <Route
                            key={idx}
                            exact={true}
                            path={path}
                            element={
                                <AuthProtected {...rest}>
                                    <DataLoader>
                                        <VerticalLayout>
                                            {component}
                                        </VerticalLayout>
                                    </DataLoader>
                                </AuthProtected>
                            }
                        />
                    )
                })}

                {OPEN_PUBLIC_ROUTES.map((route, idx) => {
                    const { path, component } = route;
                    return (
                        <Route
                            key={idx}
                            exact={true}
                            path={path}
                            element={
                                <DataLoader>{component}</DataLoader>
                            }
                        />
                    );
                })}

            </Routes>
        </React.Fragment>
    )
}

export default index
