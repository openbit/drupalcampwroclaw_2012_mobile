

Drupal.getSessions = function(fireEventName) {	 
	var viewName = 'mobile_sessions';	 
    var data = [];
	var url = settings.restUrl + 'views/' + viewName + '.json';
	Titanium.API.info('getSessions open URL: ' + url);
	// Create a connection inside the variable xhr
	var xhr = Titanium.Network.createHTTPClient();
	
	// Open the xhr
	xhr.open("GET",url);
	
	// Send the xhr
	xhr.send();

	// When the xhr loads we do:
	xhr.onload = function() {		 						
		// Parse (build data structure) the JSON response into an object (data)
		var jsonObject = JSON.parse(this.responseText);
		//Titaniumessions.API.info('== getSessions jsonObject: ' + print_r(jsonObject));
		// Return data as event.
		Ti.App.fireEvent(fireEventName, jsonObject);									 			 				 
	}
	xhr.onerror = function(e) {		
		Titanium.API.info('getSessions ERROR: ' + e.error);		
		Ti.App.fireEvent(fireEventName, 'error');
	};
}

Drupal.getSpeakers = function(fireEventName) {	 
	var viewName = 'mobile_speakers';	 
    var data = [];
	var url = settings.restUrl + 'views/' + viewName + '.json';
	Titanium.API.info('getSessions open URL: ' + url);
	// Create a connection inside the variable xhr
	var xhr = Titanium.Network.createHTTPClient();
	
	// Open the xhr
	xhr.open("GET",url);
	
	// Send the xhr
	xhr.send();

	// When the xhr loads we do:
	xhr.onload = function() {		 						
		// Parse (build data structure) the JSON response into an object (data)
		var jsonObject = JSON.parse(this.responseText);
		//Titaniumessions.API.info('== getSessions jsonObject: ' + print_r(jsonObject));
		// Return data as event.
		Ti.App.fireEvent(fireEventName, jsonObject);									 			 				 
	}
	xhr.onerror = function(e) {		
		Titanium.API.info('getSpeakers ERROR: ' + e.error);		
		Ti.App.fireEvent(fireEventName, 'error');
	};
}
