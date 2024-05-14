import { useEffect, useState } from "react";

export function useTypewriter(
  fullText: string,
  speed: number,
  delay?: number
): [string, boolean] {
  const [text, setText] = useState("");
  const [awaiting, setAwaiting] = useState(true);

  useEffect(() => {
    let id: NodeJS.Timeout | undefined;

    const type = (index: number) => {
      if (index < fullText.length) {
        setText((current) => current + fullText[index]);
        id = setTimeout(() => type(index + 1), speed);
      }
    };

    id = setTimeout(
      () => {
        type(0);
        setAwaiting(false);
      },
      delay === undefined ? 100 : delay
    );
    return () => clearTimeout(id);
  }, [fullText, speed, delay]);

  return [text, awaiting];
}
