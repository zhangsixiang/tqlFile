var url = window.location.hostname;
var system = {};
var p = navigator.platform;
system.win = p.indexOf("Win") == 0;
system.mac = p.indexOf("Mac") == 0;
system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);
if(system.win){
	$.getScript('https://ip.ws.126.net/ipquery', function(){  
		if(localAddress.city.indexOf('北京') != -1 || localAddress.city.indexOf('南京') != -1){
		  window.location.href = 'https://www.zsxcool.com/404.html';      
		}else{        
		 return;
		}
		console.log(localAddress.province)    
		if(localAddress.province.indexOf('北京市') != -1 || localAddress.province.indexOf('南京市') != -1){
		  window.location.href = 'https://www.zsxcool.com/404.html';      
		}else{        
		 return;      
		}
	});
}