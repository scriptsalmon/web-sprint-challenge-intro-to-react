import React from 'react';
import CharacterDetails from './CharacterDetails';

export default function Character (props) {
    const { info, openDetails, closeDetails, charName } = props;

    return (
        <div className="Character">
            <h2>{info.name}</h2>
            <button onClick={() => {openDetails(info.name)}}>open</button>
            <button onClick={() => {closeDetails()}}>close</button>
            {
                charName && <CharacterDetails info={info} component={CharacterDetails} />
            }
        </div>
    )
}