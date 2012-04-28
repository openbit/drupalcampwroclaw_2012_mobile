/**
 * Declares App global object and mixes with tools function
 */

Ti.API.info('Start app/app.js');

var App = {};

(function(){
	tools.mixin(App, tools);	
})();

//include all index-files for each folder

Ti.include( 
	'/app/ui/ui.js'
);
