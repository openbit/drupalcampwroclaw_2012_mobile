/**
 * Index for all files on ui folder and App.ui declaration
 */
Ti.API.info('Start ui.js');

App.ui = {};

//ui views and styles
Ti.include(
	'/app/ui/labels.js',
	'/app/ui/buttons.js',
	'/app/ui/forms.js',		
	'/app/ui/mainWindow.js',
	'/app/config/config.js'	
);


