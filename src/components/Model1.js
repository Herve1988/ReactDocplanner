import React, { Component } from 'react';
const Model1 = (props) =>
{
    return(
	
        <div className ="bureau">
					<a href={props.elm.link} className ="bureau__interne">
						<figure className ="bureau__image">
							<img src={props.elm.image} />
						</figure>
						<div className ="bureau__desc">
							{props.elm.city}
							<span className ="btn btn--small">{props.elm.content}</span>
						</div>
					</a>
        </div>  
        
       );
} 
export default Model1;
