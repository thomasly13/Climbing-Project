import BoulderSpots from "../scripts/bouldering";

export function loadOriginalChart() {

    const data = {
        labels: ["North Bay", "East Bay", "South Bay", "West Bay"],
        datasets: [{
            label: 'V0',
            data: [],
            backgroundColor: ["red"],
            borderWidth: 1          
        },{
            label: 'V1',
            data: [],
            backgroundColor: ["red"],
            borderWidth: 1          
        }, {
            label: 'V2',
            data: [],
            backgroundColor: ["orange"],
            borderWidth: 1          
        }, {
            label: 'V3',
            data: [],
            backgroundColor: ["blue"],
            borderWidth: 1          
        }, {
            label: 'V4',
            data: [],
            backgroundColor: ["green"],
            borderWidth: 1          
        },{
            label: 'V5',
            data: [],
            backgroundColor: ["red"],
            borderWidth: 1          
        },{
            label: 'V6',
            data: [],
            backgroundColor: ["red"],
            borderWidth: 1          
        }, {
            label: 'V7',
            data: [],
            backgroundColor: ["red"],
            borderWidth: 1          
        }, {
            label: 'V8',
            data: [],
            backgroundColor: ["red"],
            borderWidth: 1          
        }, {
            label: 'V9',
            data: [],
            backgroundColor: ["red"],
            borderWidth: 1          
        }, {
            label: 'V10',
            data: [],
            backgroundColor: ["red"],
            borderWidth: 1          
        },{
            label: 'V11',
            data: [],
            backgroundColor: ["red"],
            borderWidth: 1          
        },]
        
    };

    const config = {
        animmationEnabled: true,
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
    let data_diff = config['data']
    let data_datasets = data_diff['datasets']

    for (const x of data_datasets.entries()) {
        let diff = x[1]
        for (let i = 0; i < points.length; i++) {
            if (points[i].get(diff['label']) !== undefined) {
                diff['data'].push(points[i].get(diff['label']))
            } else {
                diff['data'].push(0)
            };
        };
    };



    console.log(data_diff['datasets'])



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