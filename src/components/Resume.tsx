import React, { useMemo } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import FuJenLogo from '@/Images/FuJenLogo.png';
import ShoalterLogo from '@/Images/ShoalterLogo.png';

const Resume = () => {
  const horizontalContent = useMemo(
    () => (
      <div className="hidden md:w-full md:flex md:flex-col md:items-center md:justify-center">
        <div className="w-5/6 mt-10 flex items-center justify-center">
          <div className="circle" />
          <div className="divider" />
          <div className="circle" />
        </div>
        <div className="w-full mt-6 flex justify-between">
          <div className="flex flex-col">
            <Link href="https://www.fju.edu.tw/" target="_blank">
              <Image
                alt="Fu Jen University"
                className="mx-auto hover:bg-[#FAF0E6]"
                height={125}
                style={{ objectFit: "contain", objectPosition: "center" }}
                src={FuJenLogo}
              />
            </Link>
            <h1 className="w-full mt-4 text-start resumeTitle">
              <Link href="https://www.fju.edu.tw/" target="_blank">
                <span className="hover:text-[#FAF0E6]">
                  天主教輔仁大學 (Fu Jen University)
                </span>
              </Link>
              <br />/ 資訊管理學系 (2017/09 ~ 2021/06)
            </h1>
            <ul className="mt-4 w-72 flex flex-col lg:w-96">
              <li>
                <h5 className="resumeSubTitle">
                  畢業專題 - 活動管理系統暨人臉辨識相關之應用 (2019/09 ~ 2020/06)
                </h5>
                <span className="resumeContent">
                  1. 使用 React.js 實作活動管理系統，並透過人臉辨識引擎分發使用者之活動照片到各自的相簿，也可以使用人臉辨識功能參與可簽到簽退之活動。
                </span>
                <br />
                <span className="resumeContent">
                  2. 考慮到隱私權問題，本系統也有提供QRCode票券可簽到簽退之功能，以解決使用者有隱私權疑慮的相關問題。
                </span>
              </li>
              <li className="mt-3">
                <h5 className="resumeSubTitle">
                  系學會活動長 (2018/06 ~ 2019/06)
                </h5>
                <span className="resumeContent">
                  接任13系聯合舞會的總召，舉辦一個600人的大活動，從活動策劃、尋找贊助、會場布置規劃、宣傳文案發想及活動人力配置皆參與其中
                </span>
              </li>
              <li className="mt-3">
                <h5 className="resumeSubTitle">排球校隊 (2017/09 ~ 2018/12)</h5>
                <span className="resumeContent">
                  與隊友一同奮戰，體會團隊合作的重要性及享受運動的趣味
                </span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <Link href="https://www.shoalter.com/" target="_blank">
              <Image
                alt="Shoalter Technology Ltd."
                className="mx-auto mt-6 hover:bg-[#FAF0E6]"
                height={100}
                style={{ objectFit: "contain", objectPosition: "center" }}
                src={ShoalterLogo}
              />
            </Link>
            <h1 className="mt-4 text-end resumeTitle">
              <Link href="https://www.shoalter.com/" target="_blank">
                <span className="hover:text-[#FAF0E6]">
                  易貿創投有限公司 (Shoalter Technology Ltd.)
                </span>
              </Link>
              <br />/ 前端工程師 (2021/08 ~ Now)
            </h1>
            <ul className="mt-4 w-72 flex flex-col float-right lg:w-full">
              <li>
                <h5 className="resumeSubTitle">無人商店購物平台</h5>
                <span className="resumeContent">
                  1. 使用 Next.js 搭配 Redux-Saga & Ionic Framework
                  實作類APP式網頁 (Web View App)
                </span>
                <br />
                <span className="resumeContent">
                  2. 實作內容為平台搜尋功能，串接Elastic Search
                  API，實現商品即時搜尋的內容
                </span>
              </li>
              <li className="mt-3">
                <h5 className="resumeSubTitle">無人商店後台管理系統 (CMS)</h5>
                <span className="resumeContent">
                  1. 使用Gastby Framework 搭配 React 建構後臺管理系統
                </span>
                <br />
                <span className="resumeContent">
                  2. 實作內容為類別管理功能(Category
                  Management)，實現階層式類別管理的需求
                </span>
              </li>
              <li className="mt-3">
                <h5 className="resumeSubTitle">
                  物流倉儲後台管理系統 (FRS CMS)
                </h5>
                <span className="resumeContent">
                  1. 使用Gastby Framework 搭配 React 建構後臺管理系統
                </span>
                <br />
                <span className="resumeContent">
                  2.
                  實作內容為物流運量管理、監測每日運量限制及自動增加每日庫存限制
                </span>
              </li>
              <li className="mt-3">
                <h5 className="resumeSubTitle">
                  <Link href="https://ecomart.hktvmall.com/" target="_blank">
                    <span className="hover:text-[#FAF0E6]">
                      Ecomart 二手購物平台{" "}
                    </span>
                  </Link>
                  (香港最大二手平台，隸屬於{" "}
                  <Link href="https://www.hktvmall.com/" target="_blank">
                    <span className="hover:text-[#FAF0E6]">HKTV Mall</span>
                  </Link>
                  之下)
                </h5>
                <span className="resumeContent">
                  實作內容為優化系統使用體驗和維護QA測試回來的Error
                  Section及User回報的UI bug
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    ),
    []
  );

  const verticalContent = useMemo(
    () => (
      <div className="flex items-start mt-10 md:hidden">
        <div className="mr-4 flex flex-col">
          <div className="circle" />
          <div className="resumeContentDivider">
            <Link href="https://www.fju.edu.tw/" target="_blank">
              <Image
                alt="Fu Jen University"
                className="mx-auto hover:bg-[#FAF0E6]"
                height={125}
                style={{ objectFit: "contain", objectPosition: "center" }}
                src={FuJenLogo}
              />
            </Link>
            <h1 className="w-full mt-4 text-start resumeTitle">
              <Link href="https://www.fju.edu.tw/" target="_blank">
                <span className="hover:text-[#FAF0E6]">
                  天主教輔仁大學 (Fu Jen University)
                </span>
              </Link>
              <br />/ 資訊管理學系 (2017/09 ~ 2021/06)
            </h1>
            <ul className="mt-4">
              <li>
                <h5 className="resumeSubTitle">
                  畢業專題 - 活動管理系統暨人臉辨識相關之應用 (2019/09 ~
                  2020/06)
                </h5>
                <span className="resumeContent">
                  1. 使用 React.js
                  實作活動管理系統，並透過人臉辨識引擎分發使用者之活動照片到各自的相簿，也可以使用人臉辨識功能參與可簽到簽退之活動。
                </span>
                <br />
                <span className="resumeContent">
                  2.
                  考慮到隱私權問題，本系統也有提供QRCode票券可簽到簽退之功能，以解決使用者有隱私權疑慮的相關問題。
                </span>
              </li>
              <li className="mt-3">
                <h5 className="resumeSubTitle">
                  系學會活動長 (2018/06 ~ 2019/06)
                </h5>
                <span className="resumeContent">
                  接任13系聯合舞會的總召，舉辦一個600人的大活動，從活動策劃、尋找贊助、會場布置規劃、宣傳文案發想及活動人力配置皆參與其中
                </span>
              </li>
              <li className="mt-3">
                <h5 className="resumeSubTitle">排球校隊 (2017/09 ~ 2018/10)</h5>
                <span className="resumeContent">
                  與隊友一同奮戰，體會團隊合作的重要性及享受運動的趣味
                </span>
              </li>
            </ul>
          </div>
          <div className="circle" />
          <div className="resumeContentDivider">
            <Link href="https://www.shoalter.com/" target="_blank">
              <Image
                alt="Shoalter Technology Ltd."
                className="mx-auto mt-6 hover:bg-[#FAF0E6]"
                height={100}
                style={{ objectFit: "contain", objectPosition: "center" }}
                src={ShoalterLogo}
              />
            </Link>
            <h1 className="mt-4 resumeTitle">
              <Link href="https://www.shoalter.com/" target="_blank">
                <span className="hover:text-[#FAF0E6]">
                  易貿創投有限公司 (Shoalter Technology Ltd.)
                </span>
              </Link>
              <br />/ 前端工程師 (2021/08 ~ Now)
            </h1>
            <ul className="mt-4">
              <li>
                <h5 className="resumeSubTitle">無人商店購物平台</h5>
                <span className="resumeContent">
                  1. 使用 Next.js 搭配 Redux-Saga & Ionic Framework 實作
                  類APP式網頁 (Web View App)
                </span>
                <br />
                <span className="resumeContent">
                  2. 實作內容為平台搜尋功能，串接Elastic Search
                  API，實現商品即時搜尋的內容
                </span>
              </li>
              <li className="mt-3">
                <h5 className="resumeSubTitle">無人商店後台管理系統 (CMS)</h5>
                <span className="resumeContent">
                  1. 使用Gastby Framework 搭配 React 建構後臺管理系統
                </span>
                <br />
                <span className="resumeContent">
                  2. 實作內容為類別管理功能(Category
                  Management)，實現階層式類別管理的需求
                </span>
              </li>
              <li className="mt-3">
                <h5 className="resumeSubTitle">
                  物流倉儲後台管理系統 (FRS CMS)
                </h5>
                <span className="resumeContent">
                  1. 使用Gastby Framework 搭配 React 建構後臺管理系統
                </span>
                <br />
                <span className="resumeContent">
                  2.
                  實作內容為物流運量管理、監測每日運量限制及自動增加每日庫存限制
                </span>
              </li>
              <li className="mt-3">
                <h5 className="resumeSubTitle">
                  <Link href="https://ecomart.hktvmall.com/" target="_blank">
                    <span className="hover:text-[#FAF0E6]">
                      Ecomart 二手購物平台
                    </span>
                  </Link>
                  (香港最大二手平台，隸屬於{" "}
                  <Link href="https://www.hktvmall.com/" target="_blank">
                    <span className="hover:text-[#FAF0E6]">HKTV Mall 之下</span>
                  </Link>
                  )
                </h5>
                <span className="resumeContent">
                  實作內容為優化系統使用體驗和維護QA測試回來的Error
                  Section及User回報的UI bug
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    ),
    []
  );

  return (
    <div
      className="bg-[#CDA581] px-[5%] py-[15%] flex flex-col md:items-center md:py-[10%] md:min-h-fit "
      id="resume"
    >
      <h1 className="text-[32px] text-[#FAF0E6] text-center sm:text-[36px] md:text-[48px]">
        RESUME
      </h1>
      {horizontalContent}
      {verticalContent}
    </div>
  );
};

export default Resume;
