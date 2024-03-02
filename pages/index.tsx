import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";
import Footer from "@/components/FooterComponent";
import advent_logo from "../public/svg/advent.svg";
import AdventBlueprint from "@/components/svg/AdventBlueprint";
import Ballon from "@/components/svg/Ballon";
import LightHouse from "@/components/svg/LightHouse";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="main">
      <Head>
        <title>advent'24</title>
      </Head>
      <div className="flex flex-col justify-items-center relative overflow-x-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeIn", duration: 1 }}
          className="absolute bottom-2.5/4 right-1/2 z-[100]"
        >
          <LightHouse className="w-30" />
        </motion.div>
        <motion.div
          className={styles.largeViewer}
          initial={{ opacity: 0, transform: "translateZ(-120px)" }}
          whileInView={{ opacity: 1, transform: "translateZ(0px)" }}
          transition={{ ease: "easeIn", duration: 2 }}
          style={{ position: "relative" }}
        >
          <motion.div
            initial={{ opacity: 0, transform: "scaleY(0.98)" }}
            whileInView={{ opacity: 1, transform: "scaleY(1)" }}
            transition={{ ease: "easeIn", duration: 0 }}
          >
            <AdventBlueprint className="w-screen" />
          </motion.div>
          <motion.img
            src={advent_logo.src}
            style={{
              height: 200,
              width: "auto",
              objectFit: "cover",
              position: "absolute",
              zIndex: 100,
            }}
            initial={{ opacity: 0, transform: "translateY(50px)" }}
            whileInView={{ opacity: 1, transform: "translateY(0px)" }}
            transition={{ ease: "linear", duration: 2 }}
          />
        </motion.div>
        <div className="flex flex-row justify-evently gap-3"></div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeIn", duration: 1 }}
          className="absolute top-3/4 left-1/2"
        >
          <Ballon className="w-30" />
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
