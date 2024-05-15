import { useLayoutEffect, useState } from "react";

export type Size = [number, number];

export default function useWindowSize(): Size {
  const [size, setSize] = useState<Size>([0, 0]);

  useLayoutEffect(() => {
    function updateSize(): void {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  return size;
}
