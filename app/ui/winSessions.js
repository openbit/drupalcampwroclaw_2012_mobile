// On app start.

var winSessions = Titanium.UI.createWindow({
	title : 'Sesje',
	backgroundColor : settings.ui.background ,
});
var tabSessions= Titanium.UI.createTab({
	title : 'Sesje',
	icon:'/session.png',
	window : winSessions
});

// Define empty table view.
var results = {}
var tableSessions= Titanium.UI.createTableView({
	data : results,
	headerTitle : 'Lista zaakceptowanych sesji'
});


// Get sessions on load window.
Drupal.getSessions('getViewSessions');

winSessions.add(labelLoading);

// Get data from function
Ti.App.addEventListener('getViewSessions', function(data) {
	//Ti.API.info('Start addEventListener getViewMyLogs');
	var results = new Array();
	// Prepare data for TableView.
	
		for(var key in data) {
			if(key != 'type') {
				//Ti.API.info('for data key: ' + key);
				var data_row = data[key];
				//Titanium.API.info('row data : ' + print_r(data[key]));
				var startDateUTC = new Date(data_row.node_node_data_field_session_slot_node_data_field_slot_datetime_field_slot_datetime_value);
				var minutesOffset = startDateUTC.getTimezoneOffset()
				var startDateLocal = new Date(startDateUTC);
				startDateLocal.setMinutes(startDateUTC.getMinutes() - minutesOffset);
				
				//Titanium.API.info('row startDate : ' + startDateUTC.getTimezoneOffset());
				var startDateString = startDateLocal.format("Y-m-d H:i");
				 
				var row = Titanium.UI.createTableViewRow();

				
				var labelSessionStart = Titanium.UI.createLabel({
					text : '' + startDateString,
					font : {
						fontSize : '14sp',
						fontWeight : 'bold'
					},
					width : 'auto',
					textAlign : 'left',
					top : '4dp',
					left : '10dp',
					height : '20dp'
				});

				var labelSessionSpeaker = Titanium.UI.createLabel({
					text : data_row.profile_values_profile_first_value + ' ' + data_row.profile_values_profile_last_value ,
					font : {
						fontSize : '14sp',
						fontWeight : 'bold'
					},
					color: '#a6af5b',
					width : 'auto',
					textAlign : 'left',
					top : '4dp',
					right : '4dp',
					height : '20dp'
				});
				
				var labelSessionTitle = Titanium.UI.createLabel({
					text : data_row.node_title,
					font : {
						fontSize : '18sp',
						fontWeight : 'bold'				
					},
				    color : '#f06856',
					width : 'auto',
					textAlign : 'left',
					top : '18dp',
					left : '10dp',
					height : 'auto'//'22dp'
				});

				
				row.add(labelSessionTitle);
				row.add(labelSessionStart);
				row.add(labelSessionSpeaker);
				row.hasChild = false;				
				results.push(row);
			}
		}
		//Titanium.API.info('after for results : ' + print_r(results));
		tableSessions= Titanium.UI.createTableView({
			data : results,
			separatorColor: '#ffffff',
			//headerTitle : ' Zaakceptowane sesje',

		});
		winSessions.add(tableSessions);

		
		winSessions.remove(labelLoading);
		
	
});
