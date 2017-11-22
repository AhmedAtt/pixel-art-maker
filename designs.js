$(document).ready(function (){
  $('#btn-submit').click(function (){
    console.log('Button pressed');
    var height =$('#input_height').val();
    var width =$('#input_width').val();
    console.log('h ='+height);
    console.log('w  ='+width);
    makeGrid(width,height);
  });

  function makeGrid(w,h) {
    $('#pixel_canvas tr').remove();
    console.log("Intiating Grid");
    for(var i=0;i<h;i++){
      var row="<tr>";
      for(var j=0;j<w;j++){
        row+="<td></td>"
      }
      row+="</tr>";
      $('#pixel_canvas').append(row);
    }
    //Assign Click event to a table cell
    $("td").click(function(){
        color =$('#colorPicker').val();
        console.log(color);

        var column = $(this).parent().children().index(this);
        var row = $(this).parent().parent().children().index(this.parentNode);

        var table=document.getElementById('pixel_canvas');
        var currentRow=table.rows[row];
        var cell = currentRow.cells[column];

        $(cell).css({
          'background-color': color
        });
    });
  }


});
