import { useState } from "react";
import Empty from "../Empty";
import DiffVisualizer from "../DiffVisualizer";
import { useTextarea } from "../../hooks";
import samplePrevText from "../../assets/sample_prev.txt?raw";
import sampleCurrentText from "../../assets/sample_current.txt?raw";
import styles from "./index.module.scss";
import classNames from "classnames/bind";
import { Line } from "../../core";

const cx = classNames.bind(styles);

const App = () => {
  const [isEmpty, setIsEmpty] = useState(true);
  const [prevTextarea, prevText, changePrevText] = useTextarea();
  const [currentTextarea, currentText, changeCurrentText] = useTextarea();

  const handleLoadButtonClick = () => {
    changePrevText(samplePrevText);
    changeCurrentText(sampleCurrentText);
  };

  const handleResetButtonClick = () => {
    changePrevText("");
    changeCurrentText("");
  };

  const handleDiffButtonClick = () => {
    console.log("prevText: ", prevText);
    console.log("currentText: ", currentText);
    console.log("get diff");
    setIsEmpty(false);
  };

  const line1 = new Line(1, "hi");
  const line2 = new Line(2, "hii");

  return (
    <div className={cx("container")}>
      <div className={cx("buttons")}>
        <button className={cx("actionButton")} onClick={handleLoadButtonClick}>
          Load Sample
        </button>
        <button className={cx("actionButton")} onClick={handleResetButtonClick}>
          Reset Texts
        </button>
        <button className={cx("actionButton")} onClick={handleDiffButtonClick}>
          Get Diff
        </button>
      </div>
      <div className={cx("textCards")}>
        {prevTextarea}
        {currentTextarea}
      </div>
      <hr />
      <div className={cx("diffVisualizer")}>
        {isEmpty && (
          <div className={cx("empty")}>
            <Empty />
          </div>
        )}
        <DiffVisualizer />
      </div>
    </div>
  );
};

export default App;
