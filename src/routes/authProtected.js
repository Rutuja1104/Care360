import React from 'react'
import { Navigate } from 'react-router-dom'

const AuthProtected = ({ children }) => {
    const token = localStorage.getItem('token')

    if (!token) {
        return <Navigate to="/login" replace />
    }

    return children
}

const FullPageRoute = ({ children }) => {
    const token = localStorage.getItem('token')
    if (token) {
        return <Navigate to="/dashboard" />
    }

    return children
}

export { AuthProtected, FullPageRoute }
