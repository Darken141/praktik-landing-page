import React from "react"
import { graphql, useStaticQuery, Link } from 'gatsby'
import Image from 'gatsby-image'

import { headerStyles, headerContainer } from './header.module.scss'

const Header = () => {
  const { imageSharp: { fluid: logoImg } } = useStaticQuery(graphql`
    {
      imageSharp(fixed: {originalName: {eq: "logo.png"}}) {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  `)


  return (
    <header className={headerStyles}>
      <div className={headerContainer}>

        <Link to='/'>
          <Image fluid={logoImg} />
        </Link>
        <nav>
          <ul>
            <li>
              <Link to='/kontakt'>Kontakt</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
