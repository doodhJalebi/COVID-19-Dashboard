// Donut Chart
var donut_ctx = document.getElementById('donut-chart').getContext('2d');
var donut_dataset = [5000, 3500, 1200, 500, 100];
var donut_config = {
    type: 'doughnut',
    data: {
        datasets: [{
            data: donut_dataset,
            backgroundColor: [
                '#ff482b',
                '#f57200',
                '#f5d400',
                '#50bf0f',
                '#d10d0d'
            ],
        }],
        labels: ['Active Cases', 'Confirmed Cases', 'Under Treatment', 'Recovered', 'Deceased']
    },
    options:{
        responsive: true,
        legend: {
            position: 'top',
        },  
        animation: {
            animateScale: true,
            animateRotate: true
        }
    }
};
var donut_chart = new Chart(donut_ctx, donut_config);


// Confirmed Cases Graph
var ctx1 = document.getElementById('time-series-graph-confirmed-cases').getContext('2d');
var myChart = new Chart(ctx1, {
    type: 'line',
    data: {
        datasets: [{
            label: 'Confirmed Cases',
            pointBackgroundColor: '#F0CB69',
            pointBorderColor: '#F0CB69',
            pointRadius: 5,
            fill: true,
            backgroundColor: '#8C0618',
            data: [
                {
                    x: new Date(2019, 11, 25),
                    y: 20
                },{
                    x: new Date(2020, 0, 25),
                    y: 50
                },{
                    x: new Date(2020, 1, 25),
                    y: 249
                },{
                    x: new Date(2020, 2, 25),
                    y: 500
                },{
                    x: new Date(),
                    y: 2650
                }
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            xAxes: [{
                type: 'time',
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Date'
                },
                ticks: {
                    source: 'data'
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: '# of people'
                }
            }]
        }
    }
});


// Under Treatement Graph
var ctx2 = document.getElementById('time-series-graph-under-treatement').getContext('2d');
var under_treatement_config = {
    type: 'line',
    data: {
        datasets: [{
            label: 'Under Treatement',
            pointBackgroundColor: '#F0CB69',
            pointBorderColor: '#F0CB69',
            pointRadius: 5,
            fill: true,
            backgroundColor: '#8C0618',
            data: [
                {
                    x: new Date(2019, 11, 25),
                    y: 2
                },{
                    x: new Date(2020, 0, 25),
                    y: 5
                },{
                    x: new Date(2020, 1, 25),
                    y: 10
                },{
                    x: new Date(2020, 2, 25),
                    y: 25
                },{
                    x: new Date(),
                    y: 50
                }
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            xAxes: [{
                type: 'time',
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Date'
                },
                ticks: {
                    source: 'data'
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: '# of people'
                }
            }]
        }
    }
};
var chart2 = new Chart(ctx2, under_treatement_config);


// Recovered Graph
var recovered_graph_canvas = document.getElementById('time-series-graph-recovered').getContext('2d');
var recovered_graph_config = {
    type: 'line',
    data: {
        datasets: [{
            label: 'Recovered',
            pointBackgroundColor: '#F0CB69',
            pointBorderColor: '#F0CB69',
            pointRadius: 5,
            fill: true,
            backgroundColor: '#8C0618',
            data: [
                {
                    x: new Date(2019, 11, 25),
                    y: 2
                },{
                    x: new Date(2020, 0, 25),
                    y: 3
                },{
                    x: new Date(2020, 1, 25),
                    y: 6
                },{
                    x: new Date(2020, 2, 25),
                    y: 10
                },{
                    x: new Date(),
                    y: 12
                }
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            xAxes: [{
                type: 'time',
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Date'
                },
                ticks: {
                    source: 'data'
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: '# of people'
                }
            }]
        }
    }
};
var recovered_graph = new Chart(recovered_graph_canvas, recovered_graph_config);


// Deceased Graph
var deceased_graph_canvas = document.getElementById('time-series-graph-deceased').getContext('2d');
var deceased_graph_config = {
    type: 'line',
    data: {
        datasets: [{
            label: 'Deceased',
            pointBackgroundColor: '#F0CB69',
            pointBorderColor: '#F0CB69',
            pointRadius: 5,
            fill: true,
            backgroundColor: '#8C0618',
            data: [
                {
                    x: new Date(2019, 11, 25),
                    y: 2
                },{
                    x: new Date(2020, 0, 25),
                    y: 10
                },{
                    x: new Date(2020, 1, 25),
                    y: 50
                },{
                    x: new Date(2020, 2, 25),
                    y: 55
                },{
                    x: new Date(),
                    y: 60
                }
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            xAxes: [{
                type: 'time',
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Date'
                },
                ticks: {
                    source: 'data'
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: '# of people'
                }
            }]
        }
    }
};
var deceased_graph = new Chart(deceased_graph_canvas, deceased_graph_config);


// Prediction Graph
var today = new Date();
var prediction_graph_canvas = document.getElementById('time-series-graph-prediction').getContext('2d');
var prediction_graph_config = {
    type: 'line',
    data: {
        datasets: [{
            label: 'Prediction of Cases',
            pointBackgroundColor: '#8C0618',
            pointBorderColor: '#8C0618',
            pointRadius: 5,
            fill: true,
            backgroundColor: '#F0CB69',
            data: [
                {
                    x: today.setDate(today.getDate() + 2),
                    y: 4000
                },{
                    x: today.setDate(today.getDate() + 2),
                    y: 4100
                },{
                    x: today.setDate(today.getDate() + 2),
                    y: 4300
                },{
                    x: today.setDate(today.getDate() + 2),
                    y: 4400
                },{
                    x: today.setDate(today.getDate() + 2),
                    y: 4500
                },{
                    x: today.setDate(today.getDate() + 2),
                    y: 4700
                },{
                    x: today.setDate(today.getDate() + 2),
                    y: 4800
                }
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            xAxes: [{
                type: 'time',
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Date'
                },
                ticks: {
                    source: 'data'
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: '# of people'
                }
            }]
        }
    }
};
var prediction_graph = new Chart(prediction_graph_canvas, prediction_graph_config);


function clear_tooltip(e) {
    var tooltip = document.getElementById("tooltip");
    tooltip.style.display = 'none';
}

function popup(e) {

	var tooltip = document.getElementById("tooltip");
    var province;
    var total_infected = document.getElementById("total-infected");
    var most_infected_city = document.getElementById("most-infected-city")
    var center_1 = document.getElementById("center-1");
    var center_2 = document.getElementById("center-2");
    var center_3 = document.getElementById("center-3");
    var center_list = document.getElementById("center-list");

	if (tooltip.style.display == "block") {
		tooltip.style.display = "none"
	}
	
	tooltip.style.display = "block";
	if (e.target.id === "PK-PB") {
        province = "Punjab";
        total_infected.innerText = "2171 people have been infected in Punjab till now.";
        most_infected_city.innerText = "Lahore has the most number of cases.";

        center_list.style.listStyleType = 'disc';
        center_1.innerText = "Benazir Bhutto Hospital, Rawalpindi [(051) 9290301]";
        center_2.innerText = "Services Hospital, Lahore [(042) 99203402]";
        center_3.innerText = "Allied Teaching Hospital, Faisalabad [(041) 9210082]";

	}
	else if (e.target.id === "PK-SD") {
        province = "Sindh";
        total_infected.innerText = "1036 people have been infected in Sindh till now.";
        most_infected_city.innerText = "Karachi has the most number of cases.";

        center_list.style.listStyleType = 'disc';
        center_1.innerText = "Aga Khan University Hospital, Karachi [021-111-911-911]";
        center_2.innerText = "LUMHS hospital, Hyderabad [+92 322 9213305]";
        center_3.innerText = "Jinnah Postgraduate Medical Centre, Karachi";
	}
	/* else if (e.target.id === "PK-TA") {
        province = "Tribal Areas";
        total_infected.innerText = "750 people have been infected in Tribal Areas till now.";
        most_infected_city.innerText = "Parachinar has the most number of cases.";

        center_list.style.listStyleType = 'none';
        center_1.innerText = "";
        center_2.innerText = "";
        center_3.innerText = "";
	} */
	else if (e.target.id === "PK-KP" || e.target.id == "PK-TA") {
        province = "Khyber Pakhtunkhwa";
        total_infected.innerText = "560 people have been infected in KPK till now.";
        most_infected_city.innerText = "Peshawar has the most number of cases.";

        center_list.style.listStyleType = 'disc';
        center_1.innerText = "Bacha Khan Medical Complex, Swabi [(0938) 280214]";
        center_2.innerText = "Ayub Teaching Hospital, Abbotabad [(0992) 381907]";
        center_3.innerText = "Lady Reading Hospital, Peshawar [(091) 9211441, (091) 9211430]";
	}
	else if (e.target.id === "PK-JK") {
        province = "Azad Kashmir";
        total_infected.innerText = "28 people have been infected in Azad Kashmir till now.";
        most_infected_city.innerText = "Muzaffarabad has the most number of cases.";

        center_list.style.listStyleType = 'disc';
        center_1.innerText = "Abbas Institute of Medical Sciences, Muzzaffarabad [(058224) 39306]";
        center_2.innerText = "DHQ Hospital, Mirpur";
        center_3.innerText = "Sheikh Khalifa Bin Zaid (SKBZ) Hospital, Rawalakot";
	}
	else if (e.target.id === "PK-IS") {
        province = "Islamabad";
        total_infected.innerText = "102 people have been infected in Islamabad till now.";
        most_infected_city.innerText = "Islamabad has the most number of cases.";

        center_list.style.listStyleType = 'none';
        center_1.innerText = "Pakistan Institute of Medical Sciences (PIMS), Islamabad [(051) 9261170]";
        center_2.innerText = "";
        center_3.innerText = "";
	}
	else if (e.target.id === "PK-GB") {
        province = "Gilgit-Baltistan";
        total_infected.innerText = "213 people have been infected in Gilgit-Baltistan till now.";
        most_infected_city.innerText = "Gilgit has the most number of cases.";

        center_list.style.listStyleType = 'disc';
        center_1.innerText = "Civil Hospital, Hunza [(051) 3920187]";
        center_2.innerText = "DHQ Hospital, Gilgit [(058119) 20253]";
        center_3.innerText = "DHQ Hospital, Skardu";
	}
	else if (e.target.id === "PK-BA") {
        province = "Balochistan";
        total_infected.innerText = "212 people have been infected in Balochistan till now.";
        most_infected_city.innerText = "Quetta has the most number of cases.";

        center_list.style.listStyleType = 'disc';
        center_1.innerText = "Red Crescent Hospital, Gwadar [(021) 35833973]";
        center_2.innerText = "Fatima Jinnah General and Chest Hospital, Quetta";
        center_3.innerText = "DHQ Teaching Hospital, Turbat";
	}

	//tooltip.innerHTML = "<span class='heading'>" + province + "</span> <br /> Total cases: <span style='color: blue; font-weight: bold;'> 500 </span> <br /> Recovered: <span style='color: green; font-weight: bold;'> 300 </span> <br /> Deaths: <span style='color: red; font-weight: bold;'> 30 </span>"
    tooltip.style.display = 'none';
    
    tooltip.style.left = e.pageX + 'px';
    tooltip.style.top = e.pageY + 'px';
    console.log("Clicked! X: "+e.pageX+" Y: "+e.pageY);

    var selected_province = document.getElementById(e.target.id);

    var all_provinces = [
        document.getElementById('PK-PB'),
        document.getElementById('PK-SD'),
        document.getElementById('PK-BA'),
        document.getElementById('PK-KP'),
        document.getElementById('PK-GB'),
        document.getElementById('PK-IS'),
        document.getElementById('PK-JK'),
        document.getElementById('PK-TA')
    ];

    var x;
    for (x of all_provinces) {
        x.style.fill = '#000000';
    }
	selected_province.style.fill = '#F0CB69';
};

var tips = [
    "Tip: Click on a province to populate the page with its info.",
    "Tip: Scroll down to take a look at the trends.",
    "Tip: Contact on one of the helplines given below, in case of emergency."
];

function update_tip_text() {
    var tip_text = document.getElementById('tip-text');
    if (tip_text.innerText == tips[0]) {
        tip_text.innerText = tips[1]
    }
    else if (tip_text.innerText == tips[1]) {
        tip_text.innerText = tips[2]
    }
    else if (tip_text.innerText == tips[2]) {
        tip_text.innerText = tips[0]
    }
    tip_text.style.fontStyle = 'italic';
}

setInterval(update_tip_text, 5000);