import '../styles/globals.scss';
import { AnimatePresence, motion } from 'framer-motion';
import Layout from '../components/layout/Layout';
import { pageTransition } from '../animation/animations';

function MyApp({ Component, pageProps, router }) {
    return (
        <AnimatePresence exitBeforeEnter onExitComplete={() => {window.scrollTo(0,0)}}>
            <motion.div key={router.route}
                variants={pageTransition}
                initial="hidden"
                animate="show"  
                exit="exit"  
            >
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </motion.div>
        </AnimatePresence>
    )
}

export default MyApp;
