"use client";

import InputComponent from "@/app/Component/InputComponent";
import Image from "next/image";
import { useForm } from "react-hook-form";
import avatar from "../../../public/assets/svg/avatar.svg";
import downArrow from "../../../public/assets/svg/down-arrow.svg";
import englishFlag from "../../../public/assets/svg/english-flag.svg";
import homeIcon from "../../../public/assets/svg/purple-home.svg";

const page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    setError,
  } = useForm();

  return (
    <div className="w-full min-h-screen mx-6 px-16">
      <nav className="flex justify-between items-center mt-10 w-full">
        <div className="flex items-center gap-3">
          <div className="w-[13%]">
            <Image src={homeIcon} alt="Home-Icon" className="w-full" />
          </div>
          <div>/</div>
          <div className="text-primary font-bold">Account Settings</div>
        </div>

        <div className="flex items-center">
          <div className="flex items-center gap-3">
            <div className="w-[25%]">
              <Image src={downArrow} alt="down-arrow-icon" className="w-full" />
            </div>
            <div className="font-bold text-lg">EN</div>
            <div className="w-[20%]">
              <Image src={englishFlag} alt="English-Flag" className="w-full" />
            </div>
          </div>

          <div className="w-[18%]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
            >
              <path
                d="M31.9998 58C34.9332 58 37.3332 55.6 37.3332 52.6667H26.6665C26.6665 55.6 29.0665 58 31.9998 58ZM47.9998 42V28.6667C47.9998 20.48 43.6532 13.6267 35.9998 11.8133V10C35.9998 7.78667 34.2132 6 31.9998 6C29.7865 6 27.9998 7.78667 27.9998 10V11.8133C20.3732 13.6267 15.9998 20.4533 15.9998 28.6667V42L10.6665 47.3333V50H53.3332V47.3333L47.9998 42ZM42.6665 44.6667H21.3332V28.6667C21.3332 22.0533 25.3598 16.6667 31.9998 16.6667C38.6398 16.6667 42.6665 22.0533 42.6665 28.6667V44.6667Z"
                fill="#3C3C3C"
              />
            </svg>
          </div>
        </div>
      </nav>

      <h1 className="text-primary text-3xl font-bold mt-4">Account Settings</h1>

      <form className="flex items-center mt-6 gap-8">
        <div>
        <div className="border-2 border-blue-500 w-[40%] rounded-full mb-3">
          <Image src={avatar} alt="User-Avatar" className="w-full" />
        </div>
        <div>
            <input type="file" />
        </div>
        </div>

        <div>
          <InputComponent
            label="Username"
            name={"username"}
            register={register}
            errors={errors}
            placeholder={"Type username"}
            type={"text"}
            required={false}
          />
        </div>
        <div>
          <InputComponent
            label="Email"
            name={"email"}
            register={register}
            errors={errors}
            placeholder={"Type username"}
            type={"email"}
            required={false}
          />
        </div>

        <div>
            <button className="py-2 px-5 rounded-sm bg-primary text-white font-[500]" type="submit">
                Save
            </button>
        </div>
      </form>

      <h1 className="text-primary text-3xl font-bold mt-10">Subscriptions</h1>

      <div className="bg-primary py-3 px-10 flex gap-6 justify-between items-center my-2 rounded-xl">
        <div className="text-white">
          You are currently on the Ques AI Basic Plan!
        </div>
        <div>
          <button className="bg-white text-primary py-1 px-5 font-bold rounded-md">
            Upgrade
          </button>
        </div>
      </div>

      <h4 className="text-red-600 font-[500] cursor-pointer">
        Cancel Subscription
      </h4>
    </div>
  );
};

export default page;
