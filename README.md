# Chro·map·tic

Chromaptic is a visualization of the colors representing cities in the United States. The program parses photos from different cities posted to [Unsplash](https://unsplash.com/) into the Clarifai API, to return the dominant color of the photos, which are then visualized on a map. Users are then able to hover their mouse over the map markers to get the name of the city, and preview one of the photos that was used to determine that city's color.

The motivation behind this hack was to determine if there exists a color that best represents a city. Is Los Angeles more blue? Is Phoenix more orange? By building this program, we were able to see that in fact, this is true! 

First, we utilized the Unsplash API to search for photos by keywords to get the photos tagged with each city. Then, those photos were run through the Clarifai API, that offers image and video recognition as a service, to get predictions of the dominant colors in the images. These colors were then used to create a gradient bubble whose size is proportional to the city's population, that marks the city on the US map. We utilized cities.json, which provided data on the top 1000 cities in the US, to create the map and its elements.

## Acknowledgements

* [HTML5 Boilerplate](https://html5boilerplate.com/) - The front-end template
* [cities.json](https://gist.github.com/Miserlou/c5cd8364bf9b2420bb29) - Database of 1000 largest US cities

## Authors

* **Linda Qin** - *Contributor* - [L1NDA](https://github.com/L1NDA)
* **Helen Chen** - *Contributor* - [helenjjchen](https://github.com/helenjjchen)
* **Rachel Leong** - *Contributor* - [rachellsmae](https://github.com/rachellsmae)
