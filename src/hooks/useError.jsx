import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';

const useError = () => {
    const error = useSelector((s) => s.book.error);

    useEffect(() => {
        if (error != '') {
            Swal.fire({
                icon: "error",
                title: "Unable to load book.",
            });
        }
    }, [error]);
}

export default useError;