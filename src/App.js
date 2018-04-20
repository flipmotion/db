import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
// import PropTypes from 'prop-types'

import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'

const TemplateWrapper = ({ children }) => (

  <Router>
    <div className="DBSiteContainer">
      <div className="DBSiteContainer-Header">
        <Header />
      </div>
      <div className="DBSiteContainer-Body">
        <p>123</p>
      </div>
      <div className="DBSiteContainer-Footer">
        <Footer />
      </div>
    </div>
  </Router>
)

// TemplateWrapper.propTypes = {
//   children: PropTypes.func,
// }

export default TemplateWrapper