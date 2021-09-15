import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";

const initialValues = {
  title: "",
  director: "",
  genre: "",
  metascore: 0,
  description: "",
};

const AddMovieForm = (props) => {
  const [input, setInput] = useState(initialValues);
  const { push } = useHistory();

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:5000/api/movies`, input)
      .then((res) => {
        props.setMovies(res.data);
        push(`/movies`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Title
          <input
            type="text"
            value={input.title}
            name="title"
            onChange={handleChange}
          />
        </label>
        <label>
          Director
          <input
            type="text"
            value={input.director}
            name="director"
            onChange={handleChange}
          />
        </label>
        <label>
          Genre
          <input
            type="text"
            value={input.genre}
            name="genre"
            onChange={handleChange}
          />
        </label>
        <label>
          Metascore
          <input
            type="text"
            value={input.metascore}
            name="metascore"
            onChange={handleChange}
          />
        </label>
        <label>
          Description
          <input
            type="text"
            value={input.description}
            name="description"
            onChange={handleChange}
          />
        </label>
        <button>Add a movie</button>
      </form>
    </div>
  );
};

export default AddMovieForm;
