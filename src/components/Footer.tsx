import React from "react";

import {
  FacebookOutlined,
  InstagramOutlined,
  LinkedinFilled,
  MailFilled,
} from "@ant-design/icons";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="z-50 h-auto bg-[#876D5A] shadow-md md:px-12">
      <div className="h-[216px] flex flex-col items-center justify-center">
        <h1 className="text-footerText text-[#FFFAF0] font-normal tracking-wide py-4">
          Contact Me
        </h1>
        <div className="flex">
          <Link href="https://www.facebook.com/Ahsuan.Chen" target="_blank">
            <FacebookOutlined className="footerIcon" alt="Facebook" />
          </Link>
          <Link href="https://www.instagram.com/ahsuan1027/" target="_blank">
            <InstagramOutlined className="footerIcon" alt="Instagram" />
          </Link>
          <Link href="mailto:ahsuan1027@gmail.com">
            <MailFilled className="footerIcon" alt="Mail" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/brianchen981027/"
            target="_blank"
          >
            <LinkedinFilled className="footerIcon" alt="LinkedIn" />
          </Link>
        </div>
        <h4 className="text-xs sm:text-sm text-[#FFFAF0] font-normal py-4">
          Copyright © 2023 Brian Chen. All Rights Reserved
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
