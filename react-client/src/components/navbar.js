import React from "react";
import { Link } from 'react-router-dom'


class NavbarInstance extends React.Component {
  render() {
    return (
      <div>
        <ul>
            <h2>Majestic Shine</h2>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/BasicShine'>Basic</Link></li>
            <li><Link to='/PremiumShine'>Basic</Link></li>

            
        </ul>
      </div>
    );
  }
}

export default NavbarInstance;

