var winSponsors = Titanium.UI.createWindow({
	title : 'Sponsorzy',
	backgroundColor : settings.ui.background ,
});
var tabSponsors = Titanium.UI.createTab({
	title : 'Sponsorzy',
	icon:'/sponsors.png',
	window : winSponsors
});

var webviewSponsors = Titanium.UI.createWebView({url:'/app/ui/webview/sponsors.html'}); 
winSponsors.add(webviewSponsors); 
