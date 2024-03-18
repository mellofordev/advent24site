import Image from "next/image";
import Banner from "@/public/assets/banners_group.png";
import StudentUnion from "@/public/assets/student_union.png";
import Advent24 from "./svg/Advent24";
export default function Footer() {
  return (
    <div className="h-auto mt-1 flex flex-col justify-start mb-20 text-center bg-[#784421] lg:bg-[#CCA36F] ">
      <div className="flex flex-col lg:flex-row justify-center gap-1 lg:justify-between">
        <Image
          alt="Footer Banner"
          src={Banner.src}
          height={Banner.height}
          width={Banner.width}
        />
        <div className="p-6 h-full w-full flex flex-col justify-center items-center lg:w-[300px] lg:h-[300px]">
          <div className="flex flex-col justify-center items-center">
            <Advent24 />
            {/* <div className="flex flex-row justify-evently gap-10">
              <Image
                alt="Student Union"
                src={StudentUnion.src}
                height={150}
                width={150}
              />
              <h1 className="text-[64px] font-bold font-erkn text-[#412619]">
                Cult a way 2024
              </h1>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
