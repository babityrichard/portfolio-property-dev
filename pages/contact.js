import Head from 'next/head';
import ContactAddress from '../components/contact/ContactAddress';
import ContactForm from '../components/contact/ContactForm';
import ContactPhone from '../components/contact/ContactPhone';
import { useScroll } from '../animation/useScroll';
import { fade } from '../animation/animations';
import { motion } from 'framer-motion';

export default function Contact() {
    const [element, controls] = useScroll();

    const formMessageHandler = async (enteredFormData) => {
        const response = await fetch('/api/message-send', {
            method: 'POST',
            body: JSON.stringify(enteredFormData),
            headers: { 
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json();
        console.log(data);
    }

    return (
        <div className="contact-container">
            <Head>
                <title>McKinney&apos;s Property Management</title>
                <meta name="description" content="International financial investment company" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="contact-header">
                <h1>Contact Us</h1>
            </div>
            
            <div className="contact-form">                  
                <ContactForm onAddFormData={formMessageHandler} />
            </div>
                <hr />
            <div className="custom-hr" />
            <motion.div
                variants={fade}
                initial="hidden"
                animate={controls}
                ref={element}
            >
                <ContactAddress />

                <hr />
           
                <ContactPhone />    
            </motion.div> 
        </div>
    )
}
