// JavaScript Document
var curIndex=0; 
//时间间隔 单位毫秒 
var timeInterval=2000; 
var arr=new Array(); 
arr[0]="img/1.png"; 
arr[1]="img/4.jpg"; 
arr[2]="img/2.jpg"; 
arr[3]="img/3.png"; 

setInterval(changeImg,timeInterval); 
function changeImg() 
{ 
var obj=document.getElementById("obj"); 
if (curIndex==arr.length-1) 
{ 
curIndex=0; 
} 
else 
{ 
curIndex+=1; 
} 
obj.src=arr[curIndex]; 
} 