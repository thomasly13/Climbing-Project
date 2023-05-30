

export function toggle(){
    const areas = document.querySelectorAll('.areas');
    for (let i = 0; i < areas.length; i++) {
        areas[i].addEventListener("click", _hide);
        areas[i].addEventListener("click", _areaToggler);
    }

    const difficulties = document.querySelectorAll('.difficulties');
    for (let i = 0; i < difficulties.length; i++) {
        difficulties[i].addEventListener("click", _hide);
        difficulties[i].addEventListener("click", _difficultyToggler);
    }

};

const north = [];
const east = [];
const south = [];
const west= [];

const _hide = (e) => {
    let feature = e.target;
    feature.classList.toggle("off");
};



const _difficultyToggler = (e) => {    
    let diff = e.target.textContent.slice(1);
    let showValue = window.chart.isDatasetVisible(diff);
    if (showValue === true) {
        window.chart.hide(diff);
    } else {
        window.chart.show(diff);
    }
};

const _areaToggler = (e) => {
    let area = e.target.textContent
    let config = window.chart['config'];
    let data_diff = config['data'];
    let data_labels = data_diff['labels'];
    let data_datasets = data_diff['datasets'];


    if (data_labels.includes(area)) {
        let index = data_labels.indexOf(area);

        if (area === 'North Bay') {
            for (const x of data_datasets.entries()) {
                let diff = x[1];
                let diff_data = diff['data'];
                north.push(diff_data.splice(index, 1)); 
            };
            north.push(data_labels.splice(index, 1));

        } else if (area === 'East Bay') {
            for (const x of data_datasets.entries()) {
                let diff = x[1];
                let diff_data = diff['data'];
                east.push(diff_data.splice(index, 1)); 
            };
            east.push(data_labels.splice(index, 1));

        } else if (area === 'South Bay') {
            for (const x of data_datasets.entries()) {
                let diff = x[1];
                let diff_data = diff['data'];
                south.push(diff_data.splice(index, 1)); 
            };
            south.push(data_labels.splice(index, 1));

        } else if (area === 'West Bay') {
            for (const x of data_datasets.entries()) {
                let diff = x[1];
                let diff_data = diff['data'];
                west.push(diff_data.splice(index, 1)); 
            };
            west.push(data_labels.splice(index, 1));
        }

    } else {
        if (area === 'North Bay') {
            for (const x of data_datasets.entries()) {
                let diff = x[1];
                let diff_data = diff['data'];
                let difficulty = north.shift();
                diff_data.push(difficulty[0]); 
            };
            let location = north.shift();
            data_labels.push(location[0]);

        } else if (area === 'East Bay') {
            for (const x of data_datasets.entries()) {
                let diff = x[1];
                let diff_data = diff['data'];
                let difficulty = east.shift();
                diff_data.push(difficulty[0]); 
            };
            let location = east.shift();
            data_labels.push(location[0]);

        } else if (area === 'South Bay') {
            for (const x of data_datasets.entries()) {
                let diff = x[1];
                let diff_data = diff['data'];
                let difficulty = south.shift();
                diff_data.push(difficulty[0]); 
            };
            let location = south.shift();
            data_labels.push(location[0]);

        } else if (area === 'West Bay') {
            for (const x of data_datasets.entries()) {
                let diff = x[1];
                let diff_data = diff['data'];
                let difficulty = west.shift();
                diff_data.push(difficulty[0]); 
            };
            let location = west.shift();
            data_labels.push(location[0]);
        };
    };
    window.chart.update();
};
