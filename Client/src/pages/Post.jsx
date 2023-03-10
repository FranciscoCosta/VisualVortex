import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { preview } from "../assets";
import { FormField, Loader } from "../components";
import { getRandomPrompt } from "../utils";

const Post = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    prompt: "",
    photo: "",
  });

  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSumbit = () => {};
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSurpriseMe = () => {
    const randomPrompt = getRandomPrompt();
    setForm({ ...form, prompt: randomPrompt });
  };
  const generateImage = () => {};

  return (
    <section className="max-w-7x1 mx-auto">
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">Criar:</h1>
        <p className="mt-2 text-[#66e75] text-[16px] max-w[500px]">
          Cria uma imagem , o limite é a tua imaginação e compartilha com os
          teus amigos.
        </p>
      </div>
      <form className="mt-16 max-w-3x1" onSubmit={handleSumbit}>
        <div className="flex flex-col gap-5">
          <FormField
            label="Name"
            type="text"
            name="name"
            placeholder="Francisco Costa"
            value={form.name}
            handleChange={handleChange}
          />

          <FormField
            label="Prompt"
            type="text"
            name="name"
            placeholder="A digital art illustration of a city skyline at night."
            value={form.prompt}
            handleChange={handleChange}
            isSurpriseMe
            handleSurpriseMe={handleSurpriseMe}
          />

          <div className="relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-64 p-3 h-64 flex justify-center items-center">
            {form.photo ? (
              <img
                src={form.photo}
                alt={form.prompt}
                className="w-full h-full object-contain"
              />
            ) : (
              <img
                src={preview}
                alt="preview"
                className="w-9/12 h-9/12 object-contain opacity-40"
              />
            )}

            {generatingImg && (
              <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg">
                <Loader />
              </div>
            )}
          </div>
        </div>
        <div className="mt-5 flex gap-5">
          <button
            type="button"
            onClick={generateImage}
            className="text-white bg-green-700 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            {generatingImg ? "Criando..." : "Criar"}
          </button>
        </div>

        <div className="mt-10">
          <p className="mt-2 tex-[#666e75] text-[14px]">
            Quando criares a imagem podes compartilhar com outros na comunidade.
          </p>
          <button
            type="submit"
            className="mt-3 text-white bg-[#6469ff] fonr-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            {loading ? "Carregando ..." : "Compartilhar"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Post;
