import React from 'react';
import CharacterDetails from './CharacterDetails';

export default function Character (props) {
    const { info } = props;

    return (
        <div className="Character">
            <h2>{info.name}</h2>
            <CharacterDetails info={info} component={CharacterDetails} />
        </div>
    )
}