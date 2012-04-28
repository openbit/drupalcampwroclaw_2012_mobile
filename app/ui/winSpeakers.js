// On app start.

var winSpeakers = Titanium.UI.createWindow({
	title : 'Prelegenci',
	backgroundColor : settings.ui.background ,
});
var tabSpeakers = Titanium.UI.createTab({
	title : 'Prelegenci',
	icon:'/speakers.png',
	window : winSpeakers
});

// Define empty table view.
var results = {}
var tableSpeakers= Titanium.UI.createTableView({
	data : results,
	headerTitle : 'Prelegenci'
});


// Get sessions on load window.
Drupal.getSpeakers('getViewSpeakers');


winSpeakers.add(labelLoading);

// Get data from function
Ti.App.addEventListener('getViewSpeakers', function(data) {
	//Ti.API.info('Start addEventListener getViewMyLogs');
	var results = new Array();
	// Prepare data for TableView.	
		for(var key in data) {
			if(key != 'type') {
				//Ti.API.info('for data key: ' + key);
				var data_row = data[key];
				//Titanium.API.info('row data : ' + print_r(data[key]));
												
				var row = Titanium.UI.createTableViewRow();

				var labelSpeakerName = Titanium.UI.createLabel({
					text : data_row.profile_values_profile_first_value + ' ' +data_row.profile_values_profile_last_value,
					font : {
						fontSize : '18sp',
						fontWeight : 'bold'				
					},
				    color : '#f06856',
					width : 'auto',
					textAlign : 'left',
					top : '2dp',
					left : '10dp',
					height : 'auto'//'22dp'
				});

				var labelSpeakerOrg = Titanium.UI.createLabel({
					text : data_row.profile_values_profile_org_value,
					font : {
						fontSize : '14sp',
						fontWeight : 'bold'
					},
					width : 'auto',
					textAlign : 'left',
					top : '20dp',
					left : '10dp',
					height : '20dp'
				});

				 
				row.add(labelSpeakerName);
				row.add(labelSpeakerOrg);
				 
				row.hasChild = false;
				results.push(row);
			}
		}
		//Titanium.API.info('after for results : ' + print_r(results));
		tableSpeakers= Titanium.UI.createTableView({
			data : results,
			separatorColor: '#ffffff',
			//headerTitle : ' Zaakceptowane sesje',

		});
		winSpeakers.add(tableSpeakers);
		winSpeakers.remove(labelLoading);
	
});
