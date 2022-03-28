import Head from 'next/head';
import Image from 'next/image';
import Partner from '../components/management/Partner';
import TogglePartner from '../components/management/TogglePartner';
import { managementArray } from '../data/management';
import { AnimateSharedLayout, motion } from 'framer-motion';
import colleaguesImg from '../public/img/management/colleagues-group.jpg'

export default function Management() {
    return (
        <div>
            <Head>
                <title>McKinney&apos;s Property Management</title>
                <meta name="description" content="International financial investment company" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="management-main">
                <h1>Management</h1>
                <AnimateSharedLayout>
                    <motion.section className="management-list">
                        
                            {managementArray.map(partner => (
                                <TogglePartner key={partner.id} partner={partner}>
                                    <Partner partner={partner} />                            
                                </TogglePartner>
                            ))}
                        
                    </motion.section>

                    <motion.section layout className="management-colleagues">
                        
                        <h1 className="colleagues-h1">Our colleagues</h1>
                        <p>We are very proud to know that we employ some of the finest of the industry. Our employees had faced a multiple-round interview process where high standards have been set. Their training is always an ongoing process; thus we are able to flourish in a fast-pace economy. In our scholarship program we are constantly seeking and recruiting new talents from all over the world.</p>
                        <Image 
                            src={colleaguesImg}
                            alt="Colleagues"
                            width={300}
                            height={200}
                            layout="responsive"
                            objectFit="contain"
                            className="colleagues-img"
                        />
                        
                    </motion.section>
                </AnimateSharedLayout>                
            </main>           
        </div>
    )
}
