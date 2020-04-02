
window.onload = function () {
	CanvasJS.addColorSet("shades", [//colorSet Array
		"#CC2314",
		"#F2561D",
		"#F28729",
		"#F2C53D",
		"#F2E641"]);
	
var chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,
	colorSet: "shades",
	backgroundColor: "#f4f0ec",
	
	title:{
		text:"Growth Rate"
	},
	axisX:{
		interval: 1
	},
	axisY2:{
		title: "COVID-19 Cases across different cities in Pakistan"
	},
	data: [{
		type: "bar",
		name: "companies",
		axisYType: "secondary",
		dataPoints: [
			{ y: 20, label: "Sukkur" },
			{ y: 7, label: "Karachi" },
			{ y: 5, label: "Lahore" },
			{ y: 9, label: "Quetta" },
			{ y: 7, label: "Peshawar" }
		]
	}]
});
chart.render();

}