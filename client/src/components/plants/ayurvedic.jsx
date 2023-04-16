import React from  'react';
import { createElement } from "react";
import BtnCard from "../btncard";
import AyurvedicData from "../../database/ayurvedicdata";

const Ayurvedic = () => {
  return (
        <div className="frequently-searched">
                <h2>Ayurvedic Plants</h2>

                <div className="frequent-container" >
                    {AyurvedicData.map((eachAyuData)=>  createElement(BtnCard , {eachData : eachAyuData}))}
                    
                </div>
        </div>
  )
}

export default Ayurvedic;