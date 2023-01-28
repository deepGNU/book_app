import './FavoritesHeader.css';
import { useDispatch, useSelector } from "react-redux";
import { toggleSelectFavoritesMode as toggleSelectMode } from "../../features/mode-slice";
import { deleteSelectedInFavs as deleteSelected, cancelSelectionInFavs as cancelSelection } from "../../features/books-slice";
import SelectBtn from "../header-buttons/SelectBtn";
import DeleteBtn from "../header-buttons/DeleteBtn";

const FavoritesHeader = () => {
    const dispatch = useDispatch();
    const { selecting, numSelected } = useSelector((s) => ({
        selecting: s.mode.selectingFavorites,
        numSelected: s.book.numSelectedInFavs
    }));

    const handleSelectClick = () => {
        if (selecting) dispatch(cancelSelection());
        dispatch(toggleSelectMode());
    };

    const handleDelete = () => {
        dispatch(deleteSelected());
        dispatch(toggleSelectMode());
    };

    return (
        <div className="favorites-header">
            <SelectBtn
                onClick={handleSelectClick}
                selecting={selecting}
            />

            <DeleteBtn
                onDelete={handleDelete}
                selecting={selecting}
                numSelected={numSelected}
            />
        </div>
    )
};

export default FavoritesHeader;