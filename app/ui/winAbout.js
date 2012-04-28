var winAbout = Titanium.UI.createWindow({
	title : 'Konferencja',
	backgroundColor : settings.ui.background ,
});
var tabAbout = Titanium.UI.createTab({
	title : 'Konferencja',
	icon:'/info.png',
	window : winAbout
});


var webviewAbout = Titanium.UI.createWebView({url:'/app/ui/webview/about.html'}); 
winAbout.add(webviewAbout); 
