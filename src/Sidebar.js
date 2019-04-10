import React from 'react';
import './solarizeddark.css';

export default ({children}) => (
  <div style={{float:"left", width:"20%", height : "100%", marginRight:"3em"}}>
    <h6>history >></h6>
    <div style={{paddingLeft : ".8em", textAlign: "left", paddingTop: ".2em"}}>
      {children}
    </div>
  </div>
)