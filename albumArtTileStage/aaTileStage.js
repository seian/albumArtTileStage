// Album Arts
// no-desc
// by Byunghoon Lim
// Feb., 2014

$(document).ready(function(e) {
    // album arts
    var aa = {'column'      : 3,        // set column
              'row'         : 9,        // set row
              'size'        : 80,       // set a size in pixel
              'bigImg'      : 3,        // set a number of big images
              'mainDivId'   : 'aaSet',  // set main div for album arts section
              'imgAddr'     : [],       // set image addresses
              'debugMode'   : true,     // debug mode
              // private variables
              'pVars'   : [],
              // initializer
              init : function() {
                        this.pVars['bigImgCoord'] = [];

                      },
              // draw a table
              onDraw : function() {
                            
                      },
              // get random coordination for big imgs
              getRandomCoordBI : function() {
                        for(var i=0;i<this.bigImg;i++) {
                            this.pVars['bigImgCoord'].push(this.setRandomCalib(i));
                        }
                        if(this.debugMode == true) {
                            console.log('big image coordinations :');
                            console.log(this.pVars['bigImgCoord']); 
                        }
                     },
              // get random number
              setRandomCalib : function(nth) {
                        var coord = {};
                        
                        coord['_col'] = this.getRandom(this.column);

                        return coord;
                     },
              getRandom : function(i) {
                        return Math.floor(Math.random() * (i-1));
                     },
              exec : function() {
                        this.getRandomCoordBI();
                     }
             };
            
    aa.init();
    aa.getRandomCoordBI();
});
