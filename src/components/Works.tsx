import React from "react";

import Image from "next/image";
import Link from "next/link";

import Weather from "@/Images/weather.jpg";
import Wedding from "@/Images/wedding.png";

const Works = () => {
  return (
    <div
      className="bg-[#FAF0E6] px-[5%] py-[15%] flex flex-col items-center justify-center"
      id="works"
    >
      <h1 className="text-[32px] text-[#CEB195] text-center sm:text-[36px] md:text-[48px]">
        LATEST WORKS
      </h1>
      <div className="w-full flex flex-col items-center mt-12 md:flex-row">
        <div className="w-full flex flex-col md:flex-row">
          <div className="w-full md:w-[40vw]">
            <Link
              href="https://weather-search-engine.vercel.app/"
              target="_blank"
            >
              <Image
                alt="Weather Search Engine"
                className="mx-auto hover:opacity-75"
                width={200}
                style={{ objectFit: "contain", objectPosition: "center" }}
                src={Weather}
              />
            </Link>
          </div>
          <div className="w-full flex flex-col mt-12 md:w-[60vw] md:h-auto md:mt-0">
            <Link
              href="https://weather-search-engine.vercel.app/"
              target="_blank"
            >
              <h3 className="websiteTitle hover:text-[#CEB195]">
                Weather Search Engine
              </h3>
            </Link>
            <h4 className="websiteInfo">即時天氣網站</h4>
            <h5 className="websiteContent">
              專案內容：
              <p>1. Next.js with React-ts </p>
              <p>2. RWD </p>
              <p>
                3. OpenData API (
                <Link href="https://openweathermap.org/" target="_blank">
                  <span className="hover:text-[#B0906F]">OpenWeather API</span>
                </Link>{" "}
                &{" "}
                <Link href="https://countrystatecity.in/" target="_blank">
                  <span className="hover:text-[#B0906F]">
                    Country State City API
                  </span>
                </Link>
                )
              </p>
            </h5>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center mt-12 md:flex-row">
        <div className="w-full flex flex-col md:flex-row">
          <div className="w-full md:w-[40vw]">
            <Link href="https://wedding-sample.vercel.app/" target="_blank">
              <Image
                alt="Wedding Sample"
                className="mx-auto w-[75vw] md:w-[30vw] hover:opacity-75"
                style={{ objectFit: "contain", objectPosition: "center" }}
                src={Wedding}
              />
            </Link>
          </div>
          <div className="w-full flex flex-col mt-12 md:w-[60vw] md:h-auto md:mt-0">
            <Link href="https://wedding-sample.vercel.app/" target="_blank">
              <h3 className="websiteTitle hover:text-[#CEB195]">
                Wedding Sample
              </h3>
            </Link>
            <h4 className="websiteInfo">婚禮資訊網站</h4>
            <h5 className="websiteContent">
              專案內容：
              <p>1. Next.js with React-ts </p>
              <p>2. RWD </p>
              <p>3. 搭配 Line Bot 使用</p>
              <p>4. 待完成：使用電子簽名簽到功能、祝福跑馬燈功能</p>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
