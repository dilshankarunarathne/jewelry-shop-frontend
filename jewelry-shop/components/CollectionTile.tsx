import React from 'react';
import './CollectionTile.css';

interface CollectionTileProps {
    name: string;
    image: string;
    onButtonClick: () => void;
}

const CollectionTile: React.FC<CollectionTileProps> = ({ name, image, onButtonClick }) => {
    return (
        <div className="collection-tile tile">
            <h2>{name}</h2>
            <img className='image' src={image} alt={name} />
            <button className="collection-button" onClick={onButtonClick}>SEE COLLECTION</button>
        </div>
    );
};

export default CollectionTile;
