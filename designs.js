// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

//define variables
var height,
	width,
	color;
//define constants
var canvas = $('#pixelCanvas');
var form = $('#sizePicker');

function appendTable(rows, columns) {
	for (var i = 1; i <= rows; i++) {
		canvas.append('<tr></tr>');
		for (var j = 1; j <= columns; j++) {
			canvas.children().last().append('<td></td>');
		};
	};
}

function makeGrid() {
	//grab canvas parameters
	height = $('#inputHeight').val();
	width = $('#inputWidth').val();
	//clear any canvas already drawn
	canvas.children().remove();
	//draw canvas
	appendTable(height, width);
}

//make grid on submit
form.submit(function(event) {
	makeGrid();
	event.preventDefault();
});

canvas.on('click', 'td', function() {
	color = $('#colorPicker').val();
	$(this).css('background-color', color);
});