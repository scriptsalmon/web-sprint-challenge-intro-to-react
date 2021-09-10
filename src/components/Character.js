import React from 'react';
import CharacterDetails from './CharacterDetails';
import Style from 'styled-components';

const StyledCharacter = Style.div`
    backgroundColor = ${a => a.theme.secondaryColor}
    
`

export default function Character (props) {
    const { info, openDetails, closeDetails, charName } = props;

    return (
        <StyledCharacter>
            <div className="Character">
                <h2>{info.name}</h2>
                <button onClick={() => {openDetails(info.name)}}>open</button>
                <button onClick={() => {closeDetails()}}>close</button>
            </div>
            {
                charName && <CharacterDetails info={info} component={CharacterDetails} />
            }
        </StyledCharacter>
    )
}