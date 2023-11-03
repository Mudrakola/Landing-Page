import Header from '../Header'

import Footer from '../Footer'

import Features from '../Features'

import './index.css'

const LandingPage = () => (
  <div className="landing-page-container">
    <div className="container-1">
      <Header />
      <div className="landing-page-banner-container">
        <div className="landing-para-image-container">
          <h1 className="landing-page-para">
            Learn from your favorite creators about
            <span className="fantasy-report"> fantasy reports</span>
          </h1>
          <img
            src="https://res.cloudinary.com/dlj7gj1po/image/upload/v1698935356/hlqvkqji1h0nbpyibpww.jpg"
            alt="one-to-one"
            className="one-to-one-image"
          />
        </div>
        <img
          src="https://res.cloudinary.com/dlj7gj1po/image/upload/v1698935930/uvisklhmiv3u6h3skex9.jpg"
          alt="LandingImage"
          className="landing-page-banner-image"
        />
      </div>
      <div className="landing-page-banner"> </div>
      <div className="landing-page-banner1">
        <h1 className="explore">
          <span className="explore-heading">Get direct </span>
          <br />
          knowledge and insight.
        </h1>
        <ul className="pictures-container">
          <li>
            <img
              src="https://res.cloudinary.com/dlj7gj1po/image/upload/v1698939998/higdexuetzpgqqbbqiuv.jpg"
              alt="pictures"
              className="picture"
            />
            <img
              src="https://res.cloudinary.com/dlj7gj1po/image/upload/v1698940398/rnb8fbhu8hpiuwd68cnh.png"
              alt="pictures"
              className="picture"
            />
            <img
              src="https://res.cloudinary.com/dlj7gj1po/image/upload/v1698940454/hlx8dljranwk8x8ovyfm.png"
              alt="pictures"
              className="picture"
            />
          </li>
        </ul>
        <div className="explore-rating-container">
          <ul className="rating-container">
            <li>
              <p className="ratings">
                <span className="number">300</span>
                <br />
                creators
              </p>
            </li>
            <li>
              <p className="ratings">
                <span className="number">14.4k</span>
                <br />
                users
              </p>
            </li>
            <li>
              <p className="ratings">
                <span className="number">9.11k</span>
                <br />
                session
              </p>
            </li>
          </ul>
          <div className="explore-now-container">
            <p className="explore-market-place">Explore the marketplace</p>
            <img
              src="https://res.cloudinary.com/dlj7gj1po/image/upload/v1698941700/giuttms54sbb2hpnv63d.png"
              alt="arrow"
              className="explore-arrow"
            />
          </div>
        </div>
      </div>
    </div>
    <div className="bottom-container-features">
      <Features />
      <div className="engage-container">
        <h1 className="engage-heading">Engage without limits</h1>
        <p className="engage-paragraph">
          Join a growing community and talk directly with your favorites
          creators
        </p>
        <button type="button" className="get-started-button">
          Get Started
        </button>
      </div>
      <Footer />
    </div>
  </div>
)

export default LandingPage
