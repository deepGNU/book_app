import { useEffect } from "react";

const useEsc = (onEsc) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.keyCode === 27) {
        onEsc();
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);
};

export default useEsc;
