import React from 'react'
import Link from 'gatsby-link'
import logo from './logo.svg'
import './index.scss'

const Header = () => (
  <div className="Header">
    <Link to="/">
      <img style={{ height: "3rem" }} src={logo} alt="DB company logo" />
    </Link>

    <Link to="/">
      <strong>Главная</strong>
    </Link>
    <Link to="/portfolio">
      Портфолио
    </Link>
    <Link to="/services">
      Услуги
    </Link>
    <Link to="/prices">
      Цены
    </Link>
    <a href="tel: +7 495 780 80 55">+7 495 780 80 55</a>
    { /* This will be a LanguageToggle component, not Link: */ }
    <Link to="/asdf">
      <strong>Ru</strong> / En
    </Link>
  </div>
)

export default Header
