var WonderWoman = {};
  WonderWoman['Linda Carter'] = 0;
  WonderWoman['Gal Gadot'] = 0;
$(document).ready(function(){
  

    $("#marston-button").click(function(){
        $("#marston-bio").addClass("text-blue");
        $("#marston-bio").toggle();
    });

  drawChart();
  
  $("#submit").click(function(){
      if($("#WonderWoman").val()=="Linda Carter"){
        WonderWoman['Linda Carter']++;
      }
      if($("#WonderWoman").val()=="Gal Gadot"){
          WonderWoman['Gal Gadot']++;
       }
    drawChart();
  });
  
  function drawChart(){
    var ctx = $('#myChart');
    var myPieChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Gal Gadot', 'Linda Carter'],
            datasets: [{
                label: '# of Votes',
                data: [WonderWoman['Gal Gadot'], WonderWoman['Linda Carter']],
              backgroundColor:[
                'blue',
                'red'
              ]
            }]
            }
        });
  }
  });