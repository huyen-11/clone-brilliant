const prev = document.getElementById('prev');
const next = document.getElementById('next');

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
  	loop: false	
});

typed;

prev.addEventListener('click', prevContainer);
next.addEventListener('click', nextContainer);

function update() {
	if (index === 0) {
		prev.setAttribute("disabled", "disabled");
	} else {
		prev.removeAttribute("disabled");
	}
	if (index === 5) {
		next.setAttribute("disabled", "disabled");
	} else {
		next.removeAttribute("disabled");
	}

	var overlay = document.querySelector('.overlay');
	overlay.style.transform = "translateX(-" + index*560 + "px)";
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
