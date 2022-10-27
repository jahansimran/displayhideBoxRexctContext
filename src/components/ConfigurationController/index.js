import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
        showContent,
        showLeftNavbar,
        showRightNavbar,
      } = value

      const onChangeContent = () => {
        onToggleShowContent()
      }

      const onChangeLeftNavBar = () => {
        onToggleShowLeftNavbar()
      }

      const onChangeRightNavBar = () => {
        onToggleShowRightNavbar()
      }

      return (
        <nav className="nav-bar">
          <div className="text-container">
            <h1 className="config-heading">Layout</h1>
            <div className="label-check-box">
              <input
                type="checkbox"
                id="content"
                onChange={onChangeContent}
                checked={showContent}
              />
              <label htmlFor="content" className="label">
                Content
              </label>
            </div>
            <div className="label-check-box">
              <input
                checked={showLeftNavbar}
                type="checkbox"
                id="left-navbar"
                onChange={onChangeLeftNavBar}
              />
              <label htmlFor="left-navbar" className="label">
                Left Navbar
              </label>
            </div>
            <div className="label-check-box">
              <input
                checked={showRightNavbar}
                type="checkbox"
                id="right-navbar"
                onChange={onChangeRightNavBar}
              />
              <label htmlFor="right-navbar" className="label">
                Right Navbar
              </label>
            </div>
          </div>
        </nav>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default ConfigurationController
