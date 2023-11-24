import type { Change } from "diff";
import styles from "./index.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

type Props = {
  diff: Change[];
};

const DiffVisualizer = ({ diff }: Props) => {
  console.log("diff: ", diff);

  return (
    <div className={cx("container")}>
      <div className={cx("content")}>
        {diff.map((line, idx) => (
          <span
            key={idx}
            className={cx(
              "word",
              line.added ? "added" : line.removed ? "deleted" : undefined
            )}
          >
            {line.value}
          </span>
        ))}
      </div>
    </div>
  );
};

export default DiffVisualizer;
