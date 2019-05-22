import React from "react";
const Temperature=({children}) => children(25);


const showTemperature=({temp})=>{
return(
    <div>
        The temperatures is {temp} Celsius
    </div>
);
};

const RenderProps =()=>{
return(
  <div>
      <Temperature>
          {temp => showTemperature({temp})}
      </Temperature>
  </div>
);
};



export default RenderProps;