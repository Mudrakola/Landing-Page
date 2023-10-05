import './index.css'

const Navbar = () => (
  <nav className="nav-container">
    <ul className="nav-list-container">
      <li className="items">
        <a href="#booking" className="item">
          Booking
        </a>
      </li>
      <li className="items">
        <a href="#facilities" className="item">
          Facilities
        </a>
      </li>
      <li className="items">
        <a href="#about" className="item">
          About Us
        </a>
      </li>
      <li className="items">
        <a href="#location" className="item">
          Location
        </a>
      </li>
      <li className="items">
        <a href="#contact" className="item">
          Contact
        </a>
      </li>
    </ul>
    <button type="button" className="button">
      Login
    </button>
  </nav>
)

export default Navbar
