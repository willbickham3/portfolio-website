import React from 'react';
import { Link } from 'react-router-dom';

// Change the function names and links
// to fit your portfolio topic.

function Navigation() {
  return (
    <nav>
        {/* Add links to Home, Topics, Gallery, Contact, and Staff Pages  */}
        <Link to="/">Home</Link>
        <Link to="/topics">Topics</Link>
        <Link to="/achievements">Achievements</Link>
        {/* <Link to="/">Gallery</Link>
        <Link to="/">Contact</Link>
        <Link to="/">Staff</Link> */}
        
    </nav>
  );
}

export default Navigation;
