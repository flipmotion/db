import React from 'react'
import Link from 'gatsby-link'
import './index.scss'

const Footer = () => (
  <div className="Footer">
    <Link to="/contacts">
      <strong>Контакты</strong>
    </Link>
    <Link to="/about">
      О компании
    </Link>
    <Link to="/services">
      Copyright © 2018 DB Company
    </Link>
    <Link to="/policy">
      Политика конфиденциальности
    </Link>
    <div>
      <Link to="/vk">VK</Link>
      <Link to="/vk">FB</Link>
      <Link to="/vk">IG</Link>
    </div>
  </div>
)

export default Footer
