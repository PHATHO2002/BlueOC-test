import React, { useState } from "react";
import styles from "./PostForm.module.css";
import { useDispatch } from "react-redux";
import { addPost } from "../redux/apiSlice"; // Adjust the import path as necessary
const PostForm = () => {
  const [form, setForm] = useState({ title: "", body: "" });
  const [errors, setErrors] = useState({ title: "", body: "" });
  const dispatch = useDispatch();

  const validate = () => {
    let isValid = true;
    const newErrors = { title: "", body: "" };

    if (!form.title.trim()) {
      newErrors.title = "Title is required.";
      isValid = false;
    }

    if (!form.body.trim()) {
      newErrors.body = "Body is required.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      dispatch(addPost(form));
      alert("Post added successfully!");
      setForm({ title: "", body: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.formGroup}>
        <label className={styles.label}>Title:</label>
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          className={styles.input}
        />
        {errors.title && <p className={styles.error}>{errors.title}</p>}
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label}>Body:</label>
        <textarea
          name="body"
          value={form.body}
          onChange={handleChange}
          rows={4}
          className={styles.textarea}
        />
        {errors.body && <p className={styles.error}>{errors.body}</p>}
      </div>

      <button type="submit" className={styles.button}>
        add new post
      </button>
    </form>
  );
};

export default PostForm;
