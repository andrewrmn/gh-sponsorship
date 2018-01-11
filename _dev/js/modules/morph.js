'use strict';

const $ = require('jquery');

class Morph {

	constructor( options ) {

		//setup any defaults
		this.defaults = {};

		//merge options with defaults
		this.settings = $.extend( true, {}, this.defaults, options );

		if( $('.morph').length ) {
			this.events();
        } else {
            return;
        }
	}

	events() {

		var blob = $('.morph');

		blob.each(function(){
			var el= $(this),
				start = el.find('.morph-start'),
				end = el.find('.morph-end');

			TweenMax.to(start, 6, {morphSVG: end, ease:Linear.easeNone, repeat:-1, yoyo: true});
		});


	}

}

module.exports = Morph;
