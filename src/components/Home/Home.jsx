import React from "react";
import { NavLinks } from "../Content-and-Nav/NavLinks";
import Header from "./Header";
import NewItem from "../Content-and-Nav/NewItem";
import { useEffect, useState } from "react";

function Home() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchData = async (endPoint) => {
      const fetchedObj = await fetch(
        `https://phase-2-project-backend.onrender.com/${endPoint}`
      );
      const jsonResponse = await fetchedObj.json();
      const imageArr = jsonResponse.map((obj) => obj.image);

      setImages((prevImage) => [...prevImage, ...imageArr]);
    };
    ["accessories", "bottoms", "tops"].forEach((ep) => fetchData(ep));
  }, []);

  const imagesDisplay = images.map((img) => {
    return (
      <img key={img} src={img} className="home-picture" alt="failure"></img>
    );
  });

  return (
    <>
      <Header />
      <div className="nav-item-bar">
        <NavLinks />
        <NewItem />
      </div>
      <div className="picture-bar">{imagesDisplay}</div>
    </>
  );
}

export default Home;
