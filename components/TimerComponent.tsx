import { useState, useEffect } from "react";
export default function Timer() {
  const counter = new Date("April 13,2024 9:30:00").getTime();
  const [day, setDay] = useState(0);
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  useEffect(() => {
    setInterval(() => {
      var now = new Date().getTime();
      var timelapsed = counter - now;
      var min = Math.floor((timelapsed % (1000 * 60 * 60)) / (1000 * 60));
      var sec = Math.floor((timelapsed % (1000 * 60)) / 1000);
      setDay(Math.floor(timelapsed / (1000 * 60 * 60 * 24)));
      setHour(
        Math.floor((timelapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      );
      setMinute(min);
      setSecond(sec);
    }, 1000);
  }, [second]);
  return (
    <div className="flex flex-row justify-evently gap-3 font-erkn mr-5 ml-5 text-[57px] text-[#562C02] font-[400] lg:text-[130px] lg:font-[400]">
      <div className="flex flex-col justify-center items-center gap-2 lg:gap-6 leading-10">
        <h1>{day < 10 ? "0" + day : day}:</h1>
        <p className="font-sans text-[10px] lg:text-[30px] font-[700] text-black">
          Days
        </p>
      </div>
      <div className="flex flex-col justify-center items-center gap-2 lg:gap-6 leading-10">
        <h1>{hour < 10 ? "0" + hour : hour}:</h1>
        <p className="font-sans text-[10px] lg:text-[30px] font-[700] text-black">
          Hour
        </p>
      </div>
      <div className="flex flex-col justify-center items-center gap-2 lg:gap-6 leading-10">
        <h1>{minute < 10 ? "0" + minute : minute}:</h1>
        <p className="font-sans text-[10px] lg:text-[30px] font-[700] text-black">
          Min
        </p>
      </div>
      <div className="flex flex-col justify-center items-center gap-2 lg:gap-6 leading-10">
        <h1>{second < 10 ? "0" + second : second}</h1>
        <p className="font-sans text-[10px] lg:text-[30px] font-[700] text-black">
          Sec
        </p>
      </div>
    </div>
  );
}
