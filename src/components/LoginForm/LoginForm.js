
import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';
import styles from './LoginForm.module.css';

const LoginForm = () => {
  const [error, setError] = useState('');
  const navigate = useNavigate();  

  
  const handleLogin = (values) => {
    
    if (values.username === 'admin' && values.password === 'password') {
      
      localStorage.setItem('user', JSON.stringify(values));
      navigate('/main'); 
    } else {
      setError('Invalid credentials'); 
    }
  };

  return (
    <Formik
      initialValues={{ username: '', password: '' }}
      onSubmit={handleLogin} 
    >
      <Form className={styles.loginForm}>
        <h2>Login</h2>

        <div className={styles.inputContainer}>
          <label htmlFor="username">Username</label>
          <Field 
            type="text" 
            id="username" 
            name="username" 
            className={styles.inputField} 
          />
          <ErrorMessage name="username" component="div" className={styles.error} />
        </div>

        <div className={styles.inputContainer}>
          <label htmlFor="password">Password</label>
          <Field 
            type="password" 
            id="password" 
            name="password" 
            className={styles.inputField} 
          />
          <ErrorMessage name="password" component="div" className={styles.error} />
        </div>

        {error && <div className={styles.errorMessage}>{error}</div>}

        <button type="submit" className={styles.submitButton}>Login</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
