import React from 'react';
import '../books-header/BooksHeader.css';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';

const DeleteBtn = ({ selecting, onDelete, numSelected }) => {
    const handleClick = () => {
        Swal.fire({
            title: `Are you sure you want to delete ${numSelected + ' book' + (numSelected > 1 ? 's' : '')}?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: `Yes, delete ${numSelected > 1 ? 'them' : 'it'}!`
        }).then((result) => {
            if (result.isConfirmed) {
                onDelete();
                toast.error(<div>Deleted {numSelected + ' book' + (numSelected > 1 ? 's' : '')}!</div>,
                    { position: toast.POSITION.BOTTOM_LEFT });
            }
        });
    };

    return (
        <button
            className={`btn btn-top${!selecting ? ' hide' : ''}`}
            title='Delete Selected Items'
            onClick={handleClick}
            disabled={numSelected === 0}
        >
            Delete
        </button>
    )
};

export default DeleteBtn;