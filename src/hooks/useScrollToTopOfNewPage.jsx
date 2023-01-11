import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useScrollToTop = () => {
    const routePath = useLocation();
    const onTop = () => {
        window.scrollTo(0, 0);
    }
    
    useEffect(() => {
        onTop()
    }, [routePath]);
};

export default useScrollToTop;