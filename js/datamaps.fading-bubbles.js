function val( datumValue, optionsValue, context ) {
    if ( typeof context === 'undefined' ) {
      context = optionsValue;
      optionsValues = undefined;
    }
    var value = typeof datumValue !== 'undefined' ? datumValue : optionsValue;

    if (typeof value === 'undefined') {
      return  null;
    }

    if ( typeof value === 'function' ) {
      var fnContext = [context];
      if ( context.geography ) {
        fnContext = [context.geography, context.data];
      }
      return value.apply(null, fnContext);
    }
    else {
      return value;
    }
  }

fadingBubbles = function(layer, data){

    // the datamap instance
    var self = this,
        className = 'fadingBubble',
        defaultColor = 'white';
        gradientData = this.options.gradients;

    // bind the data
    var bubbles = layer
        .selectAll(className)
        .data(data, JSON.stringify)

    // append the circles
    bubbles.enter()
        .append('circle')
        .attr('class', className)
        .attr('cx', function(datum) {

            return self.latLngToXY(datum.latitude, datum.longitude)[0];

        })
        .attr('cy', function(datum) {

            return self.latLngToXY(datum.latitude, datum.longitude)[1];

        })
        .attr('r', function(){

            /**
             * The initial radius of the circle.
             * we will transition this value to a larger number
             */
            return 1;
        })
        // .style('fill', function(d, i) {
        //
        //     /**
        //      * If a fillKey was specified in the data, and if the datamap
        //      * was initialized with the "fills" option, then use the color
        //      * of this fill key for this bubble
        //      */
        //     // if (self.options.fills && d.fillKey) {
        //     //
        //     //     if (self.options.fills[d.fillKey]) {
        //     //         return self.options.fills[d.fillKey];
        //     //     }
        //     // }
        //     var datum = colorCodeData[d.id];
        //     return fillData[ val(datum.fillKey, {data: colorCodeData[d.id], geography: d}) ]
        //     return self.options.fills[d.fillKey];
        //
        //     // no fillKey was specified, so use the default color
        //     return defaultColor;
        //
        // })
        .style('fill', function ( datum ) {
          var fillColor = gradientData[datum.gradientKey];
          return fillColor || gradientData.defaultFill;
        })
        .style('stroke', function(d, i) {

            // same logic as the fill property
            if (self.options.fills && d.fillKey) {

                if (self.options.fills[d.fillKey]) {
                    return self.options.fills[d.fillKey];
                }
            }
            return defaultColor;
        })
        .transition()
        .duration(3000)
        .ease(Math.sqrt)
        .attr('r', function(datum) {

            /**
             * The size of the bubble can be controlled using the magnitude
             * property
             */
            return datum.magnitude ? datum.magnitude * 10 : 30;

        })
        .style('fill-opacity', 1)
        .style('stroke-opacity', 1)
        .remove()

}
