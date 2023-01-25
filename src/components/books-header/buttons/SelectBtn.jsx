import React from 'react'

const SelectBtn = ({ classes, selecting, onClick }) => {
    return (
        <button
            className={classes}
            title={`${selecting ? 'Cancel Selection' : 'Select Items'}`}
            onClick={onClick}
        >
            {selecting ? 'Cancel' : 'Select'}
        </button>
    )
}

export default SelectBtn