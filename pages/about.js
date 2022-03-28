import Head from 'next/head';
import { motion } from 'framer-motion';
import { pageTransition, aboutAnim } from '../animation/animations';

export default function About() {
    return (
        <div>
            <Head>
                <title>McKinney&apos;s Property Management</title>
                <meta name="description" content="International financial investment company" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <motion.main 
                variants={pageTransition}
                initial="hidden"
                animate="show"  
                exit="exit" 
                className='aboutus-main'
            >
                <h1>
                    About Us
                </h1>

                <motion.section 
                    className="our-present"
                    variants={aboutAnim}
                >
                    <h2>Our Present</h2>
                    <p>McKinney&apos;s Property Investment is one of the leading investment companies in the world. Headquartered in Atlanta, Georgia, we have a wide range of interests in various sectors; yet office buildings are our main priority up until now. We currently manage a business portfolio with assets that are worth of $7.5 billion USD. Besides are own capital we handle the resources of other hedge funds, private investors, pension funds; we can proudly say some of our clients are even royal families. Our portfolio spreads across the world, with investments in Europe, Asia and on the American continent.</p>
                </motion.section>

                <motion.section 
                    className="our-present"
                    variants={aboutAnim}
                >
                    <h2>Our Foundations</h2>
                    <p>Our company was founded by James McKinney in 1907. Born in Scotland, after getting his inheritance James moved to the United States in 1905. His first business enterprise was buying a two storey building with a few tenants. After finding other investors two years later he established McKinney&apos;s Property Investment. They started with middle sized acquisitions, and the capital of the company had grown rapidly. During and after World War I his business was very stable, and he was able to manage it for more than three decades. The family tradition is still present in the company since his great-grandson, William is the CFO of the firm. Our heritage is very important to us, and we constantly keep an eye on it and get inspired by.</p>
                </motion.section>

                <motion.section 
                    className="our-present"
                    variants={aboutAnim}
                >
                    <h2>Our Perspectives</h2>
                    <p>Besides being present in a traditionally stable sector we are always seeking new areas expanding our business activities. In the recent years we have been exploring the rapidly growing markets of IT, Alternative Fuels and Sustainable Food Supply. We also have an internship program and a yearly donated scholarship named after our founder, William McKinney. Despite nourishing our traditions we are very open to a diverse business structure both in terms of investments and the composition of our team. The members of our company our finely selected from all over the world, and such as our assets, they are from a variety of continents and cultures.</p>
                </motion.section>
            </motion.main>
        </div>
    )
}
