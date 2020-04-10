var zone_wise_donut_data = [
// [Confirmed, Active, Recovered, Deceased]
    [4322, 3687, 572, 63],  // Pakistan
    [28, 27, 1, 0],         // AK
    [212, 134, 76, 2],      // Balochistan
    [213, 114, 96, 3],      // GB
    [102, 91, 10, 1],       // Islamabad
    [560, 466, 74, 20],     // KPK
    [2171, 2119, 35, 17],   // Punjab
    [1036, 736, 280, 20]    // Sindh
];

const zones = {
    PK: 0,
    AK: 1,
    BA: 2,
    GB: 3,
    IS: 4,
    KP: 5,
    PB: 6,
    SD: 7
};

Object.freeze(zones);


// Global selectors
var last_selected_zone;
var total_infected = document.getElementById("total-infected");
var most_infected_city = document.getElementById("most-infected-city")
var center_1 = document.getElementById("center-1");
var center_2 = document.getElementById("center-2");
var center_3 = document.getElementById("center-3");
var center_list = document.getElementById("center-list");

var all_provinces = [
    document.getElementById('PK-PB'),
    document.getElementById('PK-SD'),
    document.getElementById('PK-BA'),
    document.getElementById('PK-KP'),
    document.getElementById('PK-GB'),
    document.getElementById('PK-IS'),
    document.getElementById('PK-AK'),
    document.getElementById('PK-TA')
];


// Donut Chart
var donut_ctx = document.getElementById('donut-chart').getContext('2d');
var donut_config = {
    type: 'doughnut',
    data: {
        datasets: [{
            data: zone_wise_donut_data[zones.PK], // Displays Pakistan wide info by default.
            backgroundColor: [
                //'#ff482b', peach
                '#f57200',
                '#f5d400',
                '#50bf0f',
                '#d10d0d'
            ],
        }],
        labels: ['Confirmed Cases', 'Active Cases', 'Recovered', 'Deceased']
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
var trend_chart_config = {
    type: 'line',
    data: {
        datasets: [{
            label: 'Confirmed Cases',
            pointBackgroundColor: '#f57200',
            pointBorderColor: '#000000',
            pointRadius: 4,
            fill: true,
            backgroundColor: '#f57200',
            borderColor: '#000000',
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
        },
        {
            label: 'Active Cases',
            pointBackgroundColor: '#f5d400',
            pointBorderColor: '#000000',
            pointRadius: 4,
            fill: true,
            backgroundColor: '#f5d400',
            borderColor: '#000000',
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
        },
        {
            label: 'Recovered Cases',
            pointBackgroundColor: '#50bf0f',
            pointBorderColor: '#000000',
            pointRadius: 4,
            fill: true,
            backgroundColor: '#50bf0f',
            borderColor: '#000000',
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
        },
        {
            label: 'Deceased Cases',
            pointBackgroundColor: '#d10d0d',
            pointBorderColor: '#000000',
            pointRadius: 4,
            fill: true,
            backgroundColor: '#d10d0d',
            borderColor: '#000000',
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
                    labelString: 'Number of Cases'
                }
            }]
        }
    }
};
var myChart = new Chart(ctx1, trend_chart_config);



// Prediction Graph
var today = new Date();
var prediction_graph_canvas = document.getElementById('time-series-graph-prediction').getContext('2d');
var prediction_graph_config = {
    type: 'line',
    data: {
        datasets: [{
            label: 'Prediction of Cases',
            pointBackgroundColor: '#F0CB69',
            pointBorderColor: '#F0CB69',
            pointRadius: 5,
            fill: true,
            backgroundColor: '#8C0618',
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

	//var tooltip = document.getElementById("tooltip");
    var province;

    
    console.log(last_selected_zone)

	/* if (tooltip.style.display == "block") {
		tooltip.style.display = "none"
	} */
	
    //tooltip.style.display = "block";
    
    
    if (last_selected_zone == e.target.id) {
        console.log("Deselecting " + last_selected_zone);
        reset_to_default();
    }

    else {

        last_selected_zone = e.target.id;
        if (e.target.id === "PK-PB") {
            province = "Punjab";
            total_infected.textContent = "2171 people have been infected in Punjab till now.";
            most_infected_city.textContent = "Lahore has the most number of cases.";

            center_list.style.listStyleType = 'disc';
            center_1.textContent = "Benazir Bhutto Hospital, Rawalpindi [(051) 9290301]";
            center_2.textContent = "Services Hospital, Lahore [(042) 99203402]";
            center_3.textContent = "Allied Teaching Hospital, Faisalabad [(041) 9210082]";

            updateData(donut_chart, zone_wise_donut_data[zones.PB]);
        }
        
        else if (e.target.id === "PK-SD") {
            province = "Sindh";
            total_infected.textContent = "1036 people have been infected in Sindh till now.";
            most_infected_city.textContent = "Karachi has the most number of cases.";

            center_list.style.listStyleType = 'disc';
            center_1.textContent = "Aga Khan University Hospital, Karachi [021-111-911-911]";
            center_2.textContent = "LUMHS hospital, Hyderabad [+92 322 9213305]";
            center_3.textContent = "Jinnah Postgraduate Medical Centre, Karachi";

            updateData(donut_chart, zone_wise_donut_data[zones.SD]);
        }
        
        /* else if (e.target.id === "PK-TA") {
            province = "Tribal Areas";
            total_infected.textContent = "750 people have been infected in Tribal Areas till now.";
            most_infected_city.textContent = "Parachinar has the most number of cases.";

            center_list.style.listStyleType = 'none';
            center_1.textContent = "";
            center_2.textContent = "";
            center_3.textContent = "";
        } */
        
        else if (e.target.id === "PK-KP" || e.target.id == "PK-TA") {
            province = "Khyber Pakhtunkhwa";
            total_infected.textContent = "560 people have been infected in KPK till now.";
            most_infected_city.textContent = "Peshawar has the most number of cases.";

            center_list.style.listStyleType = 'disc';
            center_1.textContent = "Bacha Khan Medical Complex, Swabi [(0938) 280214]";
            center_2.textContent = "Ayub Teaching Hospital, Abbotabad [(0992) 381907]";
            center_3.textContent = "Lady Reading Hospital, Peshawar [(091) 9211441, (091) 9211430]";

            updateData(donut_chart, zone_wise_donut_data[zones.KP]);
        }
        
        else if (e.target.id === "PK-AK") {
            province = "Azad Kashmir";
            total_infected.textContent = "28 people have been infected in Azad Kashmir till now.";
            most_infected_city.textContent = "Muzaffarabad has the most number of cases.";

            center_list.style.listStyleType = 'disc';
            center_1.textContent = "Abbas Institute of Medical Sciences, Muzzaffarabad [(058224) 39306]";
            center_2.textContent = "DHQ Hospital, Mirpur";
            center_3.textContent = "Sheikh Khalifa Bin Zaid (SKBZ) Hospital, Rawalakot";

            updateData(donut_chart, zone_wise_donut_data[zones.AK]);
        }
        
        else if (e.target.id === "PK-IS") {
            province = "Islamabad";
            total_infected.textContent = "102 people have been infected in Islamabad till now.";
            most_infected_city.textContent = "Islamabad has the most number of cases.";

            center_list.style.listStyleType = 'none';
            center_1.textContent = "Pakistan Institute of Medical Sciences (PIMS), Islamabad [(051) 9261170]";
            center_2.textContent = "";
            center_3.textContent = "";

            updateData(donut_chart, zone_wise_donut_data[zones.IS]);
        }
        
        else if (e.target.id === "PK-GB") {
            province = "Gilgit-Baltistan";
            total_infected.textContent = "213 people have been infected in Gilgit-Baltistan till now.";
            most_infected_city.textContent = "Gilgit has the most number of cases.";

            center_list.style.listStyleType = 'disc';
            center_1.textContent = "Civil Hospital, Hunza [(051) 3920187]";
            center_2.textContent = "DHQ Hospital, Gilgit [(058119) 20253]";
            center_3.textContent = "DHQ Hospital, Skardu";

            updateData(donut_chart, zone_wise_donut_data[zones.GB]);
        }
        
        else if (e.target.id === "PK-BA") {
            province = "Balochistan";
            total_infected.textContent = "212 people have been infected in Balochistan till now.";
            most_infected_city.textContent = "Quetta has the most number of cases.";

            center_list.style.listStyleType = 'disc';
            center_1.textContent = "Red Crescent Hospital, Gwadar [(021) 35833973]";
            center_2.textContent = "Fatima Jinnah General and Chest Hospital, Quetta";
            center_3.textContent = "DHQ Teaching Hospital, Turbat";

            updateData(donut_chart, zone_wise_donut_data[zones.BA]);
        }

        //tooltip.innerHTML = "<span class='heading'>" + province + "</span> <br /> Total cases: <span style='color: blue; font-weight: bold;'> 500 </span> <br /> Recovered: <span style='color: green; font-weight: bold;'> 300 </span> <br /> Deaths: <span style='color: red; font-weight: bold;'> 30 </span>"
        //tooltip.style.display = 'none';
        
        //tooltip.style.left = e.pageX + 'px';
        //tooltip.style.top = e.pageY + 'px';
        console.log("Clicked! X: "+e.pageX+" Y: "+e.pageY);
        
        var selected_province = document.getElementById(e.target.id);

        var x;
        for (x of all_provinces) {
            x.style.fill = '#000000';
        }
        selected_province.style.fill = '#F0CB69';
    }
};

var tips = [
    "Tip: Click on a province to populate the page with its info.",
    "Tip: Scroll down to take a look at the trends.",
    "Tip: Contact on one of the helplines given below, in case of emergency."
];

function update_tip_text() {
    var tip_text = document.getElementById('tip-text');
    if (tip_text.textContent == tips[0]) {
        tip_text.textContent = tips[1]
    }
    else if (tip_text.textContent == tips[1]) {
        tip_text.textContent = tips[2]
    }
    else if (tip_text.textContent == tips[2]) {
        tip_text.textContent = tips[0]
    }
    tip_text.style.fontStyle = 'italic';
}


function updateData(chart, data) {
    console.log("Updating chart")
    chart.data.datasets[0].data = data;
    chart.update();
}

function reset_to_default() {
    console.log("resetting...")

    total_infected.textContent = zone_wise_donut_data[zones.PK][0] + " people have been infected in Pakistan till now.";
    most_infected_city.textContent = "Lahore has the most number of cases.";

    center_list.style.listStyleType = 'none';
    center_1.textContent = "";
    center_2.textContent = "";
    center_3.textContent = "";
    
    updateData(donut_chart, zone_wise_donut_data[zones.PK]);
    
    var x;
    for (x of all_provinces) {
        x.style.fill = '#000000';
    }
    last_selected_zone = "PK";
    console.log("Reset complete");
}

function highlight(e) {
    document.getElementById(e.target.id).style.fill = '#F0CB69';
}

function highlight_release(e) {
    if (e.target.id !== last_selected_zone) {
        document.getElementById(e.target.id).style.fill = '#000000';
    }
}

setInterval(update_tip_text, 5000);