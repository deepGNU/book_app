import React from 'react';
import { MdFavoriteBorder as NotFavorite, MdFavorite as Favorite} from 'react-icons/md';

const FavoriteIcon = ({isFavorite}) => {
    return (
        <>
            {isFavorite ? <Favorite /> : <NotFavorite />}
        </>

    )
};

export default FavoriteIcon;