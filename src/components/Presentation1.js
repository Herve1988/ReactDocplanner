import React, { Component} from 'react';
import Liste from './Liste.js';
import CarePlatform from './CarePlatform.js';
function Presentation1()
{
    return (
        <div className ="grid">
        <CarePlatform />
        <Liste />
        </div>

    );
}
export default Presentation1;