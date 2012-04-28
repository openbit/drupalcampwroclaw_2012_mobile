var Drupal = {};
Drupal.user = {};
Drupal.user.uid = 0;
Drupal.user.name = 'Anonymous';
Drupal.user.sessid = '';
Drupal.user.session_name = '';

Drupal.anonymousData = function() {
	Drupal.user = {};
	Drupal.user.uid = 0;
	Drupal.user.name = 'Anonymous';
	Drupal.user.sessid = '';
	Drupal.user.session_name = '';
}

Drupal.login = function(fireEventName, userName, userPass) {
	Ti.API.info('Drupal.login(' + fireEventName + ', ' + userName + ' , ' + userPass + ') ');
	// Check login

	// Pulls the JSON feed data and returns it to caller
	var xhr = Titanium.Network.createHTTPClient();
	var url = settings.restUrl + 'user/login.json';
	var user = {
		username : userName,
		password : userPass,
	}
	Ti.API.info('url: ' + url);
	xhr.open('POST', url);
	xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

	var obj = JSON.stringify(user);

	xhr.send(obj);

	xhr.onload = function() {
		var jsonObject = JSON.parse(this.responseText);

		// fire an app-level event to notify the UI that the JSON data is available
		//Ti.App.fireEvent('net:userLoginReturned', jsonObject);

		//Titanium.API.info('== Drupal.login ONLOAD jsonObject: ' + print_r(jsonObject));

		Drupal.user = jsonObject.user;
		Drupal.user.sessid = jsonObject.sessid;
		Drupal.user.session_name = jsonObject.session_name;

		Titanium.API.info('== Drupal.login ONLOAD Drupal variable: ' + print_r(Drupal.user));

		Ti.App.fireEvent(fireEventName, jsonObject);
	};
	xhr.onerror = function(e) {
		// should do something more robust
		Titanium.API.info('== DRUPAL userLogin e: ' + print_r(e));
		Titanium.API.info('== DRUPAL userLogin error: ' + e.error);
		Drupal.anonymousData();		
		if(strpos(e.error, 'Acceptable: Already logged in as')) {
			Drupal.logout('logOutUser');	
		}
		Ti.App.fireEvent(fireEventName, 'error');

	};
 
};

Drupal.logout = function(fireEventName) {
	Ti.API.info('Drupal.logout(' + fireEventName + ') ');

	// Pulls the JSON feed data and returns it to caller
	var xhr = Titanium.Network.createHTTPClient();
	var url = settings.restUrl + 'user/logout.json';

	Ti.API.info('url: ' + url);
	xhr.open('POST', url);
	xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

	xhr.send();

	xhr.onload = function() {
		var jsonObject = JSON.parse(this.responseText);
		Drupal.anonymousData();	
		Titanium.API.info('== onload sessid: ' + print_r(jsonObject));
		Ti.App.fireEvent(fireEventName, jsonObject);
		
	};
	xhr.onerror = function(e) {		
		Titanium.API.info('userLogin error: ' + e.error);		
		Ti.App.fireEvent(fireEventName, 'error');
	};
};
