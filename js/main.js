function makeGradient(hex1, hex2, city) {
  // lineargradient
  var myLinearGradient = document.createElementNS("http://www.w3.org/2000/svg", "linearGradient");
  myLinearGradient.setAttribute("id", "gradient");

  document.getElementById("mydefs").appendChild(myLinearGradient);

  //stops
  var stop1 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
  stop1.setAttribute("offset", "5%");
  //stop1.setAttribute("style", "stop-color: White; stop-opacity: 1");
  stop1.setAttribute("stop-color", "#ab4d2b");
  document.getElementById("gradient").appendChild(stop1);

  var stop2 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
  stop2.setAttribute("offset", "95%");
  //stop2.setAttribute("style", "stop-color: #99cd9f; stop-opacity: 1");
  stop2.setAttribute("stop-color", "#858b87");
  document.getElementById("gradient").appendChild(stop2);

  defs = document.getElementById('mydefs');
  console.log(mydefs);
}

makeGradient();

imageUrl= "https://source.unsplash.com/random/?san,francisco"

// instantiate a new Clarifai app passing in your api key.
const app = new Clarifai.App({
 apiKey: '4ca3d62af6c942a0b95ad8c17f7f8f5f'
});

app.models.predict("eeed0b6733a644cea07cf4c60f87ebb7", imageUrl).then(
      function(response) {
        // colors = response.outputs[0].data.colors
        // console.log(colors)
        getHex(response.outputs[0].data.colors[0], response.outputs[0].data.colors[1])
      },
      function(err) {
        console.log(image)
        console.log(err)
      }
    );

// function getHex(colors) {
//   boxes = document.querySelectorAll(".hex")
//   console.log(boxes)
//   console.log(colors)
//   boxes.forEach(function(box, index) {
//     if (colors[index]) {
//       box.style.display = "block";
//       box.style.backgroundColor = colors[index].raw_hex
//     }
//   })
//
// }

var bubble_map = new Datamap({
            element: document.getElementById('container'),
            scope: 'usa',
            geographyConfig: {
                popupOnHover: false,
                highlightOnHover: false,
                borderWidth: 0,
                highlightBorderWidth: 0,
                dataUrl: 'https://rawgit.com/Anujarya300/bubble_maps/master/data/geography-data/usa.topo.json'
                //dataJson: topoJsonData
            },
            bubblesConfig: {
                borderWidth: 2,
                borderOpacity: 1,
                borderColor: '#FFFFFF',
                popupOnHover: true,
                radius: null,
                popupTemplate: function(geography, data) {
                  return `<div class="hoverinfo"> ${data.state} </div>`;
                },
                fillOpacity: 1,
                animate: true,
                highlightOnHover: true,
                highlightFillColor: '#000000',
                highlightBorderColor: 'rgba(250, 15, 160, 0.2)',
                highlightBorderWidth: 2,
                highlightBorderOpacity: 1,
                highlightFillOpacity: 0.85,
                exitDelay: 100,
                key: JSON.stringify
            },
            fills: {
                defaultFill: '#282828',
                GRAD: 'url(#gradient)'
            },
            data: {
                'NY': { fillKey: 'MINOR' },
                'CA': { fillKey: 'MINOR' }
            }
        });

bubble_map.bubbles([
  {
          city: "New York",
          fillKey: "GRAD",
          radius: 10,
          growth_from_2000_to_2013: "4.8%",
          latitude: 40.7127837,
          longitude: -74.0059413,
          population: "8405837",
          rank: "1",
          state: "New York"
      },
      {
          city: "Los Angeles",
          radius: 10,
          growth_from_2000_to_2013: "4.8%",
          latitude: 34.0522342,
          longitude: -118.2436849,
          population: "3884307",
          rank: "2",
          state: "California"
      },
      {
          city: "Chicago",
          radius: 10,
          growth_from_2000_to_2013: "-6.1%",
          latitude: 41.8781136,
          longitude: -87.6297982,
          population: "2718782",
          rank: "3",
          state: "Illinois"
      },
      {
          city: "Houston",
          radius: 10,
          growth_from_2000_to_2013: "11.0%",
          latitude: 29.7604267,
          longitude: -95.3698028,
          population: "2195914",
          rank: "4",
          state: "Texas"
      },
      {
          city: "Philadelphia",
          radius: 10,
          growth_from_2000_to_2013: "2.6%",
          latitude: 39.9525839,
          longitude: -75.1652215,
          population: "1553165",
          rank: "5",
          state: "Pennsylvania"
      },
      {
          city: "Phoenix",
          radius: 10,
          growth_from_2000_to_2013: "14.0%",
          latitude: 33.4483771,
          longitude: -112.0740373,
          population: "1513367",
          rank: "6",
          state: "Arizona"
      },
]);
