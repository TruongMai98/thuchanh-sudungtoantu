let inputWidth;
let inputHeight;

inputWidth = prompt("enter the width")
inputHeight = prompt("enter the height")

let width = parseInt(inputWidth);
let height = parseInt(inputHeight);
let area = width * height;

document.write("enter width:" + '<br/>' + width);
document.write("<br/>");
document.write('enter height:' + '<br/>' + height);
document.write('<br>');
document.write("the area is: " + area);