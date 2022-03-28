import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Partner = ({ partner }) => {
    return (
        <section layout className="partner-main">  
            <div className="partner-credentials">
                <article className="partner-details">      
                    <h3>School: <span>{partner.school}</span></h3>
                     <p>{partner.description}</p>
                </article>  
                <div className="partner-img-container">
                    <Image 
                        src={partner.image}
                        alt={partner.name}
                        width={300}
                        height={200}
                        layout="responsive"
                        objectFit="cover"
                        className="partner-img"
                    />
                </div>
                
            </div>  
            <hr />
        </section>
    )
}

export default Partner;
