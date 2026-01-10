import React from 'react';

function Auth() {
  return (
    <div className="container py-5">
      <h1>Login</h1>
      <form className="mt-4" style={{maxWidth: '400px', margin: '0 auto'}}>
        <div className="mb-3">
          <input type="email" className="form-control" placeholder="Email" />
        </div>
        <div className="mb-3">
          <input type="password" className="form-control" placeholder="Password" />
        </div>
        <button type="submit" className="btn btn-primary w-100">Login</button>
      </form>
    </div>
  );
}

export default Auth;
