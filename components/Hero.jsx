import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { titleAnim, heroContainerAnim } from '../animation/animations';
import heroImg from '../public/img/hero-main.jpg';

const Hero = () => {
    
    return (
        <div className="hero-main">
            <div className="hero-description">

                <motion.div 
                    variants={heroContainerAnim} 
                    initial="hidden"
                    animate="show"
                    className="hero-title"
                >                    
                    <motion.h2 variants={titleAnim}>McKinney&apos;s</motion.h2>                          
                    
                    <motion.h2 variants={titleAnim}>Property</motion.h2>                        
                    
                    <motion.h2 variants={titleAnim}>Investment</motion.h2>  
                </motion.div>

                <p>Tradition and progress in the world of finances.</p>
                <div className="button-container">
                    <Link href="/about">
                        <a><button type="button">Learn More</button></a>
                    </Link>
                </div>              
                
            </div>

            <div className="hero-img-container">
                <Image 
                    src={heroImg}
                    alt="Our office building"
                    layout="responsive"
                    priority
                    objectFit="cover"
                    className="hero-img"
                />
            </div>
        </div>        
    )
}

export default Hero;
