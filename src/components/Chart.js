import React from "react";
// var Component = React.Component;
import CanvasJSReact from '../assets/canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
// import {CanvasJS} from 'canvasjs';
const SampleChart = () => {
		const options = {
			animationEnabled: true,
			title:{
				text: "   ",
				fontFamily: "helvetica"
			},
			subtitles: [{
				text: "",
				fontFamily: "helvetica"
			}],
			axisY2: {
				title: "",
				suffix: ".00",
				lineThickness: 1,
                margin : 2,
                gridThickness : 0,
                tickThickness: 3,
                tickLength: 1.5
			},
            axisX : {
                lineThickness: 0,
                tickThickness: 0,
                tickLength: 0
            },
            
            // indexLabelPlacement: "inside",
            dataPointWidth: 20,
			data: [{
                
                axisYType: "secondary",
				type: "rangeBar",
				// indexLabel: "{x}, {y}",
         indexLabelPlacement: "outside",  
         indexLabelOrientation: "horizontal",
				dataPoints: [
					{ label: " ", y: [9, 10] },
					{ label: " ", y: [15, 25]  },
					{ label: " ", y: [8, 19]  },
                    { label: " ", y: [9, 10] },
					{ label: " ", y: [15, 25]  },
					{ label: " ", y: [8, 19]  },
				]
			}]
		}
		return (
		<div>
			<CanvasJSChart   options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
export default SampleChart;