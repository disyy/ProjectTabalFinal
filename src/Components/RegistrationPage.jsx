import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';

 class RegistrationPage extends Component {
  render() {
    return (
        <div className="container" >
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5" >
            <div className="card my-5" style={{ backgroundColor: "#f3edf6" }}>
              <div className="card-body">
                <h2 className="card-title text-center mb-4">Register for Power Fitness</h2>
                <form>
                  <div className="mb-3">
                    <label htmlFor="firstName" className="form-label">First Name</label>
                    <input type="text" className="form-control" id="firstName" placeholder="Enter your first name" required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="lastName" className="form-label">Last Name</label>
                    <input type="text" className="form-control" id="lastName" placeholder="Enter your last name" required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter your email address" required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Enter your password" required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm your password" required />
                  </div>
                  <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-primary btn-lg">Register</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default RegistrationPage;
