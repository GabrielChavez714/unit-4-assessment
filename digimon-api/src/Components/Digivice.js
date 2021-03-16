

import React from 'react';
import Digimon from './Digimon';

const Digivice = props => {
    const mappedDigimon = props.myDigimon.map((digimon, i) => (
        <Digimon
            key={i}
            digimon={digimon}
            nameFn={props.nameFn}
            releaseFn={props.releaseFn} />
    ))

    return (
        <div>
            <h1>Digivice</h1>
            <div className='digi-flex'>
                {mappedDigimon}
            </div>
        </div>
    )
}

export default Digivice;
