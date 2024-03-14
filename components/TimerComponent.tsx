import { useState,useEffect } from "react";
export default function Timer() {
    const counter = new Date("April 13,2024 9:30:00").getTime();
    const [day,setDay] = useState(0);
    const [hour,setHour] = useState(0);
    const [minute,setMinute] = useState(0);
    const [second,setSecond] = useState(0);
    useEffect(()=>{
        setInterval(()=>{
            var now = new Date().getTime();
            var timelapsed = counter-now;
            var min = Math.floor((timelapsed%(1000*60*60))/(1000*60));
            var sec = Math.floor((timelapsed%(1000*60))/1000);
            setDay(Math.floor(timelapsed/(1000*60*60*24)));
            setHour(Math.floor((timelapsed%(1000*60*60*24))/(1000*60*60)));
            setMinute(min);
            setSecond(sec);
          },1000)
    },[second])
  return (
    <div className="flex flex-row justify-evently gap-3 font-erkn mr-5 ml-5">
      <h1 className="text-[57px] text-[#562C02] font-[400]">{day}:</h1>
      <h1 className="text-[57px] text-[#562C02] font-[400]">{hour}:</h1>
      <h1 className="text-[57px] text-[#562C02] font-[400]">{minute}:</h1>
      <h1 className="text-[57px] text-[#562C02] font-[400]">{second}</h1>
    </div>
  );
}
