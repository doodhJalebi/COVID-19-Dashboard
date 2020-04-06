
var linechart;

window.onload = function () {
	
	//var a = document.getElementById("PK-PB");
	//a.addEventListener("click", myFunction(e), true);
	
	CanvasJS.addColorSet("shades", [//colorSet Array
		"#CC2314",
		"#F2561D",
		"#F28729",
		"#F2C53D",
		"#F2E641"]);
	
	/*var chart = new CanvasJS.Chart("chartContainer", {
		animationEnabled: true,
		colorSet: "shades",
		backgroundColor: "#f4f0ec",
		//backgroundColor: "#400606",
		width: 650,
		height: 250,
		
		title:{
			fontFamily: "Rockwell",
			text:"Growth Rate",
			//fontColor: "#FFFFFF"
		},
		axisX:{
			interval: 1,
			//labelFontColor: "#FFFFFF"
		},
		axisY:{
			//labelFontColor: "#FFFFFF",
		},
		axisY2:{
			//titleFontColor: "#FFFFFF",
			title: "COVID-19 Cases across different cities in Pakistan"
		},
		data: [{
			type: "bar",
			name: "cities",
			axisYType: "secondary",
			dataPoints: [
				{ y: 20, label: "Sukkur" },
				{ y: 7, label: "Karachi" },
				{ y: 5, label: "Lahore" },
				{ y: 9, label: "Quetta" },
				{ y: 7, label: "Peshawar" }
			]
		}]
	});*/
	
	var options = {
		animationEnabled: true,
		width: 650,
		height: 400,
		backgroundColor: "#260104",
		title:{
			text: "Time Series Graph for Confirmed Cases",
			fontFamily: "Rockwell",
			fontColor: "#FFFFFF"
		},
		axisX: {
			title: "Date",
			labelFontColor: "#FFFFFF",
			valueFormatString: "DD MMM,YY"
		},
		axisY: {
			labelFontColor: "#FFFFFF",
			title: "Number of Cases",
		},
		toolTip:{
			shared: true
		},
		data: [{
			name: "Date",
			type: "spline",
			dataPoints: [
				{ x: new Date(2020,6,24), y: 1 },
				{ x: new Date(2020,6,25), y: 5 },
				{ x: new Date(2020,6,26), y: 10 },
				{ x: new Date(2020,6,27), y: 50 },
				{ x: new Date(2020,6,28), y: 100 },
				{ x: new Date(2020,6,29), y: 200 },
				{ x: new Date(2020,6,30), y: 500 }
			]
		}]
	};
	
	var linechart = new CanvasJS.Chart("lineChartContainer", options);

	//chart.render();
	linechart.render();
	
	$("#PK-PB").click(function () {
		var len = options.data[0].dataPoints.length;
		options.title.text = "Confirmed cases in Punjab";
		for (var i = 0; i < len; i++){
			//linechart.options.data[0].dataPoints[i].x = 15 - Math.random() * 10;
			options.data[0].dataPoints[i].y = 15 - Math.random() * 10;
		}
		
		(new CanvasJS.Chart("lineChartContainer", options)).render();
	});
	
}

function popup(e) {
	var tooltip = document.getElementById("tooltip");
	var province;
	
	if (tooltip.style.display == "none" || (tooltip.style.display == "block")){
		tooltip.style.display = "block";
		if (e.target.id === "PK-PB"){
			province = "Punjab";
		}
		else if (e.target.id === "PK-SD"){
			province = "Sindh";
		}
		else if (e.target.id === "PK-TA"){
			province = "FATA";
		}
		else if (e.target.id === "PK-KP"){
			province = "Khyber Pakhtunkhwa";
		}
		else if (e.target.id === "PK-JK"){
			province = "Azad Kashmir";
		}
		else if (e.target.id === "PK-IS"){
			province = "Islamabad";
		}
		else if (e.target.id === "PK-GB"){
			province = "Gilgit-Baltistan";
		}
		else if (e.target.id === "PK-BA"){
			province = "Balochistan";
		}
		else if (province === undefined){
			tooltip.style.display = "none";
			return
		}
		tooltip.innerHTML = "<span class='heading'>"+ province + "</span> <br /> Total cases: <span style='color: blue; font-weight: bold;'> 500 </span> <br /> Recovered: <span style='color: green; font-weight: bold;'> 300 </span> <br /> Deaths: <span style='color: red; font-weight: bold;'> 30 </span>"
	
		tooltip.style.left = e.pageX - 50 + 'px';
		tooltip.style.top = e.pageY -50 + 'px';
	}
}

