import { IoSearchCircleSharp } from "react-icons/io5";
import css from "./SearchBar.module.css";
import toast from "react-hot-toast";
import { Field, Form, Formik } from "formik";

export default function SearchBar({ onSubmit }) {
  return (
    <header className={css.header}>
      <Formik
        initialValues={{ searchInput: "" }}
        onSubmit={(values, actions) => {
          if (values.searchInput === "") {
            toast.error("Please enter a search query");
          }
          onSubmit(values.searchInput);
          actions.resetForm();
        }}
      >
        <Form className={css.form}>
          <Field
            name="searchInput"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            className={css.input}
          />
          <button className={css.btn} type="submit">
            <IoSearchCircleSharp className={css.icon} />
          </button>
        </Form>
      </Formik>
    </header>
  );
}
