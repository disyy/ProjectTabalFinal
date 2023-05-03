import React, { Component } from 'react'


 class HomePage extends Component {
  render() {
    return (

      <div className="homebg" style={{backgroundColor: "#BDCDD6",  fontFamily: 'Spot'}} >
        <div className="container" >
        <div className="jumbotron">
          <h1 className="display-4">Welcome to my Fitness Website</h1>
          <p className="lead">Get fit and healthy with our expert tips and personalized plans.</p>
          <hr className="my-4" />
          <p>Join us today and start your journey towards a healthier, happier you!</p>
          <a className="btn btn-primary btn-lg" href="#" role="button">Join Now</a>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img src="https://source.unsplash.com/1600x900/?fitness,workout" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Fitness Programs</h5>
                <p className="card-text">We offer a variety of fitness programs for all levels and interests, including yoga, HIIT, strength training.</p>
                <a href="#" className="btn btn-primary">Learn More</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="https://source.unsplash.com/1600x900/?healthy,eating" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Healthy Eating</h5>
                <p className="card-text">Our nutrition experts can help you create a healthy eating plan that fits your lifestyle and goals.</p>
                <a href="#" className="btn btn-primary">Learn More</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="https://source.unsplash.com/1600x900/?fitness,mindfulness" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Mind and Body</h5>
                <p className="card-text">Take care of your mental health and well-being with our mindfulness and meditation classes.</p>
                <a href="#" className="btn btn-primary">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}
export default HomePage;