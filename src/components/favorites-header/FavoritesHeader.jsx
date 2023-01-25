import './FavoritesHeader.css';
import { toggleSelectFavoritesMode as toggleSelectMode } from "../../features/mode-slice";
import { deleteSelectedInFavs as deleteSelected } from "../../features/books-slice";
import { cancelSelectionInFavs } from "../../features/books-slice";
import { useDispatch, useSelector } from "react-redux";
import SelectBtn from "../books-header/buttons/SelectBtn";
import DeleteBtn from "../books-header/buttons/DeleteBtn";

const FavoritesHeader = () => {
    const dispatch = useDispatch();
    const selecting = useSelector((s) => s.mode.selectingFavorites);
    const numSelected = useSelector((s) => s.book.numSelectedInFavs);

    const handleSelectClick = () => {
        if (selecting) dispatch(cancelSelectionInFavs());
        dispatch(toggleSelectMode());
    };

    const handleDeleteClick = () => {
        dispatch(deleteSelected());
        dispatch(toggleSelectMode());
    };

    return (
        <div className="favorites-header">
            <SelectBtn classes={`btn btn-top${selecting ? ' btn-active' : ''}`} selecting={selecting} onClick={handleSelectClick} />
            <DeleteBtn classes={`btn btn-top${!selecting ? ' hide' : ''}`} onClick={handleDeleteClick} numSelected={numSelected} />
        </div>
    )
}

export default FavoritesHeader