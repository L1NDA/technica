var newyorksolid;
var losangelessolid;
var chicagosolid;
var houstonsolid;
var philadelphiasolid;
var phoenixsolid;
var sanantoniosolid;
var sandiegosolid;

function createMap() {
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
                  highlightFillColor: '#ffffff',
                  highlightBorderColor: '#ffffff',
                  highlightBorderWidth: 0,
                  highlightBorderOpacity: 1,
                  highlightFillOpacity: 1,
                  exitDelay: 100,
                  key: JSON.stringify
              },
              fills: {
                  defaultFill: '#282828',
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
                  knoxville: 'url(#knoxville)',
                  brownsville: 'url(#brownsville)',
                  providence: 'url(#providence)',
                  chattanooga: 'url(#chattanooga)',
                  jackson: 'url(#jackson)',
                  fortlauderdale: 'url(#fortlauderdale)',
                  portstlucie: 'url(#portstlucie)',
                  capecoral: 'url(#capecoral)',
                  siouxfalls: 'url(#siouxfalls)',
                  springfield: 'url(#springfield)',
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
              //     huntsvillesolid: huntsvillesolid,
              //     knoxvillesolid: knoxvillesolid,
              //     brownsvillesolid: brownsvillesolid,
              //     providencesolid: providencesolid,
              //     chattanoogasolid: chattanoogasolid,
              //     jacksonsolid: jacksonsolid,
              //     fortlauderdalesolid: fortlauderdalesolid,
              //     portstluciesolid: portstluciesolid,
              //     capecoralsolid: capecoralsolid,
              //     siouxfallssolid: siouxfallssolid,
              //     springfieldsolid: springfieldsolid,
              //     acadiasolid: acadiasolid
              // },
          });

  bubble_map.bubbles(cities);

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
  console.log(hex1, hex2, city);
  // lineargradient
  var myLinearGradient = document.createElementNS("http://www.w3.org/2000/svg", "linearGradient");
  myLinearGradient.setAttribute("id", city);

  document.getElementById("mydefs").appendChild(myLinearGradient);

  //stops
  var stop1 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
  stop1.setAttribute("offset", "10%");
  //stop1.setAttribute("style", "stop-color: White; stop-opacity: 1");
  stop1.setAttribute("stop-color", hex1);
  document.getElementById(city).appendChild(stop1);

  var stop2 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
  stop2.setAttribute("offset", "90%");
  //stop2.setAttribute("style", "stop-color: #99cd9f; stop-opacity: 1");
  stop2.setAttribute("stop-color", hex2);
  document.getElementById(city).appendChild(stop2);

  // var solid = document.createElementNS("http://www.w3.org/2000/svg", "solidColor");
  // solid.setAttribute("id", city + "solid");
  // solid.setAttribute("solid-color", hex1);
  // solid.setAttribute("solid-opacity", "1");
  //
  // document.getElementById("mydefs").appendChild(solid);

  window[`${city}solid`] = hex1;

  defs = document.getElementById('mydefs');
  console.log("defs:", defs);
}

imageUrl = []

for (const [key, value] of Object.entries(cities)) {
  console.log(key, value);
  imageUrl.push("https://source.unsplash.com/random/?" + value.fillKey)
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
        createMap();
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
