import Image from 'next/image';
import React from 'react';
import addrImg from '../../public/img/address-img.jpg';

const ContactAddress = () => {
    return (
        <div className="contact-addr-container">
            
            <div className="addr-left">
                <h3>Main Office</h3>
                <p>
                3400 Peachtree Street, NW Atlanta, Georgia, Usa
                </p>
            </div>

            <div className="addr-center-img-container">
                <Image 
                    src={addrImg}
                    alt="Address image"
                    className="addr-img"
                />   
            </div>

            <div className="addr-right">
                <h3>Offices Worldwide</h3>
                <p>London: 114 Waterloo Road,<br /> London SE1 8UL</p>
                <p>Singapore: 107 Pasir Panjang Rd, Singapore 118535</p>
            </div>

        </div>
    )
}

export default ContactAddress;
