import { useState } from "react";
import { diffWordsWithSpace } from "diff";
import Empty from "../Empty";
import DiffVisualizer from "../DiffVisualizer";
import { useTextarea } from "../../hooks";
import samplePrevText from "../../assets/sample_prev.txt?raw";
import sampleCurrentText from "../../assets/sample_current.txt?raw";
import type { Change } from "diff";
import styles from "./index.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const App = () => {
  const [isEmpty, setIsEmpty] = useState(true);
  const [diff, setDiff] = useState<Change[]>([]);
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
    const diff = diffWordsWithSpace(prevText, currentText);
    setDiff(diff);
    setIsEmpty(false);
  };

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
        <DiffVisualizer diff={diff} />
      </div>
    </div>
  );
};

export default App;
