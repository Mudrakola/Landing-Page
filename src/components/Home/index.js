import {Component} from 'react'

import Navbar from '../Navbar'

import Card from '../Card'

import './index.css'

const detail = [
  {
    image:
      'https://res.cloudinary.com/dlj7gj1po/image/upload/v1696426781/cs206qoi0jtvcatl5nsx.png',
    name: 'Private Workspace',
  },
  {
    image:
      'https://res.cloudinary.com/dlj7gj1po/image/upload/v1696427178/y8hwrapso6r6vwiqf7lm.png',
    name: 'Parking Area',
  },
  {
    image:
      'https://res.cloudinary.com/dlj7gj1po/image/upload/v1696427240/teu6gkwm2ra0olguicsl.png',
    name: 'Breakfast',
  },
  {
    image:
      'https://res.cloudinary.com/dlj7gj1po/image/upload/v1696427321/ycprgtwxkmfe1orxyczd.png',
    name: 'Free Wifi',
  },
  {
    image:
      'https://res.cloudinary.com/dlj7gj1po/image/upload/v1696427376/tvtwszrvr73pg4evcw3l.png',
    name: 'Free Electricity',
  },
  {
    image:
      'https://res.cloudinary.com/dlj7gj1po/image/upload/v1696427422/uqtvksrn4g2hmwwifizk.png',
    name: 'Swimming Pool',
  },
  {
    image:
      'https://res.cloudinary.com/dlj7gj1po/image/upload/v1696427470/xzzafqypyssyzqwhcqk0.png',
    name: 'exercise Space',
  },
  {
    image:
      'https://res.cloudinary.com/dlj7gj1po/image/upload/v1696427522/jjrfmuakcewtusgksuix.png',
    name: 'Other Service',
  },
]

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <Navbar />
        <div className="header-1-container">
          <div className="container-1">
            <h1 className="header-heading">Find your perfect place to stay</h1>
            <p className="header-1-paragraph">
              Our exquisite rooms offers a perfect blend of contemporary
              elegance and warm hospitality
            </p>
            <button type="button" className="video-button">
              <img src="https://res.cloudinary.com/dlj7gj1po/image/upload/v1696422971/alosjyrlpzkqod3rb5po.png" />
              <span className="watch-button">Watch Video</span>
            </button>
          </div>
          <div className="header-left-container"> </div>
        </div>
        <div className="popular-hotel-container">
          <h1 className="popular-hotels-heading">Our Most Popular Rooms</h1>
          <button type="button" className="view-all-button">
            View All
          </button>
          <div className="card-container-2">
            <div className="hotel-card-container">
              <img
                src="https://res.cloudinary.com/dlj7gj1po/image/upload/v1696424681/tvrpdyhqpusmvsflukgy.png"
                className="card-image"
              />
              <div className="card-details-container">
                <h1 className="card-detail-heading">Executive Room</h1>
                <div className="amount-container">
                  <p className="amount">$200 Par Night</p>
                  <hr className="line-1" />
                  <img src="https://res.cloudinary.com/dlj7gj1po/image/upload/v1696425187/fmrovjvcwqhgblt3wane.png" />
                </div>
              </div>
            </div>
            <div className="hotel-card-container">
              <img
                src="https://res.cloudinary.com/dlj7gj1po/image/upload/v1696425905/ticodxcdrvxz5atkj5qx.png"
                className="card-image"
              />
              <div className="card-details-container">
                <h1 className="card-detail-heading">Premium Room</h1>
                <div className="amount-container">
                  <p className="amount">$200 Par Night</p>
                  <hr className="line-1" />
                  <img src="https://res.cloudinary.com/dlj7gj1po/image/upload/v1696425187/fmrovjvcwqhgblt3wane.png" />
                </div>
              </div>
            </div>
            <div className="hotel-card-container">
              <img
                src="https://res.cloudinary.com/dlj7gj1po/image/upload/v1696425816/h6dt7201jwkhtgw5pizp.png"
                className="card-image"
              />
              <div className="card-details-container">
                <h1 className="card-detail-heading">Basic Room</h1>
                <div className="amount-container">
                  <p className="amount">$200 Par Night</p>
                  <hr className="line-1" />
                  <img src="https://res.cloudinary.com/dlj7gj1po/image/upload/v1696425187/fmrovjvcwqhgblt3wane.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hotel-facilities-container">
          <div className="facilities-details">
            <h1 className="facilities-heading">
              We do our best facilities provide you
            </h1>
            <p className="facilities-para">
              Discover Your Ideal Haven: Find Your Perfect Stay at Golden Sands
              Resort
            </p>
            <button type="button" className="contact-button">
              Contact Now
            </button>
          </div>
          <div className="container-3">
            <ul className="list-container-2">
              {detail.map(eachItem => (
                <Card eachItem={eachItem} />
              ))}
            </ul>
          </div>
        </div>
        <div className="about-container">
          <img src="https://res.cloudinary.com/dlj7gj1po/image/upload/v1696429111/qm3ddpadglyarqzviurx.png" />
          <div className="about-details">
            <h1 className="about-heading">Discover our History</h1>
            <p className="paragraph">
              Golden Sands Resort has a rich history dating back over a century.
              Originally a grand mansion, it transformed into a distinguished
              hotel.
            </p>
            <p className="paragraph">
              Welcoming esteemed guests and witnessing significant moments, it
              has evolved while preserving its historic charm. Today, it stands
              as an icon of luxury, offering a perfect blend of heritage and
              contemporary hospitality.
            </p>
            <button type="button" className="explore-more-button">
              Explore More
            </button>
          </div>
        </div>
        <div className="faq-container">
          <div>
            <h1 className="faq-heading">
              Frequently Asked <span className="spanfaq">Questions</span>
            </h1>
            <p className="faq-para">
              You can book massages 7 days a week from 6 am to 11 pm, including
              public holidays.
            </p>
          </div>
          <div className="faq-right-container">
            <div className="fql-question-1">
              <div className="fq-container">
                <h1 className="faq-qus-1">How far is nearset bus station ?</h1>
                <img src="https://res.cloudinary.com/dlj7gj1po/image/upload/v1696431642/stnbqiqck6mn9cjtrxkk.png" />
              </div>
              <p className="faq-para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip.
              </p>
            </div>
            <div className="fq-container fql-question-2">
              <h1 className="faq-qus-1">What Makes Us Different</h1>
              <img src="https://res.cloudinary.com/dlj7gj1po/image/upload/v1696432299/nvv8urs4ww7k6rwbrlv9.png" />
            </div>
            <div className="fq-container fql-question-2">
              <h1 className="faq-qus-1">What Time Is Checking Out?</h1>
              <img src="https://res.cloudinary.com/dlj7gj1po/image/upload/v1696432299/nvv8urs4ww7k6rwbrlv9.png" />
            </div>
          </div>
        </div>
        <div className="map">
          <div className="map-card">
            <h1 className="visit-us-heading">Visit Us</h1>
            <div className="visit-input-container">
              <p className="visit-us-para">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's
              </p>
              <div className="input-container">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input-ele"
                />
                <button type="button" className="contact-button">
                  Contact
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-container">
          <div className="footer-card">
            <div className="looking-forward-container">
              <p className="looking-forward-para">
                Looking forward to a wonderful stay
              </p>
              <div className="logos-container">
                <img src="https://res.cloudinary.com/dlj7gj1po/image/upload/v1696475606/qg2zh14m8dpdbqv9dm8z.png" />
                <img src="https://res.cloudinary.com/dlj7gj1po/image/upload/v1696475667/pxsooyjud90ulsmrsg6v.png" />
                <img src="https://res.cloudinary.com/dlj7gj1po/image/upload/v1696475713/nf4vncxckrebuavvnqyr.png" />
              </div>
            </div>
            <ul className="footer-list-container">
              <h1 className="footer-list-heading">Home</h1>
              <li className="footer-list-item">Booking</li>
              <li className="footer-list-item">Facilities</li>
              <li className="footer-list-item">Location</li>
              <li className="footer-list-item">Contact</li>
            </ul>
            <ul className="footer-list-container-2">
              <h1 className="footer-list-heading">Help</h1>
              <li className="footer-list-item">About Us</li>
              <li className="footer-list-item">Help Center</li>
              <li className="footer-list-item">Privacy Policy</li>
              <li className="footer-list-item">FAQs</li>
            </ul>
            <ul className="footer-list-container-3">
              <h1 className="footer-list-heading">Get the app</h1>
              <li className="footer-list-item">ios app</li>
              <li className="footer-list-item">Andriod app</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
