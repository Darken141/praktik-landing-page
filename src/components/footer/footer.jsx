import React from 'react'
import Wave from '../../images/wave.svg'

import { footerStyles } from './footer.module.scss'

const Footer = () => {
    return (
        <footer className={footerStyles}>
            <Wave />
        </footer>
    )
}

export default Footer
