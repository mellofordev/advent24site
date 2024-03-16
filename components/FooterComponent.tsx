import Link from "next/link";
import Image from "next/image";
import Banner from '@/public/assets/banners.png'
import Advent24 from "./svg/Advent24";
export default function Footer() {
    return (
        <div className="h-[300px] mt-1 flex flex-col justify-start mb-20 text-center bg-[#CCA36F]">
            <Image alt="Footer Banner" src={Banner.src} height={Banner.height} width={Banner.width}/>
            <div className="m-10 flex flex-col justify-center items-center">
                <Advent24/>
            </div>
            <div className="flex flex-row justify-center items-center gap-3 underline text-adventTextPrimary">
                <a href="https://instagram.com/cult_a_way" >cult a way</a>
                <a>advent</a>
                <a>sct student's union</a>
            </div>
        </div>
    );
}