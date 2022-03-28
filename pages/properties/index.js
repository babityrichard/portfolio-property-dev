import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { IoEyeOutline } from 'react-icons/io5';
import { propertiesArray } from '../../data/propertiesDetails';

export const getStaticProps = async () => {      
    return {
        props: { properties: propertiesArray }
    }
}

export default function PropertiesIndex({ properties }) {
    
    return (
        <motion.div>
            <Head>
                <title>McKinney&apos;s Property Management</title>
                <meta name="description" content="International financial investment company" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <main className='properties-main'>
                <h1>
                    Properties
                </h1>
                <p>Our office building portfolio consists of a wide range of properties. We are present on three continents: America, Europe, Asia. Besides interests in other sectors properties are our main profile up until now. You can see some of our recent investments by kindly clicking on their thumbnail below.</p>            

                <div className="grid-container">
                    <div className="bg1"></div>
                    <div className="bg1"></div>
                    
                    <Link href={`/properties/${properties[0].slug}`}>
                        <a>
                            <div className="property1">
                                <IoEyeOutline />
                            </div>
                        </a>
                    </Link>

                    <Link href={`/properties/${properties[1].slug}`}>
                        <a>
                            <div className="property2">
                                <IoEyeOutline />
                            </div>
                        </a>
                    </Link>

                    <motion.div className="bg1"></motion.div>

                    <Link href={`/properties/${properties[2].slug}`}>
                        <a>
                            <div className="property3">
                                <IoEyeOutline />
                            </div>
                        </a>
                    </Link>

                    <Link href={`/properties/${properties[3].slug}`}>
                        <a>
                            <div className="property4">
                                <IoEyeOutline />
                            </div>
                        </a>
                    </Link>

                    <div className="bg1"></div>

                    <Link href={`/properties/${properties[4].slug}`}>
                        <a>
                            <div className="property5">
                                <IoEyeOutline />
                            </div>
                        </a>
                    </Link>

                    <Link href={`/properties/${properties[5].slug}`}>
                        <a>
                            <div className="property6">
                                <IoEyeOutline />
                            </div>
                        </a>
                    </Link>

                    <div className="bg1"></div>
                    <div className="bg1"></div>
                    
                </div>                
            </main>
        </motion.div>
    )
}

