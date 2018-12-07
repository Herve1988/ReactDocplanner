import React, { Component } from 'react';
import Infoffices from './Infoffices.js';
import CitiesList from './CitiesList.js';
const Offices = ()=>
{
return(
<main>
	<section className="bureaux section__interne">
        <Infoffices/>
        <CitiesList />
        </section>
</main>
);
}
export default Offices;