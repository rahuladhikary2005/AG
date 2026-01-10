import React, { useState } from 'react';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="container py-5" style={{ maxWidth: '500px' }}>
      <div className="card shadow">
        <div className="card-body">
          <h3 className="text-center text-danger mb-4">{isLogin ? 'Login' : 'Register'}</h3>

          {/* Login Form */}
          {isLogin ? (
            <form>
              <div className="mb-3">
                <label>Email address</label>
                <input type="email" className="form-control" placeholder="Enter email" required />
              </div>
              <div className="mb-3">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" required />
              </div>
              <button type="submit" className="btn btn-danger w-100">Login</button>
            </form>
          ) : (
            // Register Form
            <form>
              <div className="mb-3">
                <label>Full Name</label>
                <input type="text" className="form-control" placeholder="Enter your name" required />
              </div>
              <div className="mb-3">
                <label>Email address</label>
                <input type="email" className="form-control" placeholder="Enter email" required />
              </div>
              <div className="mb-3">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Create password" required />
              </div>
              <button type="submit" className="btn btn-danger w-100">Register</button>
            </form>
          )}

          {/* Toggle Link */}
          <p className="text-center mt-3">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <button className="btn btn-link p-0 ms-1" onClick={toggleForm}>
              {isLogin ? 'Register' : 'Login'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
