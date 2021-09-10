import React from 'react'

export default function CharacterDetails(props) {
    const { info, closeDetails } = props;

    return (
        <div className="CharacterDetails">
            <h3>Details for {info.name}:</h3>
            <div>
                <p>Birthdate: {info.birthdate}</p>
                <p>Height: {info.height}</p>
                <p>Mass: {info.mass}</p>
                <p>Hair: {info.hair_color}</p>
                <p>Skin: {info.skin_color}</p>
            </div>
            <button onClick={() => closeDetails()}>close</button>
        </div>
    )
}
