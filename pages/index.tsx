import { Urbanist } from "next/font/google";
import Head from "next/head";
import { motion } from "framer-motion";
import Footer from "@/components/FooterComponent";
import advent_logo from "../public/svg/advent.svg";
import advent_desktop_logo from "@/public/assets/advent_desktop_logo.png";
import AdventBlueprint from "@/components/svg/AdventBlueprint";
import Ballon from "@/components/svg/Ballon";
import { Button } from "@/components/ui/button";
import LightHouse from "@/components/svg/LightHouse";
import FibonacciPattern from "@/components/svg/FibonacciPattern";
import Advent24 from "@/components/svg/Advent24";
import AdventBackground from "@/components/svg/AdventBackground";
import { about } from "@/lib/data/contents/about";
import Timer from "@/components/TimerComponent";
import FrequentAsked from "@/components/svg/FrequentAsked";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { twMerge } from "tailwind-merge";

const urbanist = Urbanist({ subsets: ["latin"] });

export default function Home() {
  const faq: Array<{ question: string; answer: string }> = [
    {
      question: "Will stay be provided in campus ?",
      answer: "No,Advent is planning to be in 24hrs format",
    },
    { question: "How many day?", answer: "Advent is on Arpil 13 -14" },
    {
      question: "How to reach the campus ?",
      answer:
        "SCTCE is located in pappenamcode which is 5kms from TVM Central ",
    },
  ];
  return (
    <div className={twMerge("flex flex-col  bg-[#FFE0B3]",urbanist.className)} >
      <Head>
        <title>Advent'24</title>
      </Head>
      <div className="flex flex-col overflow-x-hidden">
        <motion.div
          className="mix-blend-soft h-screen flex flex-col justify-center items-center relative bg-[url(../public/assets/bg_paper_2.png)]"
          initial={{ opacity: 0, transform: "translateZ(-120px)" }}
          whileInView={{ opacity: 1, transform: "translateZ(0px)" }}
          transition={{ ease: "easeIn", duration: 2 }}
        >
          <motion.div
            initial={{ opacity: 0, transform: "scaleY(0.98)" }}
            whileInView={{ opacity: 1, transform: "scaleY(1)" }}
            transition={{ ease: "easeIn", duration: 0 }}
          >
            <AdventBlueprint className="w-screen lg:h-[718px] lg:w-[830px] opacity-50" />
          </motion.div>
          <motion.img
            src={advent_logo.src}
            className="block lg:hidden"
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
          <motion.img
            src={advent_desktop_logo.src}
            className="hidden lg:block"
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
            className="absolute flex flex-row gap-2 mt-[240px] lg:mt-[200px]"
            initial={{ opacity: 0, transform: "translateY(50px)" }}
            whileInView={{ opacity: 1, transform: "translateY(0px)" }}
            transition={{ ease: "linear", duration: 2 }}
          >
            {[
              { time: 2, text: "Exploring" },
              { time: 2.3, text: "the" },
              { time: 2.4, text: "boundless" },
              { time: 2.5, text: "horizon" },
            ].map((obj, index) => {
              return (
                <motion.p
                  key={index}
                  className="text-[14px] italic font-[600] uppercase "
                  initial={{ opacity: 0, transform: "scale(1.5);" }}
                  whileInView={{ opacity: 1, transform: "scale(1)" }}
                  transition={{ ease: "easeIn", duration: obj.time }}
                >
                  {obj.text}
                </motion.p>
              );
            })}
          </motion.div>
          <motion.div
            className="absolute flex flex-row justify-evently gap-5 top-2/3 left-25"
            initial={{ opacity: 0, transform: "translateY(50px)" }}
            whileInView={{ opacity: 1, transform: "translateY(0px)" }}
            transition={{ ease: "linear", duration: 2 }}
          >
            <Button variant={"adventPrimary"}>Brochure</Button>
            <Button variant={"default"}>CAW'24</Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: "easeIn", duration: 1 }}
            className="absolute top-3/4 left-1/2 lg:left-3/4"
          >
            <Ballon className="w-30" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: "easeIn", duration: 1 }}
            className="absolute top-0 right-1/2 z-[100] lg:right-3/4"
          >
            <LightHouse className="w-30 lg:w-[685px]" />
          </motion.div>
        </motion.div>
        <div className="flex flex-col gap-5">
          <div className="mix-blend-darken relative flex flex-col items-center p-6 h-full text-center lg:h-[650px]">
            <div className="flex flex-row gap-2">
              {[
                { time: 1, text: "The much" },
                { time: 1.3, text: "awaited" },
                { time: 1.4, text: "event" },
                { time: 1.5, text: "will start in" },
              ].map((obj, index) => {
                return (
                  <motion.p
                    key={index}
                    className="text-[14px] italic font-[600] uppercase "
                    initial={{ opacity: 0, transform: "scale(1.5);" }}
                    whileInView={{ opacity: 1, transform: "scale(1)" }}
                    transition={{ ease: "easeIn", duration: obj.time }}
                  >
                    {obj.text}
                  </motion.p>
                );
              })}
            </div>

            <FibonacciPattern className="m-5" />
            <div className="absolute top-2/4">
              <Timer />
            </div>
            <div className="absolute top-3/4 flex flex-col justify-center font-erkn">
              <p>venue:</p>
              <h1 className="text-[#552200] uppercase text-[16px] font-[400]">
                Sree Chitra Thirunal College of Engineering
              </h1>
            </div>
          </div>
          <div className="relative h-screen">
            <div className="flex flex-col justify-center lg:flex-row lg:justify-between absolute m-5 p-5 z-[150]">
              <Advent24 className="block w-full h-full lg:hidden" />
              <motion.img
                src={advent_logo.src}
                className="w-full hidden lg:block lg:w-[230px]"
                style={{
                  width: "auto",
                  objectFit: "cover",
                  position: "absolute",
                  zIndex: 100,
                }}
                initial={{ opacity: 0, transform: "translateY(50px)" }}
                whileInView={{ opacity: 1, transform: "translateY(0px)" }}
                transition={{ ease: "linear", duration: 2 }}
              />
              <p className="mt-3 whitespace-pre-wrap lg:whitespace-normal leading-tight ml-0 text-medium lg:ml-[600px] lg:text-[28px]">{about}</p>
            </div>
            <AdventBackground className="mt-10 z-[100] w-45 lg:w-[400px] opacity-55" />
            <div className="flex flex-row gap-5 lg:justify-evently lg:items-start">
            <div className="m-5 p-6 z-[150] w-full lg:w-2/3">
              {faq.map((item, index) => {
                return (
                  <Accordion type="single" collapsible key={index}>
                    <AccordionItem value="item-1">
                      <AccordionTrigger>{item.question}</AccordionTrigger>
                      <AccordionContent>{item.answer}</AccordionContent>
                    </AccordionItem>
                  </Accordion>
                );
              })}
            </div>
            <div className="absolute right-0 top-1/2 mt-80 z-[60] lg:w-[450px] lg:h-[300px]">
              <FrequentAsked />
            </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
