import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

type InputProps = {
  type: "name" | "email" | "message";
  placeholder?: string;
  onChange?: (value: string) => void;
  value?: string;
};

export default function Input({
  type,
  placeholder,
  onChange,
  value,
}: InputProps) {
  const { t } = useLanguage();
  const [error, setError] = useState<string>("");
  const [touched, setTouched] = useState<boolean>(false);

  const getDefaultPlaceholder = () => {
    switch (type) {
      case "name":
        return t("input.name");
      case "email":
        return t("input.email");
      case "message":
        return t("input.message");
      default:
        return "";
    }
  };

  const validateInput = (val: string) => {
    if (!val.trim()) {
      return t("input.required");
    }

    switch (type) {
      case "name":
        if (val.trim().length < 2) {
          return t("input.name.error");
        }
        break;
      case "email":
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(val)) {
          return t("input.email.error");
        }
        break;
      case "message":
        if (val.trim().length < 10) {
          return t("input.message.error");
        }
        break;
    }

    return "";
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const val = e.target.value;
    if (onChange) {
      onChange(val);
    }

    if (touched) {
      setError(validateInput(val));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setTouched(true);
    setError(validateInput(e.target.value));
  };

  const inputClasses = `w-full sm:w-[400px] md:w-[500px] bg-[#f2f2f7] p-4 rounded-none text-gray-700 focus:outline-none ${
    error && touched ? "border-2 border-red-500" : ""
  }`;

  return (
    <div className="w-full max-w-lg mb-4 flex justify-center lg:block">
      {type === "message" ? (
        <>
          <textarea
            placeholder={placeholder || getDefaultPlaceholder()}
            className={`${inputClasses} h-48 resize-none w-full sm:w-[400px] md:w-[500px]`}
            required
            value={value || ""}
            onChange={handleChange}
            onBlur={handleBlur}
            minLength={10}
          />
        </>
      ) : (
        <>
          <input
            type={type === "email" ? "email" : "text"}
            placeholder={placeholder || getDefaultPlaceholder()}
            className={inputClasses}
            required
            value={value || ""}
            onChange={handleChange}
            onBlur={handleBlur}
            minLength={type === "name" ? 2 : undefined}
            pattern={
              type === "email"
                ? "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                : undefined
            }
          />
        </>
      )}
      {error && touched && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}
