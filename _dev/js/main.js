'use strict';

const $ = require('jquery');
const App = require('./modules/app.js');
const Viewport = require('./modules/viewport.js');
const Morph = require('./modules/morph.js');
const ClickFunctions = require('./modules/clickFunction.js');
const ScrollTo = require('./modules/scrollTo.js');
const Tabs = require('./modules/tabs.js');
const Lines = require('./modules/lines.js');
const Gallery = require('./modules/gallery.js');
const Graphs = require('./modules/graphs.js');

$(function(){
	//create the app.
	let app = new App();
	let viewport = new Viewport();
	let morph = new Morph();
	let clickFunctions = new ClickFunctions();
	let scrollTo = new ScrollTo();
	let lines = new Lines();
	let tabs = new Tabs();
	let graphs = new Graphs();
	let gallery = new Gallery();
});
