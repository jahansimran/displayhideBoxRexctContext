import {Component} from 'react'

import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

class Body extends Component {
  render() {
    return (
      <ConfigurationContext.Consumer>
        {value => {
          const {showContent, showLeftNavbar, showRightNavbar} = value
          return (
            <>
              <div className="body-container">
                {showLeftNavbar ? (
                  <div className="left-navbar-menu">
                    <h1 className="left-heading">Left Navbar Menu</h1>
                    <ul className="un-order">
                      <li className="list-item">Item 1</li>
                      <li className="list-item">Item 2</li>
                      <li className="list-item">Item 3</li>
                      <li className="list-item">Item 4</li>
                    </ul>
                  </div>
                ) : null}

                {showContent ? (
                  <div className="content-container">
                    <h1 className="left-heading">Content</h1>
                    <p className="content-para">
                      Lorem ipsum dolor sit amet, consectetur adipiscing slit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. dolore magna aliqua. Ut enim ad minim veniam.
                    </p>
                  </div>
                ) : null}

                {showRightNavbar ? (
                  <div className="right-navbar">
                    <h1 className="left-heading">Right Navbar</h1>
                    <p className="para-box">Ad 1</p>
                    <p className="para-box">Ad 2</p>
                  </div>
                ) : null}
              </div>
            </>
          )
        }}
      </ConfigurationContext.Consumer>
    )
  }
}
export default Body
