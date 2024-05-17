import React from 'react';

const Login = () => {
  return (
    <div className="loginArea container mt-5">
      <div className='loginBody col-md-4'>
        <h2>Login</h2>
        <form>
            <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" />
            </div>
            <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" />
            </div>
            <button type="submit" className="loginbutton btn btn-primary">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
