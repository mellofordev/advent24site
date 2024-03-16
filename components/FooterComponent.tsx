import Link from "next/link";
import Image from "next/image";
import Banner from '@/public/assets/banners.png'
export default function Footer() {
    return (
        <div className="h-[300px] mt-1 flex flex-col justify-start mb-20 text-center bg-[#CCA36F]">
            <Image alt="Footer Banner" src={Banner.src} height={Banner.height} width={Banner.width}/>
        </div>
    );
}