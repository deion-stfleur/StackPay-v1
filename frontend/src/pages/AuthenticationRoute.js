import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { supabase } from '../supabase';



const AuthenticatedRoute = ({ element, ...props }) => {
    const user = supabase.auth.user();
  
    return (
      <Route
        {...props}
        element={user ? <Navigate to="/" replace /> : element}
      />
    );
  };


  export default AuthenticatedRoute;