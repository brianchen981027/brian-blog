import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import Weather from '@/Images/weather.jpg';

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
          <div className="w-full md:w-[40%]">
            <Link
              href="https://weather-search-engine.vercel.app/"
              target="_blank"
            >
              <Image
                alt="Fu Jen University"
                className="mx-auto hover:opacity-75"
                width={200}
                objectFit="contain"
                objectPosition="center"
                src={Weather}
              />
            </Link>
          </div>
          <div className="w-full flex flex-col mt-12 md:w-[60%] md:h-auto md:mt-0">
            <Link
              href="https://weather-search-engine.vercel.app/"
              target="_blank"
            >
              <h1 className="websiteTitle hover:text-[#CEB195]">
                Weather Search Engine
              </h1>
            </Link>
            <h3 className="websiteInfo">即時天氣網站</h3>
            <h3 className="websiteContent">
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
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
