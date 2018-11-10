var image = {};

function getBase64Image(imgUrl, callback) {

    var img = new Image();

    // onload fires when the image is fully loadded, and has width and height

    img.onload = function(){

      var canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      var ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);
      var dataURL = canvas.toDataURL("image/png"),
          dataURL = dataURL.replace(/^data:image\/(png|jpg);base64,/, "");

      callback(dataURL); // the base64 string

    };

    // set attributes and src
    img.setAttribute('crossOrigin', 'anonymous'); //
    img.src = imgUrl;

}

getBase64Image("https://source.unsplash.com/assets/photo-1428279148693-1cf2163ed67d-9869bbd99114f8d100a48d67d1b8ec56c4171e661131714f2b570e6dcc0b8bb3.jpg", function(base64image){
     console.log(base64image);
     image["base64"] = base64image;
});

imageUrl= "https://source.unsplash.com/random/?san,francisco"

// instantiate a new Clarifai app passing in your api key.
const app = new Clarifai.App({
 apiKey: '4ca3d62af6c942a0b95ad8c17f7f8f5f'
});

app.models.predict("eeed0b6733a644cea07cf4c60f87ebb7", imageUrl).then(
    function(response) {
      console.log("success")
      console.log(response)
    },
    function(err) {
      console.log(image)
      console.log(err)
    }
  );
