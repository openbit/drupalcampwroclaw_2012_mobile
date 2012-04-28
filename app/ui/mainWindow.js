/**
 * Creates main window creator function
 */
Ti.API.info('Start mainWindow.js');

App.ui.createAppTabs = {}; (function() {

	App.ui.createAppTabs = function() {

		var tabGroup = Ti.UI.createTabGroup();
					
		Ti.include('/app/ui/winSessions.js');
		tabGroup.addTab(tabSessions);
		Ti.include('/app/ui/winSpeakers.js');
		tabGroup.addTab(tabSpeakers);
		Ti.include('/app/ui/winSponsors.js');
		tabGroup.addTab(tabSponsors);		
		Ti.include('/app/ui/winAbout.js');
		tabGroup.addTab(tabAbout);		

		return tabGroup;
	}
})();

