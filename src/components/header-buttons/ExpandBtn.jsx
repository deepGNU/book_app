import React from 'react';
import '../books-header/BooksHeader.css';
import { ImMenu3 as MenuDropDown, ImMenu4 as MenuDropUp } from 'react-icons/im';

const ExpandBtn = ({ isMenuCollapsed, selecting, onClick }) => {
    return (
        <button
            className={`btn btn-top btn-expand${selecting ? ' hide' : ''}`}
            title={isMenuCollapsed ? 'Expand' : 'Collapse'}
            onClick={onClick}
        >
            {isMenuCollapsed ? <MenuDropDown /> : <MenuDropUp />}
        </button>
    )
};

export default ExpandBtn;