import React from 'react';
import CharacterDetails from './CharacterDetails';
import Style, { keyframes } from 'styled-components';

const kf = keyframes`
    50% {
        transform: scale(0.5);
    }
    100% {
        opacity:1;
        transform: scale(2);
    }
`

const StyledCharacter = Style.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    width:100%;

    button {
        border-radius:5px;
        background-color:green;
        margin:4px;
        padding:4px;
    }

    button:hover {
        background-color:red;
    }

    .Character {
        display: flex;
        justify-content:space-between;
        align-items:center;
        width:80%;
        height:3rem;
        margin:1%;
        padding:1%;
        border:1px solid black;
        border-radius:10px;
        opacity:0.9;

        color: ${a => a.theme.primaryColor};

        transform{
            transform:scale(2)
            animation: ${kf} ease-in-out forwards;
            opacity:0;
        }
    }

    .Character:hover {
        opacity:1;
    }

    .CharacterDetails {
        transform{
            transform:scale(2)
            animation: ${kf} ease-in-out forwards;
            opacity:0;
        }
    }

`

export default function Character (props) {
    const { info, openDetails, closeDetails, charName } = props;


    return (
        <StyledCharacter>
            <div className="Character">
                <h2>{info.name}</h2>
                <button onClick={() => {openDetails(info.name)}}>open</button>
            </div>
            {
                charName && <CharacterDetails info={info} component={CharacterDetails} closeDetails={closeDetails} />
            }
        </StyledCharacter>
    )
}