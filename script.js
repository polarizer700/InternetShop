firstList.onmouseover = function(){
	firstA.style.borderBottom = "none";
  firstA.style.color = "#000000";
}
firstList.onmouseout = function(){
	firstA.style.borderBottom = "1px dashed #ff5816";
  firstA.style.color = "#ff5816";
}

firstList2.onmouseover = function(){
	firstA2.style.borderBottom = "none";
  firstA2.style.color = "#000000";
}
firstList2.onmouseout = function(){
	firstA2.style.borderBottom = "1px dashed #ff5816";
  firstA2.style.color = "#ff5816";
}

firstList3.onmouseover = function(){
	firstA3.style.borderBottom = "none";
  firstA3.style.color = "#000000";
}
firstList3.onmouseout = function(){
	firstA3.style.borderBottom = "1px dashed #ff5816";
  firstA3.style.color = "#ff5816";
}

firstList4.onmouseover = function(){
	firstA4.style.borderBottom = "none";
  firstA4.style.color = "#000000";
}
firstList4.onmouseout = function(){
	firstA4.style.borderBottom = "1px dashed #ff5816";
  firstA4.style.color = "#ff5816";
}

let popup = document.getElementById('mypopup');
let popupMenu = document.getElementById('zvugl');
let popupClose = document.querySelector('.close');
let thanksPopup = document.getElementById('thanksPopup');


popupMenu.onclick = function() {
  popup.style.display = "block";
	document.getElementsByClassName('touch').style.opacity = '1';
}
popupClose.onclick = function() {
  popup.style.display = "none";
}

window.onclick = function(e) {
  if (e.target == popup){
      popup.style.display = "none";
  }else if (e.target == thanksPopup){
    thanksPopup.style.display = "none";
  }
}

let subject = document.getElementsByClassName('subject');

for( let i = 4; i <= 8; i++){
	if( screen.width <= 320){
		subject[i].style.display = "none";
	} else {
		subject.style.display = 'block';
	}
}
