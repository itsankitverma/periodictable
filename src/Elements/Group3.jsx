// import React from "react";

// function Group2(props) {
//   return (
//     <>
//       <div className="Group2">{props.text}</div>
    
//     </>
//   );
// }

// export default Group2;

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export default function Group2(props) {
  // <div className="Group1" style={props.style}>
  return (
    <Card className="Group3" style={props.style}>
    <CardContent>
      <Typography style={{ position:"relative", top:"-29px", left:"-23px", fontSize:"12px"}} color="textSecondary">
        {props.number} 
      </Typography>        
      <Typography variant="body2" component="p" style={{ position:"relative", top:"-40px", left:"-10px", fontSize:"22px"}}>
      {props.text}
        <br />
       <div style={{ position:"relative", top:"-6px", left:"-8px", fontSize:"7px", textAlign:"center"}}>{props.name}</div> 
       <div style={{ position:"relative", top:"-9px", left:"-8px", fontSize:"7px", textAlign:"center"}}>
       {props.mass}
       </div>
      </Typography>
    </CardContent>
    {/* </div> */}
  </Card>
  );
}



// import React from "react";

// function Group3(props) {
//   return (
//     <>
//       <div className="Group3" style={props.style}>{props.text}</div>
//     </>
//   );
// }

// export default Group3;
