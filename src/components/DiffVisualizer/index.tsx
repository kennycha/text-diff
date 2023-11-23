import styles from "./index.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const DiffVisualizer = () => {
  return (
    <div className={cx("container")}>
      <div className={cx("content")}></div>
    </div>
  );
};

export default DiffVisualizer;
