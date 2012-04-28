/**
 * DrupalCamp Wroclaw app 
 * @version      0.1
 * @author       Grzegorz Bartman, www.openbit.pl
 */
Ti.API.info('Start app.js ================================================  ');

Ti.include(
	'/lib/print_r.js',
	'/app/config/config.js',
	'/drupal_api/drupal.js',
	'/drupal_api/drupal_dcwroc.js',
	'/app/tools.js',
	'/app/app.js'	
	);

(function(){
	var tabGroup = App.ui.createAppTabs();	
	tabGroup.open();
})();


