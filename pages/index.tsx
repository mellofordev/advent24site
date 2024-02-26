import Image from "next/image";
import { Inter } from "next/font/google";
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import {motion} from 'framer-motion'
import Footer from "@/components/FooterComponent";
import advent_logo from '../public/svg/advent.svg';
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
        >
            <motion.div
                style={{ margin: 5 }}
                initial={{ opacity: 0, transform: 'scaleY(0.98)' }}
                whileInView={{ opacity: 1, transform: 'scaleY(1)' }}
                transition={{ ease: 'easeIn', duration: 0 }}
            >
            </motion.div>
            <motion.img
                src={advent_logo.src}
                style={{ height: 200, width: 'auto', objectFit: 'cover' }}
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
            <div className={styles.contactFlexBox}>
                <div className={styles.shortContactViewer}>
                    <h1 className={styles.contactmeFont}>This February</h1>
                    <div>
                        <div className={styles.contactContainer}>
                            <div className={styles.contactIndividuals}>
                                <h2 className={styles.titleFont}>16</h2>
                            </div>
                            <div className={styles.contactIndividuals}>
                                <h2 className={styles.titleFont}>17</h2>
                            </div>
                            <div className={styles.contactIndividuals}>
                                <h2 className={styles.titleFont}>18</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.rightContactImage}>
                    <Image
                        className={styles.contactImg}
                        src="https://i.ibb.co/bmM9VqK/sst-side-pic.jpg"
                        width={550}
                        height={600}
                        alt="Theyyam"
                        style={{ borderRadius: 35 }}
                    />
                </div>
            </div>
        </motion.div>
        <Footer />
    </div>
    </div>
  );
}
