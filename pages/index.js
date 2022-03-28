import { useEffect } from 'react';
import Head from 'next/head';
import Hero from '../components/Hero';
import { motion } from 'framer-motion';
import { pageTransition } from '../animation/animations';

export default function Home() {

    useEffect(() => {
        window.history.scrollRestoration = 'manual'
    }, []);

    return (
        <motion.div 
            variants={pageTransition}
            initial="hidden"
            animate="show"  
            exit="exit"  
        >
            <Head>
                <title>McKinney&apos;s Property Management</title>
                <meta name="description" content="International financial investment company" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Hero />            
        </motion.div>
    )
}
