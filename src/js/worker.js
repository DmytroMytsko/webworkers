console.log('worker thread', WebSocket);

var arr = [];

/*var w2 = new Worker("worker2.js");

w2.onmessage = function(event) {
	switch(event.data.action) {
		case 'init':
			console.log('worker:thread:w2:onmessage:init', +new Date() - event.data.startTime, event.data.initTimeArray, event.data);
			w2.postMessage({action:'sendArray'});
			break;
		case 'sendArray':
			console.log('worker:thread:w2:onmessage:sendArray', event.data.item);
			break;
		default: {}
	}

};*/

//w2.postMessage({action:'init'});

/*function getXmlHttp() {
	var xmlhttp;
	try {
		xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
	} catch (e) {
		try {
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		} catch (E) {
			xmlhttp = false;
		}
	}
	if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
		xmlhttp = new XMLHttpRequest();
	}
	return xmlhttp;
}

//сонхронний
var xmlhttp = getXmlHttp();
xmlhttp.open('GET', '/xhr/test.html', false);
xmlhttp.send(null);
if(xmlhttp.status == 200) {
	alert(xmlhttp.responseText);
}

var xmlhttp = getXmlHttp();
xmlhttp.open('GET', '/xhr/test.html', true);
xmlhttp.onreadystatechange = function() {
	if (xmlhttp.readyState == 4) {
		if(xmlhttp.status == 200) {
			alert(xmlhttp.responseText);
		}
	}
};
xmlhttp.send(null);*/


onmessage = function(event) {
	console.log('worker:onmessage:action:', event.data.action);
	switch(event.data.action) {
		case 'init':

			var n = 1000000;//(30-60ms-firefox-chrome)*1000 = 100000 = 100s = 1m 40s

			var startTime = +new Date();
			/*j = 1;
			
			setTimeout(function gen() {
				console.log('iteration:', j);
				for(var i = 0; i < 1000000; i++) {
					arr.push({		
						name: 	"name000000000000000000000000000000000000_"+i*j,
						name1: 	"name111111111111111111111111111111111111_"+i*j,
						name2: 	"name222222222222222222222222222222222222_"+i*j,
						name3: 	"name333333333333333333333333333333333333_"+i*j,
						name4: 	"name444444444444444444444444444444444444_"+i*j,
						name13: "name133333333333333333333333333333333333_"+i*j,
						name16: "name166666666666666666666666666666666666_"+i*j,
						name17: "name177777777777777777777777777777777777_"+i*j,
						name18: "name188888888888888888888888888888888888_"+i*j,
						name19: "name199999999999999999999999999999999999_"+i*j
					});
				}
				
				if(j<=1) {
					j++;
					setTimeout(gen, 25);
				} else {
					var endTime = +new Date() - startTime;

					postMessage({action: 'init', arr: arr.length, initTimeArray: endTime,startTime: +new Date()});
				}
			}, 100);*/
			for(var i = 0; i < n; i++) {
				arr.push({		
					name: 	"w:name000000000000000000000000000000000000_"+i,
					name1: 	"w:name111111111111111111111111111111111111_"+i,
					name2: 	"w:name222222222222222222222222222222222222_"+i,
					name3: 	"w:name333333333333333333333333333333333333_"+i,
					name4: 	"w:name444444444444444444444444444444444444_"+i,
					name13: "w:name133333333333333333333333333333333333_"+i,
					name16: "w:name166666666666666666666666666666666666_"+i,
					name17: "w:name177777777777777777777777777777777777_"+i,
					name18: "w:name188888888888888888888888888888888888_"+i,
					name19: "w:name199999999999999999999999999999999999_"+i
				});
				/*arr.push({
					index:i, name: "name_"+i,
					index1:i+1, name1: "name11111111111111111111111111111111_"+i,
					index2:i+2, name2: "name22222222222222222222222222222222222222222222222222222222222222_"+i,
					index3:i+3, name3: "name333333333333333333333333333333333333333_"+i,
					index4:i+4, name4: "name44444444444444444444444444444444444444444444444444444444444444444444444444444_"+i,
					index5:i+5, name5: "name555555555555555555555555555_"+i,
					index6:i+6, name6: "name6666666_"+i,
					index7:i+7, name7: "name7777_"+i,
					index8:i+8, name8: "name888888888888888888888888888888888888888_"+i,
					index9:i+9, name9: "name99999999999999999999999_"+i,
					index10:i+10, name10: "name10000000000000000000000000000000000000_"+i,
					index11:i+11, name11: "name11111111111_"+i,
					index12:i+12, name12: "name122222222222222222222_"+i,
					index13:i+13, name13: "name1333333333333333333333333333333333333333333333333333_"+i,
					index14:i+14, name14: "name1444444444_"+i,
					index15:i+15, name15: "name15_"+i,
					index16:i+16, name16: "name16666666666666666666666666666666666666666666666666666666666666666_"+i,
					index17:i+17, name17: "name1777777777777777777777777777777777777777777777_"+i,
					index18:i+18, name18: "name1888888888888888888888888888888888888888888888888888888888888888888888888_"+i,
					index19:i+19, name19: "name19999999999999999999999999999999999999999999999999999999999_"+i,
				});*/
			}
			var endTime = +new Date() - startTime;

				var arr1 = [];
				
				for(var i = 0; i<30000; i++) {
					arr1.push(arr[i]);
				}

				postMessage({action: 'init', arr: JSON.stringify(arr1), initTimeArray: endTime,startTime: +new Date()});
			break;
		case 'sendArray':
			console.log('worker:thread:onmessage:sendArray', arr.length);
			postMessage({action: 'sendArray', item: arr[0]});
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