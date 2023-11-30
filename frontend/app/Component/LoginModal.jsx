"use client";

import { makeRequest } from "@/lib/api";
import { useAuthStore } from "@/store/auth";
import { useProjectStore } from "@/store/project";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import close from "../../public/assets/svg/close.svg";
import InputComponent from "../Component/InputComponent";
import notification from "./toast";

const login = async (data) => {
  const res = await makeRequest("POST", "/auth/login", data);
  return res;
};

const LoginModal = ({ isOpen, onClose }) => {
  const { setLoading } = useProjectStore((state) => state);
  const { setAuth } = useAuthStore((state) => state);
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    setError,
  } = useForm();
  const onSubmit = (data) => {
    setIsLoading(true);
    login(data)
      .then((res) => {
        if (res?.data) {
          setAuth(res?.data);
          typeof window !== "undefined" && localStorage.setItem("zura-store", JSON.stringify(res?.data));
        }
        setIsLoading(false);
        onClose();
        setLoading();
        notification("success", "Successfully Login");
      })
      .catch((error) => {
        const err = error?.response?.data?.message;
        setIsLoading(false);
        if (err) {
          notification("error", err);
        } else {
          notification("error", "Something wen't wrong");
        }
      });
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
        {/* Modal */}
        <div className="bg-white p-8 rounded-lg w-[25%] relative">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-black"
          >
            <Image src={close} alt="Close-Button" />
          </button>

          {/* Title */}
          <h2 className="text-2xl font-semibold mb-4">Log In</h2>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Username */}
            <div className="mb-4">
              <InputComponent
                label="Username"
                name={"username"}
                register={register}
                errors={errors}
                placeholder={"Type username"}
                type={"text"}
                required={true}
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              {/* <label className="block text-gray-700 mb-2">Email</label> */}
              <InputComponent
                label="Email"
                name={"email"}
                register={register}
                errors={errors}
                placeholder={"Enter Email"}
                type={"email"}
                required={true}
                options={{
                  maxLength: {
                    value: 50,
                    message: "Invalid Email",
                  },
                  pattern: {
                    value: /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/,
                    message: "Invalid Email",
                  },
                }}
              />
            </div>

            {/* Password */}
            <div className="mb-6">
              <InputComponent
                label="Password"
                name={"password"}
                register={register}
                errors={errors}
                placeholder={"Type password"}
                type={"password"}
                required={true}
              />
            </div>

            {/* Login button */}
            {isLoading ? (
              <button
                disabled
                type="submit"
                className="w-full flex justify-center items-center cursor-not-allowed bg-primary text-white py-2 rounded-md hover:bg-purple-600 focus:outline-none"
              >
                <div>
                  <svg
                    aria-hidden="true"
                    role="status"
                    className="inline w-4 h-4 mr-3 text-white animate-spin"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="#E5E7EB"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="mt-[2px]">Loading...</div>
              </button>
            ) : (
              <button
                type="submit"
                className="w-full bg-primary text-white py-2 rounded-md hover:bg-purple-600 focus:outline-none"
              >
                Log In
              </button>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginModal;
