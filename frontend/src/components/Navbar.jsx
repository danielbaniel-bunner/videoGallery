import {
  Outlet,
  Link,
  useLoaderData,
} from "react-router-dom";

export function Navbar() {
    return (
      <nav className='navbar'>
        <div className="nav-btn-container">
          <Link to='/'><button className="nav-btn">Gallery</button></Link> 
          <Link to='/upload'><button className="nav-btn">Upload</button></Link>
          
        </div>
      </nav>
  );
}