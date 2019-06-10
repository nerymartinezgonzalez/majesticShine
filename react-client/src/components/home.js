import React from "react";
import Footer from './footer.js';

class Home extends React.Component {

    render() {
    return (
        <div>
          <section className="dark grid-flex section-about">
            <div className="grid-1-3">
              <h2>Hello!</h2>
              <p> Mirror Image Car-Spa uses cleaning components and methods that help conserve the environment.
                  We understand the importance of water conservation and provide service that avoids the damage that cleaning agents can cause to our water system.</p>
              <p><a className="button" href="#what-we-do">👩🏽‍🏫 Learn More</a></p>
            </div>
            <div className="grid-1-3">
              <h2>Excellence in car care!</h2>
              <p>We believe in paying uncompromising attention to all the details. Our method of protection and beautification of your vehicle is second to none. No matter what type of vehicle you have or what type of service you need, our technicians have the training and expertise to provide your vehicle with unparalleled protection and beauty. Our equipment, and products have been carefully developed and are proven to be the absolute finest in the industry. </p>
              <p><a className="button" href="https://www.youtube.com/watch?v=eoeJsw08Afc" data-popup="1">▶️ Watch Video</a></p>
            </div>
            <div className="grid-1-3">
              <h2>Wanna join?</h2>
              <p>We have a flat-rate monthly fee of $129 which allows you to come to unlimited classNamees.</p>
              <p><a className="button" href="#0">💪🏽 Sign Up</a></p>
            </div>
          </section>
          <section className="grid-grid section-what-we-do" id="what-we-do">
            <h2 className="h1 special-header"><span>The Products</span>That We Use</h2>
            <div className="do do-weights">
            </div>
            <div className="do do-kettlebells">
            </div>
            <div className="do do-jumprope">
            </div>
            <div className="do do-rings">
              <p><strong>Rings. </strong>A ring muscle-up is the goal. Ring rows are also a stepping stone to pull ups. </p>
            </div>
          </section>
          <section className="dark">
            <h2 className="h1 special-header special-header-inline"> <span>Weekly</span>Schedule</h2>
            <div className="table-wrap">
              <table className="schedule">
                <thead>
                  <tr>
                    <th>Monday</th>
                    <th>Tuesday</th>
                    <th>Wednesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                    <th>Saturday</th>
                    <th>Sunday</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>8:00 AM</td>
                    <td>8:00 AM</td>
                    <td>8:00 AM</td>
                    <td>8:00 AM</td>
                    <td>8:00 AM</td>
                    <td rowSpan="4">8:00 AM</td>
                    <td rowSpan="4">None</td>
                  </tr>
                  <tr>
                    <td>12:00 AM</td>
                    <td>12:00 AM</td>
                    <td>12:00 AM</td>
                    <td>12:00 AM</td>
                    <td>12:00 AM</td>
                  </tr>
                  <tr>
                    <td>Lunch</td>
                    <td>Lunch</td>
                    <td>Lunch</td>
                    <td>Lunch</td>
                    <td>Lunch</td>
                  </tr>
                  <tr>
                    <td>1:00 PM</td>
                    <td>1:00 PM</td>
                    <td>1:00 PM</td>
                    <td>1:00 PM</td>
                    <td>1:00 PM</td>
                  </tr>
                  <tr>
                    <td>8:00 PM</td>
                    <td>8:00 PM</td>
                    <td>8:00 PM</td>
                    <td>8:00 PM</td>
                    <td>8:00 PM</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
          <Footer />
      </div>
    );
  }
}
export default Home;
