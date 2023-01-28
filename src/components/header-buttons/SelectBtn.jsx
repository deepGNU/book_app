import React from 'react';

const SelectBtn = ({ onClick, selecting, isMenuCollapsed = false }) => {
    return (
        <button
            className={`btn btn-top${(isMenuCollapsed && !selecting) ?
                ' hide-if-narrow' : '' + (selecting ? ' btn-active' : '')}`}
            title={`${selecting ? 'Cancel Selection' : 'Select Items'}`}
            onClick={onClick}
        >
            {selecting ? 'Cancel' : 'Select'}
        </button>
    )
};

export default SelectBtn;