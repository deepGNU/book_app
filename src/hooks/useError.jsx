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
                text: "An error occurred while trying to fetch the books. Please check your internet connection and try again."
            });
        }
    }, [error]);
};

export default useError;