import React, { useState } from "react";

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
  const [error, setError] = useState<string>("");
  const [touched, setTouched] = useState<boolean>(false);

  const getDefaultPlaceholder = () => {
    switch (type) {
      case "name":
        return "Nom";
      case "email":
        return "Email";
      case "message":
        return "Message";
      default:
        return "";
    }
  };

  const validateInput = (val: string) => {
    if (!val.trim()) {
      return "Ce champ est requis";
    }

    switch (type) {
      case "name":
        if (val.trim().length < 2) {
          return "Le nom doit contenir au moins 2 caractères";
        }
        break;
      case "email":
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(val)) {
          return "Veuillez entrer une adresse email valide";
        }
        break;
      case "message":
        if (val.trim().length < 10) {
          return "Le message doit contenir au moins 10 caractères";
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

  const inputClasses = `w-full bg-[#f2f2f7] p-4 rounded-none text-gray-700 focus:outline-none ${
    error && touched ? "border-2 border-red-500" : ""
  }`;

  return (
    <div className="w-full max-w-lg mb-4">
      {type === "message" ? (
        <>
          <textarea
            placeholder={placeholder || getDefaultPlaceholder()}
            className={`${inputClasses} h-48 resize-none`}
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
