import React, { Component } from 'react';
import Model1 from './Model1.js'
const citiesList = 
[
    {   link:'https://www.docplanner.com/career?&loc=poland#jobs-offers',
        image:'https://www.docplanner.com/images/warsaw.png',
        city: 'Warsaw',
        content :'See openings'
    },
    {   link:'https://www.docplanner.com/career?&loc=spain#jobs-offers',
        image:'https://www.docplanner.com/images/barcelona.png',
        city: 'Barcelone',
        content :'See openings'
    },
    {   link:'https://www.docplanner.com/career?&loc=rome#jobs-offers',
        image:'https://www.docplanner.com/images/istanbul.png',
        city: 'Istanbul',
        content :'See openings'
    },
    {   link:'https://www.docplanner.com/career?&loc=italy#jobs-offers',
        image:'https://www.docplanner.com/images/rome.png',
        city: 'Rome',
        content :'See openings'
    },
    {   link:'https://www.docplanner.com/career?&loc=mexico#jobs-offers',
        image:'https://www.docplanner.com/images/mexico-city.png',
        city: 'Mexico City',
        content :'See openings'
    },
    {   link:'https://www.docplanner.com/career?&loc=brazil#jobs-offers',
        image:'https://www.docplanner.com/images/curitiba.png',
        city: 'Curitiba',
        content :'See openings'
    }
    
]
const CitiesList = () =>
{
 return(
    
<div className="partie3">
     {citiesList.map((item, i)=>
     <Model1 key = {i} elm = {item}/>
     )}
</div>
  
 );

}
export default CitiesList;