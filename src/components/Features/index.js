import './index.css'

const Features = () => (
  <div className="features-container">
    <div>
      <h1 className="features-heading">Why become a creator?</h1>
      <p className="features-para1">
        Engage with your supporter and subscriber to sell your skills, knowledge
        and passions
      </p>
      <button type="button" className="creator-button">
        Become a creator
      </button>
    </div>
    <div>
      <ul className="feature-list-container">
        <li className="feature-list">
          <img
            src="https://res.cloudinary.com/dlj7gj1po/image/upload/v1698942610/kssnslhl3fxktxu11d3b.png"
            alt="feature"
            className="feature-image"
          />
          <h1 className="features">Engagement</h1>
          <p className="features-para">
            Engage on a deeper level with the fans that matter most
          </p>
        </li>
        <li className="feature-list">
          <img
            src="https://res.cloudinary.com/dlj7gj1po/image/upload/v1698943748/aro3svwobsqftdzlvphp.png"
            alt="feature"
            className="feature-image"
          />
          <h1 className="features">Autonomy </h1>
          <p className="features-para">
            Full autonomy on when and who you talk to.
          </p>
        </li>
      </ul>
      <ul className="feature-list-container">
        <li className="feature-list">
          <img
            src="https://res.cloudinary.com/dlj7gj1po/image/upload/v1698943807/nysh5trsaotwg3a6cxuw.png"
            alt="feature"
            className="feature-image"
          />
          <h1 className="features">Free</h1>
          <p className="features-para">No monthly fee or sign-up fee</p>
        </li>
        <li className="feature-list">
          <img
            src="https://res.cloudinary.com/dlj7gj1po/image/upload/v1698943847/kcide2wcya7lbmsfqylz.png"
            alt="feature"
            className="feature-image"
          />
          <h1 className="features">Earn </h1>
          <p className="features-para">
            Add a new source of income that you can control
          </p>
        </li>
      </ul>
    </div>
  </div>
)

export default Features
