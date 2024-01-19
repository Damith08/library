import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Update() {
  const [book, setBook] = useState({
    title: "",
    desc: "",
    price: "",
    cover: "",
  });

  const navigate = useNavigate();
  const location = useLocation();

  const bookId = location.pathname.split("/")[2];

  console.log(location.pathname.split("/")[2]);

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.put("http://localhost:3001/books" + bookId, book);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  console.log(book);
  return (
    <div className="form">
      <h1>Update the Book</h1>
      <input
        type="text"
        placeholder="title"
        onChange={handleChange}
        name="title"
      ></input>
      <input
        type="text"
        placeholder="desc"
        onChange={handleChange}
        name="desc"
      ></input>
      <input
        type="number"
        placeholder="price"
        onChange={handleChange}
        name="price"
      ></input>
      <input
        type="text"
        placeholder="cover"
        onChange={handleChange}
        name="cover"
      ></input>
      <button className="formButton" onClick={handleClick}>
        Update
      </button>
    </div>
  );
}
