import React from 'react';

interface CollectionTileProps {
    name: string;
    image: string;
    onButtonClick: () => void;
}

const CollectionTile: React.FC<CollectionTileProps> = ({ name, image, onButtonClick }) => {
    return (
        <div className="collection-tile">
            <h2>{name}</h2>
            <img src={image} alt={name} />
            <button onClick={onButtonClick}>SEE COLLECTION</button>
        </div>
    );
};

export default CollectionTile;
