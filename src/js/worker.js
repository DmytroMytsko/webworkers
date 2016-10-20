console.log('worker thread');

onmessage = function(event) {
	console.log('worker:onmessage:', event.data.action);
	switch(event.data.action) {
		case 'init':
			var arr = [];

			var n = 10000;//(30-60ms-firefox-chrome)*1000 = 100000 = 100s = 1m 40s

			var startTime = +new Date();
			for(var i = 0; i < n; i++) {
				arr.push({index:i, name: "name_"+i});
			}
			var endTime = +new Date() - startTime;

			postMessage({action: 'init', arr: arr, initTimeArray: endTime,startTime: +new Date()});
			break;
		case 'sendArray':
			console.log('worker:thread:onmessage:sendArray', +new Date() - event.data.startTime, event.data.initTimeArray, event.data);
			break;
		default:{}
	}
};

/*var i = 0;
function timedCount() {
	i = i + 1;
	postMessage({index:i, arr:[]});
	setTimeout("timedCount()",500);
}

timedCount();*/