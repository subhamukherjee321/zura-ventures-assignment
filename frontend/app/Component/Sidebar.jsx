"use client";

import Image from "next/image";
import logoIcon from "../../public/assets/svg/logo-icon.svg";
import settings2 from "../../public/assets/svg/settings2.svg";
import Link from "next/link";

const navigation = [
  { id: 1, title: "Projects", href: "/" },
  { id: 2, title: "Widget Configurations", href: "/widget" },
  { id: 3, title: "Deployment", href: "/deployment" },
  { id: 4, title: "Pricing", href: "/pricing" },
];

// className="flex flex-1 flex-col gap-y-7"

export default function Sidebar() {
  return (
    <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 px-6">
      <div className="flex h-16 shrink-0 items-center">
        <div>
          <Image src={logoIcon} alt="Logo_Icon" className="w-[80%]" />
        </div>
        <div className="text-primary text-3xl font-bold">LAMA.</div>
      </div>

      <p className="text-sm mt-[-15px] font-[500]">Podcast Upload Flow</p>

      <nav className="flex flex-1 flex-col">
        <ol className="flex flex-1 flex-col gap-y-4">
          {navigation?.map((ele, ind) => (
            <Link  key={ele?.id} href={ele.href}>
            <li
             
              className="flex items-center gap-2 p-3 rounded-3xl hover:bg-[#1D1B2014] cursor-pointer active:bg-primary active:text-white"
            >
              <div className="font-[500] bg-[#1D1B201F] active:bg-black rounded-full w-[25px] h-[25px] flex justify-center items-center">
                {ind + 1}
              </div>
              <div>{ele?.title}</div>
            </li>
            </Link>
          ))}
        </ol>
      </nav>

      <div className="border-t border-gray-400 mt-[16rem]">

      </div>

      <Link href={"/user/settings"} className="flex items-center gap-2 mt-[1rem] p-3 rounded-3xl hover:bg-[#1D1B2014] cursor-pointer active:bg-primary active:text-white">
        <div>
          <Image src={settings2} alt="Settings" />
        </div>
        <div>
          Settings
        </div>
      </Link>
    </div>
  );
}