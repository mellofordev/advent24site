import Image from "next/image";
import { Inter } from "next/font/google";
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import {motion} from 'framer-motion'
import Footer from "@/components/FooterComponent";
import advent_logo from '../public/svg/advent.svg';
import AdventBlueprint from "@/components/svg/AdventBlueprint";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="main">
    <Head>
        <title>advent'24</title>
    </Head>
    <div className={styles.mainContents}>
        <motion.div
            className={styles.largeViewer}
            initial={{ opacity: 0, transform: 'translateZ(-120px)' }}
            whileInView={{ opacity: 1, transform: 'translateZ(0px)' }}
            transition={{ ease: 'easeIn', duration: 2 }}
            style={{position:'relative'}}
        >
            <motion.div
                style={{ margin: 5 }}
                initial={{ opacity: 0, transform: 'scaleY(0.98)' }}
                whileInView={{ opacity: 1, transform: 'scaleY(1)' }}
                transition={{ ease: 'easeIn', duration: 0 }}
            >
            {/* stroke is not applied to the blueprint advent logo ! */}
            <AdventBlueprint svgWidth="w-full"/>
            </motion.div>
            <motion.img
                src={advent_logo.src}
                style={{ height: 200, width: 'auto', objectFit: 'cover', position: 'absolute',zIndex:100}}
                initial={{ opacity: 0, transform: 'translateY(50px)' }}
                whileInView={{ opacity: 1, transform: 'translateY(0px)' }}
                transition={{ ease: 'linear', duration: 2 }}
            />
        </motion.div>
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: 'easeIn', duration: 1 }}
        >
        </motion.div>
        <Footer />
    </div>
    </div>
  );
}
