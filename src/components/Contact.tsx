import Input from "./Input";
import Image from "next/image";
import ImageCollection from "./ImageCollection";
import Footer from "./Footer";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleInputChange = (field: string) => (value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const validateForm = () => {
    const errors = {
      name: formData.name.trim().length < 2,
      email: !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
        formData.email
      ),
      message: formData.message.trim().length < 10,
    };

    return !Object.values(errors).some((error) => error);
  };

  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (validateForm()) {
      setSubmitting(true);

      try {
        const response = await fetch("/api/send", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            data.error || "Une erreur est survenue lors de l'envoi du message"
          );
        }

        setFormSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      } catch (error) {
        console.error("Erreur lors de l'envoi du message:", error);
        setSubmitError(
          error instanceof Error
            ? error.message
            : "Une erreur est survenue lors de l'envoi du message"
        );
      } finally {
        setSubmitting(false);
      }
    }
  };

  return (
    <div className="flex flex-col bg-black items-center pt-[40px]">
      <h2 className="text-white mb-[40px] font-semibold text-2xl">
        📩 Contact
      </h2>
      <p className="max-w-lg text-center mb-[40px]">
        Une opportunité, une question ou simplement envie d'échanger ? N'hésitez
        pas à me laisser un message, je vous répondrai rapidement.
      </p>

      {formSubmitted && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6 max-w-lg w-full">
          <p className="text-center">
            Votre message a bien été envoyé ! Je vous répondrai dans les plus
            brefs délais.
          </p>
        </div>
      )}

      {submitError && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-6 max-w-lg w-full">
          <p className="text-center">{submitError}</p>
        </div>
      )}
      <form onSubmit={handleSubmit} className="w-full max-w-lg">
        <Input
          type="name"
          value={formData.name}
          onChange={handleInputChange("name")}
        />
        <Input
          type="email"
          value={formData.email}
          onChange={handleInputChange("email")}
        />
        <Input
          type="message"
          value={formData.message}
          onChange={handleInputChange("message")}
        />
        <button
          type="submit"
          className="mt-6 mb-20 px-4 py-3 bg-primary backdrop-blur-sm border rounded-lg hover:bg-primary/50 transition-all duration-300 text-black font-medium w-full"
          disabled={submitting}
        >
          <div className="flex flex-row items-center justify-center">
            <p className="font-semibold text-[20px]">
              {submitting ? "Envoi en cours..." : "Envoyer"}
            </p>
            {!submitting && (
              <Image
                src={ImageCollection.sendIcon}
                alt="send icon"
                width={24}
                height={24}
                className="ml-2"
              />
            )}
          </div>
        </button>
      </form>

      <a
        className="w-12 h-12 bg-secondary flex items-center justify-center z-10 mb-[-24px] cursor-pointer"
        href="#home"
      >
        <Image
          src={ImageCollection.upIcon}
          alt="go up icon"
          className="self-center"
        />
      </a>
      <Footer />
    </div>
  );
}
