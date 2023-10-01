import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJs, ArcElement, Tooltip, Legend } from "chart.js";
ChartJs.register(ArcElement, Tooltip, Legend);

export default function DonutChart() {
  const data = {
    datasets: [
      {
        data: [60, 180, 60, 60],
        backgroundColor: ["#3cb371", "#686868", "#dc7b75", "#0b4575"],
        values :[1,2,1,1],
        borderWidth: 3,
        circumference: 360,
        rotation: 30,

      },
    ],
    
  };
  
  const options = {};



  return (
    <div className="continer ">
      <div className="container-header" >
        <Doughnut  data={data} options={options} ></Doughnut>
      </div>
     <label className="ContentList"><strong>
            <div className="d-flex"><div className=" bg rounded mx-2 " id="Hilight1" style={{backgroundColor:"#686868",height:"30px",width:"30px"}}> </div>Consignment Booked</div>
            <div className="d-flex"><div className=" bg rounded mx-2 " style={{backgroundColor:"#dc7b75",height:"30px",width:"30px"}}></div>In Transit</div>
            <div className="d-flex"> <div className=" bg rounded mx-2 " style={{backgroundColor:"#0b4575",height:"30px",width:"30px"}}> </div>Out for Delivery</div>
            <div className="d-flex"> <div className=" bg rounded mx-2 " style={{backgroundColor:"#3cb371",height:"30px",width:"30px"}}> </div> Delivered Sucessfully</div>
            </strong>
            </label>
      
    </div>
  );
}
