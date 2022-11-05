import { useEffect, useRef } from "react";
import useEsc from './useEsc';

const useFocus = () => {
    const ref = useRef(null);
    const handleFocusOut = () => ref.current.blur();
    useEsc(handleFocusOut);

    useEffect(() => {
        const handleFocus = (e) => {
            if (e.keyCode === 191) ref.current.focus();
        };

        window.addEventListener("keyup", handleFocus);

        return () => {
            window.removeEventListener("keyup", handleFocus);
        };
    }, []);

    return ref;
}

export default useFocus;