import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss";
import useFetch from "../../../hooks/useFetch";
import { useSelector } from "react-redux";
import Img from "../../../components/lazyLoadImage/Img";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";

const Banner = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { data, loading } = useFetch("/movie/upcoming");
  const { url } = useSelector((state) => state.home);

  useEffect(() => {
    const bg =
      url.backdrop +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);
  }, [data]);

  const searchQueryHandler = (e) => {
    if (query.length > 0 && e.key === "Enter") {
      navigate(`/search/${query}`);
    }
  };
  return (
    <div className="banner">
      {!loading && (
        <div className="backdrop-img">
          <Img src={background} />
        </div>
      )}
      <div className="opacity-layer"></div>
      <ContentWrapper>
        <div className="banner-content">
          <span className="title">Welcome</span>
          <span className="sub-title">
            Millions of movies, TV shows and people to discover. Explore now.
          </span>
          <div className="search-input">
            <input
              type="text"
              placeholder="Search for a movie or tv show..."
              onKeyUp={(e) => searchQueryHandler(e)}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button>Search</button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Banner;
