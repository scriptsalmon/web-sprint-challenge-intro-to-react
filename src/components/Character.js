import React from 'react';

export default function Character (props) {
    const { info } = props;

    return (
        <div className="Character">
            <p>{info.name}</p>
        </div>
    )
}