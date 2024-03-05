import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";
import Footer from "@/components/FooterComponent";
import advent_logo from "../public/svg/advent.svg";
import AdventBlueprint from "@/components/svg/AdventBlueprint";
import Ballon from "@/components/svg/Ballon";
import { Button } from "@/components/ui/button";
import LightHouse from "@/components/svg/LightHouse";
import FibonacciPattern from "@/components/svg/FibonacciPattern";
import Advent24 from "@/components/svg/Advent24";
import AdventBackground from "@/components/svg/AdventBackground";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex flex-col justify-items-center bg-[#FFE0B3]">
      <Head>
        <title>advent'24</title>
      </Head>
      <div className="flex flex-col justify-items-center relative overflow-x-hidden">
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
          <motion.div
            className="absolute flex flex-row justify-evently gap-5 top-2/3 left-24"
            initial={{ opacity: 0, transform: "translateY(50px)" }}
            whileInView={{ opacity: 1, transform: "translateY(0px)" }}
            transition={{ ease: "linear", duration: 2 }}
          >
            <Button>brochure</Button>
            <Button>caw'24</Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: "easeIn", duration: 1 }}
            className="absolute top-3/4 left-1/2"
          >
            <Ballon className="w-30" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: "easeIn", duration: 1 }}
            className="absolute top-0 right-1/2 z-[100]"
          >
            <LightHouse className="w-30" />
          </motion.div>
        </motion.div>
        <div className="relative flex flex-col items-center p-6 h-full text-center bg-[url(../public/bg_paper.jpg)] bg-[#9f7b55] bg-blend-luminosity">
          <p className="text-[14px] italic font-[600] uppercase ">
            The much awaited event will start in
          </p>
          <FibonacciPattern className="m-5" />
          <div className="absolute top-2/4">
            <div className="flex flex-row justify-evently gap-3">
              <h1 className="text-[57px] text-[#562C02] font-[400]">00</h1>
              <h1 className="text-[57px] text-[#562C02] font-[400]">00</h1>
              <h1 className="text-[57px] text-[#562C02] font-[400]">00</h1>
              <h1 className="text-[57px] text-[#562C02] font-[400]">00</h1>
            </div>
          </div>
          <div className="absolute top-3/4 flex flex-col justify-center">
            <p>venue:</p>
            <h1 className="text-[#552200] uppercase text-[14px] font-[400]">
              Sree Chitra Thirunal College of Engineering
            </h1>
          </div>
        </div>
        <div className=" relative">
          <div className=" absolute m-5 z-[150]">
            <Advent24 />
            <p className="m-6">
              Advent 24, the fifth edition of SCTCE's renowned technical fest,
              returns with excitement and innovation. This dynamic event
              promises a blend of interdisciplinary workshops, expos,
              competitions, and engaging talks, fostering a culture of
              continuous learning and exploration.
              <br></br>
              <br></br>
              Held alongside Cult A Way, SCTCE's cultural fest, Advent maintains
              its distinctive techno-cultural identity, offering attendees a
              unique experience at the intersection of technology and culture.
              From practical workshops in biotechnology to discussions on
              cybersecurity, Advent provides hands-on experiences tailored to
              diverse interests and aspirations.
            </p>
          </div>
          <AdventBackground className=" absolute top-1/2 z-[100]" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
