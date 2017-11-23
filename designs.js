$(document).ready(function() {

  //Fire the makeGrid Function when submit is clicked

  $('#btn-submit').click(function() {
    var height = $('#input_height').val();
    var width = $('#input_width').val();
    makeGrid(width, height);
  });

  //Function that generates Grid based on user (width,height) input
  function makeGrid(w, h) {
    $('#pixel_canvas tr').remove();
    console.log("Intiating Grid");
    for (var i = 0; i < h; i++) {
      var row = "<tr>";
      for (var j = 0; j < w; j++) {
        row += "<td></td>"
      }
      row += "</tr>";
      $('#pixel_canvas').append(row);
    }

    //Assign Click event to a table cell
    $("td").click(function() {
      color = $('#colorPicker').val();
      $(this).css({
        'background-color': color
      });
    });
  }
});
