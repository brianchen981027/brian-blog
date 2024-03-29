import React from "react";

import { MailOutlined, PhoneOutlined } from "@ant-design/icons";
import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";

import InfoPic from "@/Images/InfoPic.jpg";

const About = () => {
  return (
    <div
      className="bg-[#FAF0E6] px-[5%] py-[15%] flex flex-col items-center justify-center"
      id="about"
    >
      <h1 className="text-[32px] text-[#CEB195] text-center sm:text-[36px] md:text-[48px]">
        ABOUT ME
      </h1>
      <div className="w-full flex flex-col items-center mt-12 md:flex-row">
        {/* Left */}
        <div className="w-full flex items-center justify-center md:w-[40%] md:h-[300px]">
          <Image
            alt="Brian's Blog"
            height={300}
            style={{ objectFit: "contain", objectPosition: "center" }}
            src={InfoPic}
          />
        </div>
        {/* Right */}
        <div className="w-full flex items-center mt-12 md:w-[60%] md:h-auto md:mt-0">
          <ul className="introduce">
            <li>
              <h1 className="text-[#9D7553] text-headerText font-bold">
                陳柏瑄 (Brian Chen)
              </h1>
            </li>
            <li>
              <h4 className="content">前端工程師 (Front-End Developer)</h4>
            </li>
            <li>
              <span className="content text-ellipsis break-words">
                擁有一年半前端開發經驗，熟悉Typescript、React。
                <br />
                追求簡潔易讀的程式碼，建立易讀、高擴充性的Component。
                <br />
                重視團隊合作與溝通，希望以最少的時間達成最大的效益。
                <br />
                我正在尋找一個能夠讓我穩定發揮並且不斷增進技術能力的工作環境，若您有相關的工作機會，請與我聯繫！
                <br />
                以下連結有更詳細說明過往經歷及作品集，非常感謝您抽空觀看，請多多指教，謝謝！
              </span>
            </li>
            <li className="flex items-baseline">
              <PhoneOutlined className="content mr-2" />
              <h4 className="content hover:text-[#CEB195]">0909-891639</h4>
            </li>
            <li className="flex items-baseline">
              <MailOutlined className="content mr-2" />
              <Link href="mailto:ahsuan1027@gmail.com">
                <h4 className="content hover:text-[#CEB195]">
                  ahsuan1027@gmail.com
                </h4>
              </Link>
            </li>
            <li className="mt-2">
              <Link
                href="https://www.cakeresume.com/me/brian.chen"
                target="_blank"
              >
                <Button className="mr-6" size="large">
                  CakeResume
                </Button>
              </Link>
              <Link href="https://github.com/brianchen981027" target="_blank">
                <Button size="large">GitHub</Button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
