import React from 'react'
import {Route, Redirect} from 'react-router-dom'

const ProtectedRoute = ({component: Component, ...rest}) => {
  return (
    <Route
    {...rest}
    render={props => {
      if(localStorage.getItem('companytoken')) {
        return <Component {...props}/>
      } else {
        return <Redirect to='/company-login'/>
      }
    }}
    />
    
  )
}

export default ProtectedRoute
