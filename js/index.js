const table = $("#pixelCanvas");

// Select size input

function makeGrid() {

    const gridHeight = $("#input_height").val();
    for (var x = 0; x < gridHeight; x++) {
        table.append("<tr></tr>");
    }

    const gridWidth = $("#input_width").val();
    for (var y = 0; y < gridWidth; y++) {
        $("tr").append("<td></td>");
    }
}

// Submit button

const submit = $('#submitButton');

submit.click(function (event) {
    event.preventDefault();
    table.empty();
    makeGrid();

});


// Select color input
const colorPicker = $("#colorPicker");
table.on("click",  "td", function (e) {
  const currentCell = $(this);
  const color = colorPicker.val();
  colorPicker.css("background-color", color);
  if  (currentCell.css("background-color") === colorPicker.css("background-color")) {
      currentCell.css("background-color", "white");
  } else {
      currentCell.css("background-color", color);
  }
});

/*

table.on("dblclick", "td", function () {
    $(this).css("background-color", "white");

});
*/

// Draw

/*table.on("click", "td", function () {
    $(this).css("background-color", $("#colorPicker").val());

});
*/
table
.on('mousedown','td',function(ev){
  ev.preventDefault();
  table.on('mouseover','td',function(e){
    const col = $('#colorPicker').val();
    $(e.target).css('background', col)
  });
})
$('body').on('mouseup',function(){
  table.off("mouseover");
});