$.getScript('https://ip.ws.126.net/ipquery', function(){  
	 console.log(localAddress.city)
	if(localAddress.city.indexOf('北京') != -1 || localAddress.city.indexOf('南京') != -1){
	  window.location.href = 'https://blog.zsxcool.com/404.html';      
	}else{        
	 return;
	}
	console.log(localAddress.province)    
	if(localAddress.province.indexOf('北京市') != -1 || localAddress.province.indexOf('南京市') != -1){
	  window.location.href = 'https://blog.zsxcool.com/404.html';      
	}else{        
	 return;      
	}
});