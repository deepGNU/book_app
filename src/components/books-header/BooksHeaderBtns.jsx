import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSelectMode, toggleShowFilters } from '../../features/mode-slice';
import { cancelSelectionInBooks, deleteSelectedInBooks } from '../../features/books-slice';
import FilterBtn from '../header-buttons/FilterBtn';
import AddBookBtn from '../header-buttons/AddBookBtn';
import SelectBtn from '../header-buttons/SelectBtn';
import DeleteBtn from '../header-buttons/DeleteBtn';
import ExpandBtn from '../header-buttons/ExpandBtn';

const BooksHeaderButtons = () => {
    const dispatch = useDispatch();
    const selecting = useSelector((s) => s.mode.selecting);
    const numSelected = useSelector((s) => s.book.numSelectedInBooks);
    const showFilters = useSelector((s) => s.mode.showFilters);
    const [isMenuCollapsed, setIsMenuCollapsed] = useState(!showFilters);

    const handleSelectClick = () => {
        if (selecting) dispatch(cancelSelectionInBooks());
        if (showFilters) dispatch(toggleShowFilters());
        dispatch(toggleSelectMode());
    };

    const handleDelete = () => {
        dispatch(deleteSelectedInBooks());
        dispatch(toggleSelectMode());
    };

    const handleFilterClick = () => {
        if (!showFilters) setIsMenuCollapsed(false);
        dispatch(toggleShowFilters());
    }

    const handleExpandClick = () => {
        setIsMenuCollapsed(!isMenuCollapsed);
        if (showFilters) dispatch(toggleShowFilters());
    };

    return (
        <div className="button-bar">
            <FilterBtn
                onClick={handleFilterClick}
                showFilters={showFilters}
                isMenuCollapsed={isMenuCollapsed}
                selecting={selecting}
            />

            <AddBookBtn
                selecting={selecting}
                isMenuCollapsed={isMenuCollapsed}
            />

            <SelectBtn
                selecting={selecting}
                onClick={handleSelectClick}
                isMenuCollapsed={isMenuCollapsed}
            />

            <DeleteBtn
                selecting={selecting}
                onDelete={handleDelete}
                numSelected={numSelected}
            />

            <ExpandBtn
                isMenuCollapsed={isMenuCollapsed}
                selecting={selecting}
                onClick={handleExpandClick}
            />
        </div>
    );
};

export default BooksHeaderButtons;