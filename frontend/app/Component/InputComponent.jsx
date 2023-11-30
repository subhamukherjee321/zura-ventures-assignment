import { useState } from "react";

const InputComponent = ({
  label,
  name,
  register,
  errors,
  placeholder,
  type,
  required,
  options,
  disabled = false,
}) => {
  const [show, setShow] = useState(false);

  return (
    <div className="text-sm relative">
      <label className="font-medium" htmlFor={name}>
        {label}
        {required && <span>*</span>}
      </label>

      {type === "textarea" ? (
        <textarea
          id={name}
          name={name}
          {...register(name, {
            required: required ? `${label} is required` : false,
            ...options,
          })}
          placeholder={`${placeholder}`}
          className="block w-full h-40 rounded border border-[#000000]/20 2xl:p-4 p-3 font-light placeholder:text-gray-400 focus:border-[#000000]/50 focus:outline-none"
          rows={3}
          autoComplete={"off"}
        />
      ) : (
        <input
          id={name}
          name={name}
          {...register(name, {
            required: required ? `${label} is required` : false,
            ...options,
          })}
          disabled={disabled}
          type={show ? "text" : type}
          placeholder={`${placeholder}`}
          className="w-full rounded border border-[#000000]/20 2xl:px-4 px-3 py-2.5 font-light placeholder:text-gray-400 focus:border-[#000000]/50 focus:outline-none mt-2"
          autoComplete={"off"}
        />
      )}

      {type === "password" && (
        <>
          {
            show ?   <div
              className="flex items-center justify-end absolute w-10 pt-0 cursor-pointer 2xl:top-1 right-2"
               onClick={() => setShow(!show)}
             >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#BBBDBE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye-off"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><line x1="2" x2="22" y1="2" y2="22"/></svg> 
               </div> :  <div
             className="flex items-center justify-end absolute w-10 pt-1 cursor-pointer 2xl:top-11 top-5 right-2"
              onClick={() => setShow(!show)}
            > 
            <svg
            width="22"
            height="16"
            viewBox="0 0 22 16"
           fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className=""
          >
            <path
              d="M11 0.5C6 0.5 1.73 3.61 0 8C1.73 12.39 6 15.5 11 15.5C16 15.5 20.27 12.39 22 8C20.27 3.61 16 0.5 11 0.5ZM11 13C8.24 13 6 10.76 6 8C6 5.24 8.24 3 11 3C13.76 3 16 5.24 16 8C16 10.76 13.76 13 11 13ZM11 5C9.34 5 8 6.34 8 8C8 9.66 9.34 11 11 11C12.66 11 14 9.66 14 8C14 6.34 12.66 5 11 5Z"
              fill="#BBBDBE"
            />
          </svg>
            </div> 
          }
        </>
      )}
      {errors[name] && (
        <p className="mt-1.5 text-sm text-red-500">{errors[name].message}</p>
      )}
    </div>
  );
};

InputComponent.defaultProps = {
  type: "text",
  required: false,
  options: {},
  placeholder: "",
};

export default InputComponent;