import React, { useState } from "react";
import "./CustomerForm.css";

const FeedbackForm = () => {
  // State to manage values:
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    rating: "",
    comments: "",
  });
  // State to manage errors:
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    rating: "",
  });

  //  Handle input:
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  // validate Form:

  const validateForm = () => {
    let isData = true;
    const newError = {
      name: "",
      email: "",
      rating: "",
    };
    if (!formValues.name) {
      newError.name = "Name is required!";
      isData = false;
    }
    if (!formValues.email || !/\S+@\S+\.\S+/.test(formValues.email)) {
      newError.email = "Valid email is required!";
      isData = false;
    }
    if (!formValues.rating) {
      newError.rating = "Rating is required!";
      isData = false;
    }

    setErrors(newError);
    return isData;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert(`Submitted Data:
        \nName: ${formValues.name}
        \n Email: ${formValues.email}
        \nRating: ${formValues.rating}
        \nComments: ${formValues.comments}`);
    }
  };

  return (
    <div className="container">
      <h2>Customer Feedback Form</h2>
      <form onSubmit={handleSubmit} className="customer-feedback">
        <div className="group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formValues.name}
            onChange={handleChange}
            className={errors.name ? "error" : ""}
          ></input>
          {errors.name && <p className="error">{errors.name} </p>}
        </div>

        <div className="group">
          <label htmlFor="email">Email:</label>
          <input
            className={errors.email ? "error" : ""}
            onChange={handleChange}
            value={formValues.email}
            name="email"
            id="email"
            type="email"
          ></input>
          {errors.email && <p className="error">{errors.email} </p>}
        </div>
        <div className="group">
          <label>Rating:</label>
          <div className="rating-group">
            {[1, 2, 3, 4, 5].map((star) => (
              <label key={star} className="rating-lable">
                <input
                  type="radio"
                  name="rating"
                  value={star}
                  checked={formValues.rating === star.toString()}
                  onChange={handleChange}
                />
                {star}
              </label>
            ))}
          </div>
          {errors.rating && <p className="error">{errors.rating} </p>}
        </div>
        <div className="group">
          <label htmlFor="comments">Comments:</label>
          <textarea
            onChange={handleChange}
            value={formValues.comments}
            name="comments"
            id="comments"
          ></textarea>
        </div>

        <button type="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default FeedbackForm;
