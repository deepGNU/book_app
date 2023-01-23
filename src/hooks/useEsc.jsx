import { useEffect } from "react";

const useEsc = (onEsc) => {
  useEffect(() => {
    const handleEsc = (e) => {
      const key = e.key || e.keyCode;
      if (key === "Escape" || key === 27)
        onEsc();
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onEsc]);
};

export default useEsc;
