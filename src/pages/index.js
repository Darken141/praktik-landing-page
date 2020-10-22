import React, { useState } from "react"
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import { RiFacebookCircleLine } from 'react-icons/ri'
import CustomInput from '../components/input/input'
import axios from 'axios'

const IndexPage = () => {
  const { imageSharp: { fluid: backgroundImg } } = useStaticQuery(graphql`
    {
      imageSharp(fixed: {originalName: {eq: "landing_background.png"}}) {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  `)


  const [email, setEmail] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    if (email === '') return

    axios({
      method: 'post',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        'api-key': process.env.SENDIN_BLUE_API_KEY
      },
      url: 'https://api.sendinblue.com/v3/contacts',
      data: {
        email: email,
        listIds: [3]
      }
    });

    setEmail('')
    alert('Ďakujeme za e-mail.')
  }

  return (

    <Layout>
      <SEO title="Vo výstavbe" />
      <section>
        <div className='container'>
          <h1>Pripravujeme pre Vás internetový obchod.</h1>
          <h2>
            Chcete vedieť prvý kedy stránku spustime? <br />
          Podeľte sa s nami o Váš e-mail a my Vás budeme informovať.
        </h2>

          <form className='email-form' onSubmit={handleSubmit}>
            <CustomInput
              name='email'
              type='email'
              handleChange={e => setEmail(e.target.value)}
              value={email}
              label='E-mail'
              required
            />

            <button type='submit'>Odoslať</button>
          </form>

          <h2>Alebo nás sledujte na Facebook-u</h2>
          <a href='https://www.facebook.com/predajnaPraktik' >
            <RiFacebookCircleLine /> <span>- facebook.com/predajnaPraktik</span>
          </a>
          <div className='bg-container'>
            <Image fluid={backgroundImg} className='bg-img' />

          </div>
        </div>

      </section>

    </Layout>
  )
}
export default IndexPage
