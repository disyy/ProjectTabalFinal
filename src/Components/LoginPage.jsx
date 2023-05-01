import React, { Component } from 'react'

 class LoginPage extends Component {
  render() {
    return (
        <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card" style={{ backgroundColor: "#f3edf6" }}>
              <div className="card-header text-center">
                <h4>Login to Power Fitness</h4>
              </div>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Password" />
                  </div>
                  <button type="submit" className="btn btn-primary">Login</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default LoginPage;