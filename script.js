// labels along the x-axis
var years = [1960,1970,1980,1990,2000,2010];
// For drawing the lines
var cattle = [5,6.5,6.5,7.5,8,11];
var chickens = [0,0,0,1,2,2.5];
var goats = [2,2.5,1,2.5,4.5,6];
var pigs = [3,5,10,14.5,16,34];
var sheep = [7,8,16,18.5,16,15];

var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: years,
    datasets: [
      {
        data: cattle,
        label: "Cattle",
        borderColor: "#3e95cd",
        fill: false
      },
      {
        data: chickens,
        label: "Chickens",
        borderColor: "#8e5ea2",
        fill: false
      },
      {
        data: goats,
        label: "Goats",
        borderColor: "#FEF306",
        fill: false
      },
      {
        data: pigs,
        label: "Pigs",
        borderColor: "#FB0101",
        fill: false
      },
      {
        data: sheep,
        label: "Sheep",
        borderColor: "#ff8c00",
        fill: false
      }
    ]
  }
});

// Bar chart
var countries = ["Kuwait", "Iraq", "Iran", "Saudi Arabia", "Venezuela"];
var billion_barrels = [102, 147, 156, 266, 303]

new Chart(document.getElementById("bar-chart"), {
    type: 'bar',
    data: {
      labels: countries,
      datasets: [
        {
          label: "Percent of reported cases that have been fatal",
          backgroundColor: ["#99FE06", "#00BC1F","#FEF306","#FB9C01","#FB0101"],
          data: billion_barrels
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Data is extracted from BP Statistical Review of World Energy 2018 (billion barrels)'
      }
    }
});
