

var options = {
    type: 'bar',
    data: {
    labels: ['','','','','','','','','','','','','',''], 
      datasets: [{
        label: '',
       
        data:[40,60,50,20,0,60,90,55,60,0,80,95,85,55],
        backgroundColor:[
            '#2A66FF',
            '#FF4545',
            '#FDB52A',
            '#090909',
            '#FFFFFF',
            '#2A66FF',
            '#FF4545',
            '#FDB52A',
            '#090909',
            '#FFFFFF',
            '#2A66FF',
            '#FF4545',
            '#FDB52A',
            '#090909',
            
            
        ],
        borderRadius:{
            topLeft:15,
            topRight:15   
        },
        borderSkipped: false,
       
        
      }]
    },
    options: {
        scales: {
            x: {
                display: false,
              
            },
            y: {
                display:false,
                
              
            },
            
        },
        plugins: {
            
            legend: {
              display:false
            }
         }
       
    }
  }
var ctx = document.querySelector('.portfolio__collumns').getContext('2d');
new Chart(ctx, options);
 
