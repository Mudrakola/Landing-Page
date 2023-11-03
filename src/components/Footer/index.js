import './index.css'

const Footer = () => (
  <div className="footer-container">
    <div className="image-logos-container">
      <img
        src="https://res.cloudinary.com/dlj7gj1po/image/upload/v1698932348/udaha7xawcfxp1o3ufra.jpg"
        alt="logo"
        className="logo-image"
      />
      <ul className="footer-logos">
        <li>
          <img
            src="https://res.cloudinary.com/dlj7gj1po/image/upload/v1698944941/px06k0rzgvi6kiadjrya.png"
            alt="FTL"
            className="image-logos"
          />
        </li>
        <li>
          <img
            src="https://res.cloudinary.com/dlj7gj1po/image/upload/v1698946108/zuxahdtrtikqdccjrxhg.png"
            alt="FTL"
            className="image-logos"
          />
        </li>
        <li>
          <img
            src="https://res.cloudinary.com/dlj7gj1po/image/upload/v1698946150/fbppmjglcuji4ijiloks.png"
            alt="FTL"
            className="image-logos"
          />
        </li>
      </ul>
    </div>
    <div className="footer-container-1">
      <ul className="footer-list-container">
        <h1 className="footer-heading">About</h1>
        <li className="footer-paragraph">How it works</li>
        <li className="footer-paragraph">Company</li>
        <li className="footer-paragraph">Help & support</li>
      </ul>
      <ul className="footer-list-container">
        <h1 className="footer-heading">For creators</h1>
        <li className="footer-paragraph">How can I get paid</li>
        <li className="footer-paragraph">Become a creator</li>
      </ul>
      <ul className="footer-list-container">
        <h1 className="footer-heading">Learn</h1>
        <li className="footer-paragraph">Blog</li>
        <li className="footer-paragraph">Cookies policy </li>
        <li className="footer-paragraph">Privacy policy</li>
      </ul>
      <ul className="footer-list-container">
        <h1 className="footer-heading">Support</h1>
        <li className="footer-paragraph">Service status</li>
        <li className="footer-paragraph">Report abuse</li>
        <li className="footer-paragraph">Dispute a payment</li>
      </ul>
    </div>
  </div>
)

export default Footer
