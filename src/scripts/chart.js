import BoulderSpots from "../scripts/bouldering";

export function loadOriginalChart() {

    const data = {
        labels: ["North Bay", "East Bay", "South Bay", "West Bay"],
        datasets: [{
            label: 'V0',
            data: [],
            backgroundColor: ['rgba(103, 138, 202, 1)'],
            borderWidth: 1          
        },{
            label: 'V1',
            data: [],
            backgroundColor: ['rgba(191, 214, 228, 1)'],
            borderWidth: 1          
        }, {
            label: 'V2',
            data: [],
            backgroundColor: ['rgba(240, 165, 27, 1)'],
            borderWidth: 1          
        }, {
            label: 'V3',
            data: [],
            backgroundColor: ['rgba(233, 194, 121, 1)'],
            borderWidth: 1          
        }, {
            label: 'V4',
            data: [],
            backgroundColor: ['rgba(24, 131, 24, 1)'],
            borderWidth: 1          
        },{
            label: 'V5',
            data: [],
            backgroundColor: ['rgba(151, 230, 151, 1)'],
            borderWidth: 1          
        },{
            label: 'V6',
            data: [],
            backgroundColor: ['rgba(204, 8, 8, 1)'],
            borderWidth: 1          
        }, {
            label: 'V7',
            data: [],
            backgroundColor: ['rgba(248, 139, 139, 1)'],
            borderWidth: 1          
        }, {
            label: 'V8',
            data: [],
            backgroundColor: ['rgba(153, 77, 153, 1)'],
            borderWidth: 1          
        }, {
            label: 'V9',
            data: [],
            backgroundColor: ['rgba(223, 165, 223, 1)'],
            borderWidth: 1          
        }, {
            label: 'V10',
            data: [],
            backgroundColor: ['rgba(255, 194, 204, 1)'],
            borderWidth: 1          
        }]
        
    };

    const config = {
        type: 'bar',
        data: data,
        options: {
            indexAxis: 'y',
            scales: {
                x: {
                    stacked: true
                },
                y: {
                    stacked: true
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