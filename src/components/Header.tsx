import React, { useState } from 'react';

import { MenuOutlined } from '@ant-design/icons';
import { Drawer } from 'antd';
import Image from 'next/image';

import HeaderIcon from '@/Images/BrianIcon.png';

const Header = () => {
  const [open, setOpen] = useState(false);
  const handleClickScroll = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 z-50 grid grid-cols-2 w-full h-auto bg-[#DABEA7] shadow-md px-7 py-5 md:px-12">
      {/* Left */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          alt="Brian's Blog"
          width={175}
          objectFit="contain"
          objectPosition="left"
          src={HeaderIcon}
        />
      </div>

      {/* Right */}
      <ul className="hidden sm:flex sm:items-center sm:justify-end">
        <li className="headerText">
          <h3 onClick={() => handleClickScroll("about")}>About</h3>
        </li>
        <li className="headerText">
          <h3 onClick={() => handleClickScroll("resume")}>Resume</h3>
        </li>
        <li className="headerText">
          <h3 onClick={() => handleClickScroll("works")}>Works</h3>
        </li>
      </ul>

      <div
        className="menu flex items-center justify-end sm:hidden"
        onClick={() => setOpen(true)}
      >
        <MenuOutlined className="text-3xl text-white" />
      </div>

      {/* Drawer */}
      <Drawer
        title="Hsuan's Blog"
        width="75%"
        bodyStyle={{
          color: "#9D7553",
          fontFamily: "Comic Sans MS, Trebuchet MS",
          fontSize: "24px",
          textAlign: "center",
        }}
        headerStyle={{
          background: "#DABEA7",
          fontFamily: "Comic Sans MS, Trebuchet MS",
          textAlign: "center",
        }}
        closable={false}
        open={open}
        onClose={() => setOpen(false)}
      >
        <ul className="flex flex-col items-center">
          <li className="w-full rounded-md hover:bg-[#DABEA7]">
            <h3
              className="py-2 hover:text-[#FFFAF0]"
              onClick={() => {
                setOpen(false);
                handleClickScroll("about");
              }}
            >
              About
            </h3>
          </li>
          <li className="w-full rounded-md hover:bg-[#DABEA7]">
            <h3
              className="py-2 hover:text-[#FFFAF0]"
              onClick={() => {
                setOpen(false);
                handleClickScroll("resume");
              }}
            >
              Resume
            </h3>
          </li>
          <li className="w-full rounded-md hover:bg-[#DABEA7]">
            <h3
              className="py-2 hover:text-[#FFFAF0]"
              onClick={() => {
                setOpen(false);
                handleClickScroll("works");
              }}
            >
              Works
            </h3>
          </li>
        </ul>
      </Drawer>
    </header>
  );
};

export default Header;
