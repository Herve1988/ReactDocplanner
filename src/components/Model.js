import React, {Component} from 'react';
function Model(props)
    {
        return ( <div className="col-2">
            <div className="partie2__elt">
                <div className="vert-align">
                    <div>
                        <img src = {props.elm.image}/>
                        <h3>{props.elm.title}</h3>
                        <p>{props.elm.content}</p>
                    </div>
                </div>
            </div>
        </div>
      );
    }
       
 
export default Model;