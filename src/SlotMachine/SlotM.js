import React from "react";
import Matching from "./Matching";
import NotMatching from './NotMatching';

const SlotM = (props) => {
    let {x,y,z} = props;
 
  
    if(x === y && x === z){
      return <Matching x={props.x} y={props.y} z={props.z}/>
    }else      
    return <NotMatching  x={props.x} y={props.y} z={props.z}/>
  }

  export default SlotM;