import { ChangeEvent } from "react";
import styles from "./index.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

type Props = {
  value: string;
  onChange: (value: string) => void;
};

const Textarea = ({ value, onChange }: Props) => {
  const handleTextareaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className={cx("container")}>
      <textarea
        className={cx("textarea")}
        value={value}
        onChange={handleTextareaChange}
      ></textarea>
    </div>
  );
};

export default Textarea;
