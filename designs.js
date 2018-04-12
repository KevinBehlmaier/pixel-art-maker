// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

var size = document.getElementById('sizePicker');
var pixelCanvas = document.getElementById('pixelCanvas');
var color = document.getElementById('colorPicker');



function makeGrid() {
  var height = document.getElementById('inputHeight').value;
  var width = document.getElementById('inputWeight').value;

  while (pixelCanvas.children.length > 0) pixelCanvas.removeChild(pixelCanvas.lastChild);

  for (var i = 0; i < height; i++) {
	  var tr = document.createElement('tr')
    pixelCanvas.appendChild(tr)
    for (var j = 0; j < width; j++) {
      let td = document.createElement('td');
      tr.appendChild(td);
      td.addEventListener("mousedown", function() {
        fillSquare(td);
      });

      td.addEventListener("mouseenter", function (e) {
        if (e.buttons === 1) fillSquare(td);
      });
  	}

  }
  // Your code goes here!
};

function fillSquare (td) {
    td.setAttribute("style", `background-color: ${color.value}`);
}
