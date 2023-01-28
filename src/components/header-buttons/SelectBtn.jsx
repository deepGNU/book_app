import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { leaveEditMode } from '../../features/mode-slice';

const SelectBtn = ({ onClick, selecting, isMenuCollapsed = false }) => {
    const editing = useSelector((s) => s.mode.editing);
    const dispatch = useDispatch();

    const handleClick = () => {
        if (editing) dispatch(leaveEditMode());
        onClick();
    };

    return (
        <button
            className={`btn btn-top${(isMenuCollapsed && !selecting) ?
                ' hide-if-narrow' : '' + (selecting ? ' btn-active' : '')}`}
            title={`${selecting ? 'Cancel Selection' : 'Select Items'}`}
            onClick={handleClick}
        >
            {selecting ? 'Cancel' : 'Select'}
        </button>
    )
};

export default SelectBtn;