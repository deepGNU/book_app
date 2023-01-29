import React from 'react';
import '../books-header/BooksHeader.css';
import { ImFilter } from 'react-icons/im';

const FilterBtn = ({ onClick, showFilters, isMenuCollapsed = false, selecting = false }) => {
    return (
        <button
            className={`btn btn-top${(isMenuCollapsed ? ' hide-if-narrow' : '') +
                (selecting ? ' hide' : '') + (showFilters ? ' btn-active' : '')}`}
            title={`${showFilters ? 'Hide ' : ''}Filters`}
            onClick={onClick}
        >
            <ImFilter /> Filters
        </button>
    )
};

export default FilterBtn;