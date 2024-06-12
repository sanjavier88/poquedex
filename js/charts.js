
const ctx = document.getElementById('stats');





export function createChart(stats) {
    return new Chart(ctx, {
        type: 'radar',
        data: {
             labels: [
            'HP',
            'Attack',
            'Defense',
            ['special' ,'Attack'],
            ['special' ,'Defense'],
            'Speed',
           
          ],
          datasets: [{
            data: stats,
            backgroundColor: 'white',
          }]
        },
        options: {
            maintainAspectRatio: false,
            Plugins: {
                legend: {
                    display: false,
                }
            },
            scales: {
                r: {
                    grid:{
                        color: 'white'
                    },
                    pointLabels: {
                        color: 'white'
                    },
                    angleLines: {
                          color: 'white'
                    },
                }
            }
        }
       
      });
}