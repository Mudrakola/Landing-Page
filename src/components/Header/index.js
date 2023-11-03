import './index.css'

const Header = () => (
  <nav className="nav-container">
    <div className="logo-container">
      <img
        src="https://res.cloudinary.com/dlj7gj1po/image/upload/v1698932348/udaha7xawcfxp1o3ufra.jpg"
        alt="logo"
        className="logo-image"
      />
      <ul className="header-list-container">
        <li className="list-item">Explore</li>
        <li className="list-item">Company</li>
        <li className="list-item">Support</li>
      </ul>
    </div>
    <div className="sign-in-container">
      <p className="header-paragraph">Become a member</p>
      <button type="button" className="sign-in-button">
        Sign in
      </button>
    </div>
    <img
      src="https://res.cloudinary.com/dlj7gj1po/image/upload/v1698977941/epmvxu0gyatqofmudn8m.png"
      alt="logo2"
      className="header-image"
    />
  </nav>
)

export default Header
