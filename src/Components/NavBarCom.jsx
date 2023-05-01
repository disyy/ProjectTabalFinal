import React, { Component } from 'react';
import'bootstrap/dist/css/bootstrap.css';

export default class NavbarComp extends Component {
  render() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#f3edf6" }}>
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src="https://image.similarpng.com/very-thumbnail/2021/07/Fitness-Gym-logo-design-template-on-transparent-background-PNG.png" width="30" height="30" class="d-inline-block align-top" alt="logo"/>
            Power Fitness
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/homepage">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">About</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Services
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Web Development</a></li>
                  <li><a class="dropdown-item" href="#">Mobile App Development</a></li>
                  <li><hr class="dropdown-divider"/></li>
                  <li><a class="dropdown-item" href="#">Digital Marketing</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/login">Login</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/Registration">Register</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
