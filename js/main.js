function makeGradient(hex1, hex2, city) {
  console.log(hex1, hex2, city);
  // lineargradient
  var myLinearGradient = document.createElementNS("http://www.w3.org/2000/svg", "radialGradient");
  myLinearGradient.setAttribute("id", city);

  document.getElementById("mydefs").appendChild(myLinearGradient);

  //stops
  var stop1 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
  stop1.setAttribute("offset", "75%");
  //stop1.setAttribute("style", "stop-color: White; stop-opacity: 1");
  stop1.setAttribute("stop-color", hex1);
  document.getElementById(city).appendChild(stop1);

  var stop2 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
  stop2.setAttribute("offset", "95%");
  //stop2.setAttribute("style", "stop-color: #99cd9f; stop-opacity: 1");
  stop2.setAttribute("stop-color", hex2);
  document.getElementById(city).appendChild(stop2);

  var solid = document.createElementNS("http://www.w3.org/2000/svg", "solidColor");
  solid.setAttribute("id", city + "solid");
  solid.setAttribute("solid-color", hex1);

  document.getElementById("mydefs").appendChild(solid);

  defs = document.getElementById('mydefs');
  console.log("defs:", defs);
}

imageUrl = []

for (const [key, value] of Object.entries(cities)) {
  console.log(key, value);
  imageUrl.push("https://source.unsplash.com/random/?" + value.gradientKey)
}

array1 = imageUrl.slice(0,30);
array2 = imageUrl.slice(30,60);
array3 = imageUrl.slice(60, 90);
array4 = imageUrl.slice(90);

// instantiate a new Clarifai app passing in your api key.
const app = new Clarifai.App({
 apiKey: '4ca3d62af6c942a0b95ad8c17f7f8f5f'
});

app.models.predict("eeed0b6733a644cea07cf4c60f87ebb7", array1).then(
      function(response) {
        console.log(response);
        for (var i = 0; i < array1.length; i++){
          var url = array1[i]
          var city = url.substring(url.lastIndexOf("?") + 1);
          makeGradient(response.outputs[i].data.colors[0].raw_hex, response.outputs[i].data.colors[1].raw_hex, city)
        }
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
                  return `<div class="hoverinfo"> ${data.city} </div>`;
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
                newyork: 'url(#newyorksolid)',
                losangeles: 'url(#losangelessolid)',
            },
            gradients: {
                defaultFill: 'white',
                newyork: 'url(#newyork)',
                losangeles: 'url(#losangeles)',
                chicago: 'url(#chicago)',
                houston: 'url(#houston)',
                philadelphia: 'url(#philadelphia)',
                phoenix: 'url(#phoenix)',
                sanantonio: 'url(#sanantonio)',
                sandiego: 'url(#sandiego)',
                dallas: 'url(#dallas)',
                sanjose: 'url(#sanjose)',
                austin: 'url(#austin)',
                indianapolis: 'url(#indianapolis)',
                jacksonville: 'url(#jacksonville)',
                sanfrancisco: 'url(#sanfrancisco)',
                columbus: 'url(#columbus)',
            },
            data: {
                'NY': { fillKey: 'MINOR' },
                'CA': { fillKey: 'MINOR' }
            }
        });

// add the fading bubbles plugin
bubble_map.addPlugin('fadingBubbles', fadingBubbles);

// draw the fading bubbles at staggered intervals
drawBubbles = function(data) {

    data.forEach(function(datum, index) {

        setTimeout(function() {

            bubble_map.fadingBubbles([datum]);

      }, Math.floor(Math.random() * 4000) * 30);

    });

}

drawBubbles(cities);

var sleep = 25000;

var interval = setInterval(function() {
  drawBubbles(cities);
}, sleep);


bubble_map.bubbles(cities);
