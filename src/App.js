import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { getFromLocalStorage } from './utils/localStorageUtils';
import './styles/App.css';
import Form from './components/Form/Form';
import LoginForm from './components/LoginForm/LoginForm';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

const App = () => {
  const user = getFromLocalStorage('user');
  
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          
          <Route
            path="/main"
            element={
              <ProtectedRoute element={<Form />} isAuthenticated={!!user} />
            }
          />
          
          <Route
            path="/"
            element={<Navigate to={user ? '/main' : '/login'} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
