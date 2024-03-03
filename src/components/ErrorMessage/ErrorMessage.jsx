import css from "./ErrorMessage.module.css";

export default function ErrorMessage() {
  return (
    <div className={css.div}>
      <h2 className={css.title}>Server Error</h2>
      <p className={css.text}>
        Unfortunately, there was an error while accessing the server.
      </p>
    </div>
  );
}
