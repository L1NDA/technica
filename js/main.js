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

imageUrl= "https://source.unsplash.com/random/?sanfrancisco"

// instantiate a new Clarifai app passing in your api key.
const app = new Clarifai.App({
 apiKey: '4ca3d62af6c942a0b95ad8c17f7f8f5f'
});

app.models.predict("eeed0b6733a644cea07cf4c60f87ebb7", imageUrl).then(
      function(response) {
        // colors = response.outputs[0].data.colors
        console.log(imageUrl);
        getHex(response.outputs[0].data.colors[0], response.outputs[0].data.colors[1], imageUrl)
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
                GRAD: 'url(#gradient)'
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

      }, Math.floor(Math.random() * 10000) * 10);

  });

}

drawBubbles(cities);

var sleep = 5000;

setInterval(function() {
  drawBubbles(cities);
}, sleep);


// bubble_map.bubbles(cities);
