import React from "react";
import { Link } from 'react-router-dom'


class NavbarInstance extends React.Component {
  render() {
    return (
      <div>
        <ul>
            <h2>Mirror Image Car-Spa & Detail Shop</h2>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/BasicShine'>BasicShine</Link></li>
            <li><Link to='/PremiumShine'>PremiumShine</Link></li>
            <li><Link to='/UltimateShine'>UltimateShine</Link></li>
            <li><Link to='/Unlimited'>Unlimited</Link></li>
            <li><Link to='/Login'>Login</Link></li>
        </ul>
      </div>
    );
  }
}

export default NavbarInstance;
