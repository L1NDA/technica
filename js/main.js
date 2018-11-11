var newyorksolid;
var losangelessolid;
var chicagosolid;
var houstonsolid;
var philadelphiasolid;
var phoenixsolid;
var sanantoniosolid;
var sandiegosolid;
var dallassolid;
var sanjosesolid;
var austinsolid;
var indianapolissolid;
var jacksonvillesolid;
var sanfranciscosolid;
var columbussolid;
var charlottesolid;
var fortworthsolid;
var detroitsolid;
var elpasosolid;
var memphissolid;
var seattlesolid;
var denversolid;
var washingtonsolid;
var bostonsolid;
var nashvillesolid;
var baltimoresolid;
var oklahomacitysolid;
var louisvillesolid;
var portlandsolid;
var lasvegassolid;
var milwaukeesolid;
var albuquerquesolid;
var tucsonsolid;
var fresnosolid;
var sacramentosolid;
var longbeachsolid;
var kansascitysolid;
var mesasolid;
var virginiabeachsolid;
var atlantasolid;
var coloradospringssolid;
var omahasolid;
var raleighsolid;
var miamisolid;
var minneapolissolid;
var tulsasolid;
var clevelandsolid;
var wichitasolid;
var neworleanssolid;
var bakersfieldsolid;
var tampasolid;
var honolulusolid;
var stlouissolid;
var riversidesolid;
var corpuschristisolid;
var lexingtonfayettesolid;
var pittsburghsolid;
var anchoragesolid;
var cincinnatisolid;
var stpaulsolid;
var toledosolid;
var greensborosolid;
var newarksolid;
var lincolnsolid;
var buffalosolid;
var fortwaynesolid;
var orlandosolid;
var laredosolid;
var madisonsolid;
var lubbocksolid;
var renosolid;
var batonrougesolid;
var boisecitysolid;
var richmondsolid;
var birminghamsolid;
var spokanesolid;
var rochestersolid;
var desmoinessolid;
var tacomasolid;
var montgomerysolid;
var shreveportsolid;
var aurorasolid;
var littlerocksolid;
var augustasolid;
var amarillosolid;
var mobilesolid;
var grandrapidssolid;
var saltlakecitysolid;
var tallahasseesolid;
var huntsvillesolid;
var billings;
var acadiasolid;

function createMap() {
  console.log("create map");
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
                  borderWidth: 1,
                  borderOpacity: 1,
                  borderColor: '#FFFFFF',
                  popupOnHover: true,
                  radius: 4,
                  popupTemplate: function(geography, data) {
                    if (colors[data.fillKey].length > 2) {
                      console.log(colors[data.fillKey]);
                      return `<div class="hoverinfo"> <div class="title">${data.city}</div> <div class="container" style="display: flex; align-items: center; justify-content: center"><div class="hex" style="border: 1px solid black; background-color: ${colors[data.fillKey][0]}; height: 20px; width: 20px"></div> <div class="hex" style="background-color: ${colors[data.fillKey][1]}; height: 20px; width: 20px"></div><div class="hex" style="background-color: ${colors[data.fillKey][2]}; height: 20px; width: 20px"></div></div> <div class="image" style="height: 100px; width: 150px; background-image: url(${`https://source.unsplash.com/150x100/?${data.fillKey}`})"></div></div>`
                    } else {
                      console.log(colors[data.fillKey]);
                      return `<div class="hoverinfo"> <div class="title">${data.city}</div> <div class="container" style="display: flex; align-items: center; justify-content: center"><div class="hex" style="background-color: ${colors[data.fillKey][0]}; height: 20px; width: 20px"></div> <div class="hex" style="background-color: ${colors[data.fillKey][1]}; height: 20px; width: 20px"></div></div> <div class="image" style="background-image: url(${`https://source.unsplash.com/150x100/?${data.fillKey}`}); height: 100px; width: 150px"></div></div>`
                    }
                  },
                  fillOpacity: 1,
                  animate: true,
                  highlightOnHover: true,
                  highlightFillColor: '#ffffff',
                  highlightBorderColor: '#ffffff',
                  highlightBorderWidth: 0,
                  highlightBorderOpacity: 1,
                  highlightFillOpacity: 1,
                  exitDelay: 100,
                  key: JSON.stringify
              },
              fills: {
                  defaultFill: '#1e1e1e',
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
                  charlotte: 'url(#charlotte)',
                  fortworth: 'url(#fortworth)',
                  detroit: 'url(#detroit)',
                  elpaso: 'url(#elpaso)',
                  memphis: 'url(#memphis)',
                  seattle: 'url(#seattle)',
                  denver: 'url(#denver)',
                  washington: 'url(#washington)',
                  boston: 'url(#boston)',
                  nashville: 'url(#nashville)',
                  baltimore: 'url(#baltimore)',
                  oklahomacity: 'url(#oklahomacity)',
                  louisville: 'url(#louisville)',
                  portland: 'url(#portland)',
                  lasvegas: 'url(#lasvegas)',
                  milwaukee: 'url(#milwaukee)',
                  albuquerque: 'url(#albuquerque)',
                  tucson: 'url(#tucson)',
                  fresno: 'url(#fresno)',
                  sacramento: 'url(#sacramento)',
                  longbeach: 'url(#longbeach)',
                  kansascity: 'url(#kansascity)',
                  mesa: 'url(#mesa)',
                  virginiabeach: 'url(#virginiabeach)',
                  atlanta: 'url(#atlanta)',
                  coloradosprings: 'url(#coloradosprings)',
                  omaha: 'url(#omaha)',
                  raleigh: 'url(#raleigh)',
                  miami: 'url(#miami)',
                  minneapolis: 'url(#minneapolis)',
                  tulsa: 'url(#tulsa)',
                  cleveland: 'url(#cleveland)',
                  wichita:'url(#wichita)',
                  neworleans: 'url(#neworleans)',
                  bakersfield: 'url(#bakersfield)',
                  tampa: 'url(#tampa)',
                  honolulu: 'url(#honolulu)',
                  stlouis: 'url(#stlouis)',
                  riverside: 'url(#riverside)',
                  corpuschristi: 'url(#corpuschristi)',
                  lexingtonfayette: 'url(#lexingtonfayette)',
                  pittsburgh: 'url(#pittsburgh)',
                  anchorage: 'url(#anchorage)',
                  cincinnati: 'url(#cincinnati)',
                  stpaul: 'url(#stpaul)',
                  toledo: 'url(#toledo)',
                  greensboro: 'url(#greensboro)',
                  newark: 'url(#newark)',
                  lincoln: 'url(#lincoln)',
                  buffalo: 'url(#buffalo)',
                  fortwayne: 'url(#fortwayne)',
                  orlando: 'url(#orlando)',
                  laredo: 'url(#laredo)',
                  madison: 'url(#madison)',
                  lubbock: 'url(#lubbock)',
                  reno: 'url(#reno)',
                  batonrouge: 'url(#batonrouge)',
                  boisecity: 'url(#boisecity)',
                  richmond: 'url(#richmond)',
                  birmingham: 'url(#birmingham)',
                  spokane: 'url(#spokane)',
                  rochester: 'url(#rochester)',
                  desmoines: 'url(#desmoines)',
                  tacoma: 'url(#tacoma)',
                  montgomery: 'url(#montgomery)',
                  shreveport: 'url(#shreveport)',
                  aurora: 'url(#aurora)',
                  littlerock: 'url(#littlerock)',
                  augusta: 'url(#augusta)',
                  amarillo: 'url(#amarillo)',
                  mobile: 'url(#mobile)',
                  grandrapids: 'url(#grandrapids)',
                  saltlakecity: 'url(#saltlakecity)',
                  tallahassee: 'url(#tallahassee)',
                  huntsville: 'url(#huntsville)',
                  billings: 'url(#billings)',
                  acadia: 'url(#acadia)'
              },
              // gradients: {
              //     defaultFill: '#282828',
              //     newyorksolid: newyorksolid,
              //     losangelessolid: losangelessolid,
              //     chicagosolid: chicagosolid,
              //     houstonsolid: houstonsolid,
              //     philadelphiasolid: philadelphiasolid,
              //     phoenixsolid: phoenixsolid,
              //     sanantoniosolid: sanantoniosolid,
              //     sandiegosolid: sandiegosolid,
              //     dallassolid: dallassolid,
              //     sanjosesolid: sanjosesolid,
              //     austinsolid: austinsolid,
              //     indianapolissolid: indianapolis,
              //     jacksonvillesolid: jacksonvillesolid,
              //     sanfranciscosolid: sanfranciscosolid,
              //     columbussolid: columbussolid,
              //     charlottesolid: charlottesolid,
              //     fortworthsolid: fortworthsolid,
              //     detroitsolid: detroitsolid,
              //     elpasosolid: elpasosolid,
              //     memphissolid: memphissolid,
              //     seattlesolid: seattlesolid,
              //     denversolid: denversolid,
              //     washingtonsolid: washingtonsolid,
              //     bostonsolid: bostonsolid,
              //     nashvillesolid: nashvillesolid,
              //     baltimoresolid: baltimoresolid,
              //     oklahomacitysolid: oklahomacitysolid,
              //     louisvillesolid: louisvillesolid,
              //     portlandsolid: portlandsolid,
              //     lasvegassolid: lasvegassolid,
              //     milwaukeesolid: milwaukeesolid,
              //     albuquerquesolid: albuquerquesolid,
              //     tucsonsolid: tucsonsolid,
              //     fresnosolid: fresnosolid,
              //     sacramentosolid: sacramentosolid,
              //     longbeachsolid: longbeachsolid,
              //     kansascitysolid: kansascitysolid,
              //     mesasolid: mesasolid,
              //     virginiabeachsolid: virginiabeachsolid,
              //     atlantasolid: atlantasolid,
              //     coloradospringssolid: coloradospringssolid,
              //     omahasolid: omahasolid,
              //     raleighsolid: raleighsolid,
              //     miamisolid: miamisolid,
              //     minneapolissolid: minneapolissolid,
              //     tulsasolid: tulsasolid,
              //     clevelandsolid: clevelandsolid,
              //     wichitasolid: wichitasolid,
              //     neworleanssolid: neworleanssolid,
              //     bakersfieldsolid: bakersfieldsolid,
              //     tampasolid: tampasolid,
              //     honolulusolid: honolulusolid,
              //     stlouissolid: stlouissolidsolid,
              //     riversidesolid: riversidesolid,
              //     corpuschristisolid: corpuschristisolid,
              //     lexingtonfayettesolid: lexingtonfayettesolid,
              //     pittsburghsolid: pittsburghsolid,
              //     anchoragesolid: anchoragesolid,
              //     cincinnatisolid: cincinnatisolid,
              //     stpaulsolid: stpaulsolid,
              //     toledosolid: toledosolid,
              //     greensborosolid: greensborosolid,
              //     newarksolid: newarksolid,
              //     lincolnsolid: lincolnsolid,
              //     buffalosolid: buffalosolid,
              //     fortwaynesolid: fortwaynesolid,
              //     orlandosolid: orlandosolid,
              //     laredosolid: laredosolid,
              //     madisonsolid: madisonsolid,
              //     lubbocksolid: lubbocksolid,
              //     renosolid: renosolid,
              //     batonrougesolid: batonrougesolid,
              //     boisecitysolid: boisecitysolid,
              //     richmondsolid: richmondsolid,
              //     birminghamsolid: birminghamsolid,
              //     spokanesolid: spokanesolid,
              //     rochestersolid: rochestersolid,
              //     desmoinessolid: desmoinessolid,
              //     tacomasolid: tacomasolid,
              //     montgomerysolid: montgomerysolid,
              //     shreveportsolid: shreveportsolid,
              //     aurorasolid: aurorasolid,
              //     littlerocksolid: littlerocksolid,
              //     augustasolid: augustasolid,
              //     amarillosolid: amarillosolid,
              //     mobilesolid: mobilesolid,
              //     grandrapidssolid: grandrapidssolid,
              //     saltlakecitysolid: saltlakecitysolid,
              //     tallahasseesolid: tallahasseesolid,
              //     huntsvillesolid: huntsvillesolid
              // },
          });

  console.log("before bubbles");

  bubble_map.bubbles(cities);

  console.log("after bubbles");

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

}


function makeGradient(hex1, hex2, city) {
  // console.log(hex1, hex2, city);
  // lineargradient
  var myLinearGradient = document.createElementNS("http://www.w3.org/2000/svg", "linearGradient");
  myLinearGradient.setAttribute("id", city);

  document.getElementById("mydefs").appendChild(myLinearGradient);

  //stops
  var stop1 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
  stop1.setAttribute("offset", "5%");
  //stop1.setAttribute("style", "stop-color: White; stop-opacity: 1");
  stop1.setAttribute("stop-color", hex1);
  document.getElementById(city).appendChild(stop1);

  var stop2 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
  stop2.setAttribute("offset", "95%");
  //stop2.setAttribute("style", "stop-color: #99cd9f; stop-opacity: 1");
  stop2.setAttribute("stop-color", hex2);
  document.getElementById(city).appendChild(stop2);

  // var solid = document.createElementNS("http://www.w3.org/2000/svg", "solidColor");
  // solid.setAttribute("id", city + "solid");
  // solid.setAttribute("solid-color", hex1);
  // solid.setAttribute("solid-opacity", "1");
  //
  // document.getElementById("mydefs").appendChild(solid);

  // window[`${city}solid`] = hex1;
  // console.log(`${city}solid`);
  // console.log(hex1);

  defs = document.getElementById('mydefs');
  // console.log("defs:", defs);
}

imageUrl = []


function app2() {
  const app2 = new Clarifai.App({
   apiKey: '6570ec56608544d99af0300e3f7ed6b1'
  });

  app2.models.predict("eeed0b6733a644cea07cf4c60f87ebb7", array2).then(
        function(response) {
          console.log(response);
          for (var c = 0; c < array2.length; c++){
            var url = array2[c];
            var city = url.substring(url.lastIndexOf("?") + 1);
            makeGradient(response.outputs[c].data.colors[0].raw_hex, response.outputs[c].data.colors[1].raw_hex, city);
            let tempColor = [];
            for (var d = 0; d < response.outputs[c].data.colors.length; d++) {
              // console.log(d);
              tempColor.push(response.outputs[c].data.colors[d].raw_hex);
            };
            colors[city] = tempColor;
          }
          console.log("outside 2");
          app3();
        },
        function(err) {
          console.log(image)
          console.log(err)
        }
    );
}

function app3() {
  const app3 = new Clarifai.App({
   apiKey: 'be6eb484b8464f2a902652301c9d6a36'
  });

  app3.models.predict("eeed0b6733a644cea07cf4c60f87ebb7", array3).then(
        function(response) {
          console.log(response);
          for (var e = 0; e < array3.length; e++){
            var url = array3[e];
            var city = url.substring(url.lastIndexOf("?") + 1);
            makeGradient(response.outputs[e].data.colors[0].raw_hex, response.outputs[e].data.colors[1].raw_hex, city);
            let tempColor = [];
            for (var f = 0; f < response.outputs[e].data.colors.length; f++) {
              tempColor.push(response.outputs[e].data.colors[f].raw_hex);
            };
            colors[city] = tempColor;
          }
          console.log("outside 3");
          createMap();
        },
        function(err) {
          console.log(image)
          console.log(err)
        }
    );
}

for (const [key, value] of Object.entries(cities)) {
  // console.log(key, value);
  imageUrl.push("https://source.unsplash.com/random/?" + value.fillKey)
}

// array1 = imageUrl.slice(0,30);
// array2 = imageUrl.slice(30,60);
// array3 = imageUrl.slice(60, 90);
// array4 = imageUrl.slice(90);

array1 = imageUrl

// console.log(array1, array2, array3);

var colors = {};

// instantiate a new Clarifai app passing in your api key.
const app1 = new Clarifai.App({
 apiKey: 'c34578ea9d6c4308a91d4e1be6f94ad6'
});

console.log("running clar");

app1.models.predict("eeed0b6733a644cea07cf4c60f87ebb7", array1).then(
      function(response) {
        console.log(response);
        // console.log(array1.length);
        for (var a = 0; a < array1.length; a++) {
          var url = array1[a];
          // console.log(a);
          var city = url.substring(url.lastIndexOf("?") + 1);
          // console.log(city);
          makeGradient(response.outputs[a].data.colors[0].raw_hex, response.outputs[a].data.colors[1].raw_hex, city);
          let tempColor = [];
          for (var b = 0; b < response.outputs[a].data.colors.length; b++) {
            // console.log("colors", response.outputs[a].data.colors[b].raw_hex);
            tempColor.push(response.outputs[a].data.colors[b].raw_hex);
          };
          colors[city] = tempColor;
          // console.log(a, colors);
        }
        console.log("outside 1");
        createMap();
      },
      function(err) {
        console.log(image)
        console.log(err)
      }
  );

// app.models.predict("eeed0b6733a644cea07cf4c60f87ebb7", array4).then(
//       function(response) {
//         console.log(response);
//         for (var i = 0; i < array4.length; i++){
//           var url = array4[i]
//           var city = url.substring(url.lastIndexOf("?") + 1);
//           makeGradient(response.outputs[i].data.colors[0].raw_hex, response.outputs[i].data.colors[1].raw_hex, city)
//           let tempColor = []
//           for (var i = 0; i < response.outputs[i].data.colors; i++) {
//             tempColor.push(response.outputs[i].data.colors[i].raw_hex)
//           }
//           colors.push(tempColor)
//           console.log(i)
//         }
//         console.log("outside 4");
//         createMap();
//       },
//       function(err) {
//         console.log(image)
//         console.log(err)
//       }
//   );

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
