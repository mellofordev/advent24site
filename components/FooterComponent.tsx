import Image from "next/image";
import Banner from '@/public/assets/banners.png'
import Advent24 from "./svg/Advent24";
export default function Footer() {
    return (
        <div className="h-auto mt-1 flex flex-col justify-start mb-20 text-center bg-[#CCA36F]">
            <div className="flex flex-col lg:flex-row justify-center lg:justify-evently gap-3 ">
            <Image alt="Footer Banner" src={Banner.src} height={Banner.height} width={Banner.width}/>
            <div className="p-6 h-full w-full flex flex-col justify-center items-center lg:h-[173px] lg:w-[656px]">
                <Advent24/>
            </div>
            </div>
            <p>designed by aswin lal</p>
            <div className="flex flex-row justify-center items-center gap-3 underline text-adventTextPrimary">
                <a href="https://instagram.com/cult_a_way" >cult a way</a>
                <a>advent</a>
                <a>sct student's union</a>
            </div>
        </div>
    );
}