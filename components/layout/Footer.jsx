import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer>
            &copy; McKinney&apos;s {currentYear} 
        </footer>
    )
}

export default Footer;
