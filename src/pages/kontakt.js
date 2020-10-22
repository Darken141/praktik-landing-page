import React, { useState } from 'react'
import Layout from '../components/layout/layout'
import SEO from '../components/seo'
import axios from 'axios'

import CustomInput from '../components/input/input'
import CustomCheckbox from '../components/checkbox/checkbox'
import CustomButton from '../components/button/button'

const KontaktPage = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [gdpr, setGdpr] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!gdpr) return
        setIsLoading(true)
        const response = await axios.post(process.env.FORM_HANDLER_API, {
            name: `${firstName} ${lastName}`,
            email,
            message
        })

        setIsLoading(false)
        setFirstName('')
        setLastName('')
        setEmail('')
        setMessage('')

        if (response.data === 'success') {
            alert('E-mail bol odoslaný')
        }
    }

    return (
        <Layout>
            <SEO title="Kontakt" />
            <div className='container'>
                {isLoading ? (
                    <div style={{ textAlign: "center" }}>
                        <h3>Odosielam...</h3>
                    </div>
                ) : (
                        <form className='contact-form' onSubmit={handleSubmit}>
                            <CustomInput
                                type='text'
                                id='firstname'
                                name="firstname"
                                value={firstName}
                                handleChange={e => setFirstName(e.target.value)}
                                label="Vaše meno"
                            />
                            <CustomInput
                                type='text'
                                id='lastname'
                                name='lastname'
                                value={lastName}
                                handleChange={e => setLastName(e.target.value)}
                                label="Vaše priezvisko"
                            />
                            <CustomInput
                                type='email'
                                id='contactemail'
                                name='contactemail'
                                value={email}
                                handleChange={e => setEmail(e.target.value)}
                                label="Váš e-mail"
                            />
                            <div className='form-textarea'>
                                <textarea id="message" name='message' rows="4" value={message} onChange={e => setMessage(e.target.value)} />
                                <label htmlFor="message" className={message.length ? "shrink" : ""}>Vaša správa</label>
                            </div>

                            <CustomCheckbox grdp={gdpr} setGdpr={setGdpr} id="contect" />

                            <CustomButton type="submit">
                                Odoslať správu
                            </CustomButton>
                        </form>
                    )
                }
            </div>
        </Layout>
    )
}

export default KontaktPage
