import { Spinner } from 'flowbite-react'
import PropTypes from 'prop-types'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthProvider'

function ProtectedRoute({ children }) {
    const { user, loading } = useContext(AuthContext)
    
    if (loading) {
        return <div className="flex justify-center items-center min-h-screen"><Spinner size="xl"/></div>
    }
    if (user) {
        return children
    }
    
    return <Navigate to="/login" />
    
}

ProtectedRoute.propTypes = {
    children: PropTypes.node
}

export default ProtectedRoute
