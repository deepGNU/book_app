import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';

const useError = () => {
    const error = useSelector((s) => s.book.error);

    useEffect(() => {
        if (error !== '') {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "No results found.",
            });
        }
    }, [error]);
};

export default useError;