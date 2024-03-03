import { IoSearchCircleSharp } from "react-icons/io5";
import css from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";
import { Field, Form, Formik } from "formik";

export default function SearchBar({ onSubmit, searchQuery }) {
  // if (searchQuery === "") {
  //   toast.error("This is an error!");
  // }

  return (
    <header className={css.header}>
      <Formik
        initialValues={{ searchInput: "" }}
        onSubmit={(values, actions) => {
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
// добавить валидацию
// ля сповіщень використовуй бібліотеку React Hot Toast.
