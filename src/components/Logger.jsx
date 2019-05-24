import React from 'react';


function Logger(props) {
  return (
  <div className="Logger">
  <h3 >{props.title}</h3>
 <p> <em>{props.byline}</em></p>
  <p>{props.location}</p>
  <a href={props.url}>Website</a>
  </div>
  )
}
export default Logger;