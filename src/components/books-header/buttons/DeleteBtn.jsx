import React from 'react'

const DeleteBtn = ({ classes, onClick, numSelected }) => {
    return (
        <button
            className={classes}
            title='Delete Selected Items'
            onClick={onClick}
            disabled={numSelected === 0}
        >
            Delete
        </button>
    )
}

export default DeleteBtn