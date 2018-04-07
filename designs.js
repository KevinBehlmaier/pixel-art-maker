// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

var size = document.getElementById('sizePicker');
var pixelCanvas = document.getElementById('pixelCanvas');
var color = document.getElementById('colorPicker');

color.addEventListener("click", function(){});

function makeGrid() {
  var height = document.getElementById('inputHeight').value;
  var width = document.getElementById('inputWeight').value;

  while (pixelCanvas.children.length > 0) pixelCanvas.removeChild(pixelCanvas.lastChild);

  for (var i = 0; i < height; i++) {
	  var tr = document.createElement('tr')
    pixelCanvas.appendChild(tr)
    for (var j = 0; j < width; j++) {
      var td = document.createElement('td')
      tr.appendChild(td)
      td.addEventListener("click", fillSquare)
  	}

  }
  // Your code goes here!
};



function fillSquare () {
    this.setAttribute("style", `background-color: ${color.value}`);
}
