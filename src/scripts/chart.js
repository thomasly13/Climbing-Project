import BoulderSpots from "../scripts/bouldering";

export function loadOriginalChart() {

    const data = {
        labels: ["North Bay", "East Bay", "South Bay", "West Bay"],
        datasets: [{
            label: 'V0',
            data: [],
            backgroundColor: ['rgba(0, 146, 250, 0.6)'],
            borderWidth: 1          
        },{
            label: 'V1',
            data: [],
            backgroundColor: ['rgba(255, 208, 0, 0.6)'],
            borderWidth: 1          
        }, {
            label: 'V2',
            data: [],
            backgroundColor: ['rgba(11, 227, 25, 0.6)'],
            borderWidth: 1          
        }, {
            label: 'V3',
            data: [],
            backgroundColor: ['rgba(169, 11, 227, 0.6)'],
            borderWidth: 1          
        }, {
            label: 'V4',
            data: [],
            backgroundColor: ['rgba(251, 79, 13, 0.6)'],
            borderWidth: 1          
        },{
            label: 'V5',
            data: [],
            backgroundColor: ['rgba(142,115,250, 0.6)'],
            borderWidth: 1          
        },{
            label: 'V6',
            data: [],
            backgroundColor: ['rgba(0, 146, 250, 0.6)'],
            borderWidth: 1          
        }, {
            label: 'V7',
            data: [],
            backgroundColor: ['rgba(255, 208, 0, 0.6)'],
            borderWidth: 1          
        }, {
            label: 'V8',
            data: [],
            backgroundColor: ['rgba(11, 227, 25, 0.6)'],
            borderWidth: 1          
        }, {
            label: 'V9',
            data: [],
            backgroundColor: ['rgba(169, 11, 227, 0.6)'],
            borderWidth: 1          
        }, {
            label: 'V10',
            data: [],
            backgroundColor: ['rgba(251, 79, 13, 0.6)'],
            borderWidth: 1          
        }]
        
    };

    const config = {
        type: 'bar',
        data: data,
        options: {
            animations: {
                tension: {
                  duration: 100,
                  easing: 'easeOutExpo',
                  from: 1,
                  to: .5,
                }
            },
            indexAxis: 'y',
            scales: {
                x: {
                    stacked: true,
                    fontColor: "green",
                    fontSize: 18,
                    stepSize: 1,
                    beginAtZero: true
                },
                y: {
                    stacked: true,
                    fontColor: "green",
                    fontSize: 18,
                    stepSize: 1,
                    beginAtZero: true
                }

                
            }

        }
    };


    let points = _calculateData();
    let data_diff = config['data'];
    let data_datasets = data_diff['datasets'];

    for (const x of data_datasets.entries()) {
        let diff = x[1]
        for (let i = 0; i < points.length; i++) {
            if (points[i].get(diff['label']) !== undefined) {
                diff['data'].push(points[i].get(diff['label']))
            } else {
                diff['data'].push(0);
            };
        };
    };





    window.chart = new Chart(document.getElementById('myChart'), config);

};


function _calculateData () {
    let data = BoulderSpots.allSpots;
    let north = new Map();
    let south = new Map();
    let west = new Map();
    let east = new Map();

    for (let i = 0; i < data.length; i++) {
        let climb = data[i];
        if (climb.location === 'North Bay') {
            if (north.get(climb.difficulty) !== undefined) {
                let diff = north.get(climb.difficulty);
                diff += 1;
                north.set(climb.difficulty, diff);
            } else {
                north.set(climb.difficulty, 1)
            };
        } else if (climb.location === 'South Bay') {
            if (south.get(climb.difficulty) !== undefined) {
                let diff = north.get(climb.difficulty);
                diff += 1;
                south.set(climb.difficulty, diff);
            } else {
                south.set(climb.difficulty, 1)
            };
        } else if (climb.location === 'West Bay') {
            if (west.get(climb.difficulty) !== undefined) {
                let diff = west.get(climb.difficulty);
                diff += 1;
                west.set(climb.difficulty, diff);
            } else {
                west.set(climb.difficulty, 1)
            };
        } else {
            if (east.get(climb.difficulty) !== undefined) {
                let diff = east.get(climb.difficulty);
                diff += 1;
                east.set(climb.difficulty, diff);
            } else {
                east.set(climb.difficulty, 1)
            };
        };
        
    };

    return [north, east, south, west];
};