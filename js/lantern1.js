lastScrollY = 0;
function heartBeat(){
var diffY;
if (document.documentElement && document.documentElement.scrollTop)
diffY = document.documentElement.scrollTop;
else if (document.body)
diffY = document.body.scrollTop
else
{/*Netscape stuff*/}
//alert(diffY);
percent=.1*(diffY-lastScrollY);
if(percent>0)percent=Math.ceil(percent);
else percent=Math.floor(percent);
document.getElementById("leftDiv").style.top = parseInt(document.getElementById("leftDiv").style.top)+percent+"px";
document.getElementById("rightDiv").style.top = parseInt(document.getElementById("rightDiv").style.top)+percent+"px";
lastScrollY=lastScrollY+percent;
//alert(lastScrollY);
}
//下面这段删除后，对联将不跟随屏幕而移动。
window.setInterval("heartBeat()",1);
//-->
//关闭按钮
function close_left2(){
left2.style.visibility='hidden';
}
function close_right2(){
right2.style.visibility='hidden';
}
//显示样式
document.writeln("<style type=\"text\/css\">");
document.writeln("#leftDiv,#rightDiv{position:absolute;}");
document.writeln(".itemFloat{width:100px;height:auto;line-height:5px}");
document.writeln("<\/style>");
//以下为主要内容
document.writeln("<div id=\"leftDiv\" style=\"top:55px;left:10px\">");
//------左侧各块开始
//---L2
document.writeln("<div id=\"left2\" class=\"itemFloat\">");
document.writeln("<img border=0 src='https://cdn.jsdelivr.net/gh/zhangsixiang/tqlFile@master/files/left2.png'>");
document.writeln("<br><a href=\"javascript:close_left2();\" title=\"点击关闭\">×<\/a>");
document.writeln("<\/div>");
//------左侧各块结束
document.writeln("<\/div>");
document.writeln("<div id=\"rightDiv\" style=\"top:55px;right:10px\">");
//------右侧各块结束
//---R2
document.writeln("<div id=\"right2\" class=\"itemFloat\">");
document.writeln("<img border=0 src='https://cdn.jsdelivr.net/gh/zhangsixiang/tqlFile@master/files/right1.png'>");
document.writeln("<br><a href=\"javascript:close_right2();\" title=\"点击关闭\">×<\/a>");
document.writeln("<\/div>");
//------右侧各块结束
document.writeln("<\/div>");
