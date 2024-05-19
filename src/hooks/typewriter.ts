import { TypewriterCursor } from "@/components/Typewriter/Cursor";
import { useContext, useEffect, useState } from "react";

interface Return {
  text: string;
  start: () => void;
}

export function useTypewriter(fullText: string, speed: number): Return {
  const { nextIndex } = useContext(TypewriterCursor.Context);

  const [text, setText] = useState("");
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    let id: NodeJS.Timeout | undefined;

    const type = (index: number) => {
      if (index < fullText.length) {
        setText((current) => current + fullText[index]);
        id = setTimeout(() => type(index + 1), speed);
      }
    };

    if (typing) {
      type(0);
    }
    return () => clearTimeout(id);
  }, [fullText, speed, typing]);

  const start = () => {
    setTyping(true);
  };

  return { text, start };
}
