import React from 'react';
import { Link } from 'react-router';
import './MenuItem.css';

const MenuItem = (props) => {
  return (
    <li className="MenuItem"><Link onClick={props.handleClick} to={props.to} activeClassName="active">{props.children}</Link></li>
  )
}

export default MenuItem;