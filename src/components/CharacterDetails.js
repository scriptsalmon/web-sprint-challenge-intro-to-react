import React, { useState, useEffect } from 'react'
// import axios from 'axios';

export default function CharacterDetails(props) {
    const { info, closeDetails } = props;
    // const [details, setDetails] = useState();


    // useEffect(() => {
    //     axios.get('https://swapi.dev/api/people/')
    //       .then(res => {
    //         console.log(res.data);
    //         setDetails(res.data);
    //       })
    //       .catch(err => {
    //         const errMsg = document.createElement('p');
    //         document.body.appendChild(errMsg);
    //         errMsg.textContent = err;
    //       })
    //   }, [])


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
