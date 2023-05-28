

export function loadChart() {


    const data = {
        labels: ["North Bay", "East Bay", "South Bay", "West Bay"],
        datasets: [{
            label: 'Bay Area Boulders',
            data: [50, 49, 44, 24],
            backgroundColor: ["red", "green","blue","orange"],
            borderWidth: 1          
        }, {
            label: 'Bay Area Boulders',
            data: [37, 49, 44, 24],
            backgroundColor: ["orange", "red","green","blue"],
            borderWidth: 1          
        }, {
            label: 'Bay Area Boulders',
            data: [32, 49, 44, 24],
            backgroundColor: ["blue", "orange","red","green"],
            borderWidth: 1          
        }, 
        {
            label: 'Bay Area Boulders',
            data: [20, 49, 44, 24],
            backgroundColor: ["green", "blue","orange","red"],
            borderWidth: 1          
        }]
        
    };

    const config = {
        animmationEnabled: true,
        type: 'bar',
        data: data,
        options: {
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

    const myChart = new Chart(
        document.getElementById('myChart'),
        {
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
        });





};