import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

const initialValues = {
  id: "",
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
    <div className="col">
      <div className="modal-content">
        <form onSubmit={handleSubmit}>
          <div className="modal-header">
            <h4 className="modal-title">Adding Movie</h4>
          </div>
          <div className="modal-body">
            <div className="form-group">
              <label>Title</label>
              <input
                value={input.title}
                onChange={handleChange}
                name="title"
                type="text"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Director</label>
              <input
                value={input.director}
                onChange={handleChange}
                name="director"
                type="text"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Genre</label>
              <input
                value={input.genre}
                onChange={handleChange}
                name="genre"
                type="text"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Metascore</label>
              <input
                value={input.metascore}
                onChange={handleChange}
                name="metascore"
                type="number"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea
                value={input.description}
                onChange={handleChange}
                name="description"
                className="form-control"
              ></textarea>
            </div>
          </div>
          <div className="modal-footer">
            <input type="submit" className="btn btn-info" value="Save" />
            <Link to={`/movies`}>
              <input type="button" className="btn btn-default" value="Cancel" />
            </Link>
          </div>
        </form>
      </div>
    </div>
    // <div>
    //   <form onSubmit={handleSubmit}>
    //     <label>
    //       Title
    //       <input
    //         type="text"
    //         value={input.title}
    //         name="title"
    //         onChange={handleChange}
    //       />
    //     </label>
    //     <label>
    //       Director
    //       <input
    //         type="text"
    //         value={input.director}
    //         name="director"
    //         onChange={handleChange}
    //       />
    //     </label>
    //     <label>
    //       Genre
    //       <input
    //         type="text"
    //         value={input.genre}
    //         name="genre"
    //         onChange={handleChange}
    //       />
    //     </label>
    //     <label>
    //       Metascore
    //       <input
    //         type="text"
    //         value={input.metascore}
    //         name="metascore"
    //         onChange={handleChange}
    //       />
    //     </label>
    //     <label>
    //       Description
    //       <input
    //         type="text"
    //         value={input.description}
    //         name="description"
    //         onChange={handleChange}
    //       />
    //     </label>
    //     <button>Add a movie</button>
    //   </form>
    // </div>
  );
};

export default AddMovieForm;
