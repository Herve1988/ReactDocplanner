import React, {  Component } from 'react';
import {  Col } from 'reactstrap';
import Model from './Model.js';
const infoListe = 
[
	{
	  image:'https://www.docplanner.com/img/flag.png',
	  title: 'Leader in countries',
	  content: 'Poland, Turkey, Spain, Italy, Mexico, Brazil, Argentina and Chile'
	},
	{
	 image: "https://www.docplanner.com/img/visits.png",
	 title:"600 000 appointments",
	 content: "booked last month"
   },
   {
	 image: "https://www.docplanner.com/img/patients.png",
	 title: '20 million unique patients',
	 content: 'visit us every month'
   },
   {
	 image:"https://www.docplanner.com/img/doctors.png",
	 title:'35 000 active doctors',
	 content:'trust in our solutions'
   }
  ]
function Liste () 
{ 
	return (  
	<div className="col-2">
         <div className="grid stats__grid elements">
	 { infoListe.map((item , i) => <Model key ={i} elm={item}/>)}
        </div>
     </div>

);
}
export default Liste;