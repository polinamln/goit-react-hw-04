import { Hourglass } from "react-loader-spinner";
import css from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={css.load}>
      <Hourglass
        visible={true}
        height="40"
        width="40"
        ariaLabel="hourglass-loading"
        wrapperStyle={{}}
        wrapperClass=""
        colors={["#013A40", "#C5D7D9"]}
      />
    </div>
  );
}
