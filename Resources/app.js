Ti.include('activity.js');

var win1 = Titanium.UI.createWindow({
    backgroundColor:'#fff'
});

win1.open();


var act = activityIndicator({message: 'How long do you want to wait?', win: win1});

act.show();
