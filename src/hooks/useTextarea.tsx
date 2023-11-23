import { ReactNode, useState } from "react";
import Textarea from "../components/Textarea";

export const useTextarea: (
  initialValue?: string
) => [ReactNode, string, (value: string) => void] = (initialValue) => {
  const [text, setText] = useState(initialValue ?? "");

  const element = <Textarea value={text} onChange={setText} />;

  return [element, text, setText];
};
