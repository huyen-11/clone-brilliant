const prev = document.getElementById('prev');
const next = document.getElementById('next');
var boxWidth = document.querySelector('.box');
var size = boxWidth.clientWidth;
var index = 0 ;

var typed = new Typed( '#hocbai', {
	strings: [
	"mechanical engingeer",
	"data analyst",
	"physics",
	"scientist",
	"mathematician",
	"computer scientist"
	],
	typeSpeed: 100,
	backSpeed: 100,
  	cursorChar: '',
  	loop: true,
  	smartBackspace: false	
});

typed;

prev.addEventListener('click', prevContainer);
next.addEventListener('click', nextContainer);

function update() {
	var i = 6;
	if (size < 308) {
		i = 13;
	}
	if (index === 0) {
		prev.setAttribute("disabled", "disabled");
	} else {
		prev.removeAttribute("disabled");
	}
	if (index === i) {
		next.setAttribute("disabled", "disabled");
	} else {
		next.removeAttribute("disabled");
	}

	var overlay = document.querySelector('.overlay');
	overlay.style.transform = "translateX(-" + index*(size + 8) + "px)";
}

function nextContainer() {
	index++;
	update();
}
function prevContainer() {
	index--;
	update();
	
}

update();
