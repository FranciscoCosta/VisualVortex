import React, { useState, useEffect } from "react";
import { Card, FormField, Loader } from "../components";

const RenderCards = ({ data, title }) => {
  if (data?.length > 0)
    return data.map((post) => <Card key={post._id} {...post} />);
  return <h2 className="mt-5 font-bold text-[#6449ff] text-x1">{title}</h2>;
};

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState(null);

  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://virtualvortex.onrender.com/api/v1/post",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (response.ok) {
          const data = await response.json();
          setAllPosts(data.data.reverse());
        }
      } catch (error) {
        alert(error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    setSearchTimeout(
      setTimeout(() => {
        const searchResult = allPosts.filter(
          (item) =>
            item.name.toLowerCase().includes(searchText.toLowerCase()) ||
            item.prompt.toLowerCase().includes(searchText.toLowerCase())
        );
        setSearchedResults(searchResult);
      }, 500)
    );
  };

  return (
    <section className="max-w-7x1 mx-auto">
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">
          Galeria da Comunidadade:
        </h1>
        <p className="mt-2 text-[#66e75] text-[16px] max-w[500px]">
          Navega por esta colecção de imagens únicas geradas pela DALL-E AI
        </p>
      </div>
      <div className="mt-16">
        <FormField
          Label="Search post"
          type="text"
          name="text"
          placeholder="Search post"
          value={searchText}
          handleChange={handleSearchChange}
        />
      </div>
      <div className="mt-10">
        {loading ? (
          <div className="flex justify-center items-center">
            <Loader />
          </div>
        ) : (
          <>
            {searchText && (
              <h2 className="font-medium text-[#666e75] text-x1 mb-3">
                Mostrando resultados para: {searchText}
              </h2>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xs:grid-cols- 2 gap-4">
              {searchText ? (
                <RenderCards
                  data={searchedResults}
                  title="Nenhum resultado encontrado."
                />
              ) : (
                <RenderCards data={allPosts} title="Nenhum post encontrado." />
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Home;
