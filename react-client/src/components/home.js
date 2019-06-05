import React from "react";

class Home extends React.Component {

  render() {
    return (
      <div>
       {/* <img className= "x" src="./resources/maybach.jpg" alt="black_linconlContinnental"/> */}
          <header className="site-header grid-flex">
            <div className="logo-area"><a className="logo" href="/"></a>
              <h1 className="special-header"><span>Random City</span>CrossFit</h1>
            </div>
          </header>
          <section className="dark grid-flex section-about">
            <div className="grid-1-3">
              <h2>Hello!</h2>
              <p> Mirror Car Wash uses cleaning components and methods that help conserve the environment.
                  We understand the importance of water conservation and provide service that avoids the damage that cleaning agents can cause to our water system.</p>
              <p><a className="button" href="#what-we-do">👩🏽‍🏫 Learn More</a></p>
            </div>
            <div className="grid-1-3">
              <h2>What is CrossFit?</h2>
              <p>High-intensity workouts based on functional movements. It combines the best aspects of gymnastics, weightlifting, running, rowing, and more.</p>
              <p><a className="button" href="https://www.youtube.com/watch?v=tzD9BkXGJ1M" data-popup="1">▶️ Watch Video</a></p>
            </div>
            <div className="grid-1-3">
              <h2>Wanna join?</h2>
              <p>We have a flat-rate monthly fee of $129 which allows you to come to unlimited classNamees.</p>
              <p><a className="button" href="#0">💪🏽 Sign Up</a></p>
            </div>
          </section>
          <section className="grid-grid section-what-we-do" id="what-we-do">
            <h2 className="h1 special-header"><span>The Things </span>That We Do</h2>
            <div className="do do-weights">
              <p><strong>Weightlifting. </strong>Weights are a core part of CrossFit. We do a lot of olympic-style lifting with a barbell, like cleans and jerks. Deadlifts, squats, and presses are also fundamental.</p>
            </div>
            <div className="do do-kettlebells">
              <p><strong>Kettlebells. </strong>Russian & American swings. Turkish get-ups. Full snatches!</p>
            </div>
            <div className="do do-jumprope">
              <p><strong>Jumprope. </strong>Jumping rope is a great warm-up, but can be part of a workout too. We level up to double (or even triple!) unders.</p>
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
                    <td>5:30 AM</td>
                    <td>5:30 AM</td>
                    <td>5:30 AM</td>
                    <td>5:30 AM</td>
                    <td>5:30 AM</td>
                    <td rowspan="4">9:00 AM</td>
                    <td rowspan="4">None</td>
                  </tr>
                  <tr>
                    <td>10:00 AM</td>
                    <td>10:00 AM</td>
                    <td>10:00 AM</td>
                    <td>10:00 AM</td>
                    <td>10:00 AM</td>
                  </tr>
                  <tr>
                    <td>4:30 PM</td>
                    <td>4:30 PM</td>
                    <td>4:30 PM</td>
                    <td>4:30 PM</td>
                    <td>4:30 PM</td>
                  </tr>
                  <tr>
                    <td>6:30 PM</td>
                    <td>6:30 PM</td>
                    <td>6:30 PM</td>
                    <td>6:30 PM</td>
                    <td>6:30 PM</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
      </div>
    );
  }
}

export default Home;
