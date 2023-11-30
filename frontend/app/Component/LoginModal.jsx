"use client";

import Image from "next/image";
import { useForm } from "react-hook-form";
import close from "../../public/assets/svg/close.svg";
import InputComponent from "../Component/InputComponent";

const LoginModal = ({ isOpen, onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    setError,
  } = useForm();

  const onSubmit = (data) => {
    console.log("formData", data);
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
                name={"aadhar_card_number"}
                register={register}
                errors={errors}
                placeholder={"Type password"}
                type={"password"}
                required={true}
              />
            </div>

            {/* Login button */}
            <button
              type="submit"
              className="w-full bg-primary text-white py-2 rounded-md hover:bg-purple-600 focus:outline-none"
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginModal;
