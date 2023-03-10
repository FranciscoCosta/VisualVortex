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
  const handleChange = (e) => {};
  const handleSurpriseMe = () => {};

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
            lavbel="Name"
            type="text"
            name="name"
            placeholder="Francisco Costa"
            value={form.name}
            onChange={handleChange}
          />

          <FormField
            lavbel="Prompt"
            type="text"
            name="name"
            placeholder="A digital art illustration of a city skyline at night."
            value={form.prompt}
            onChange={handleChange}
            isSurpriseMe
            handleSurpriseMe={handleSurpriseMe}
          />
        </div>
      </form>
    </section>
  );
};

export default Post;
