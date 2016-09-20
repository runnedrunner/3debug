$("#add-button").click(function() {
  console.log("4");
  $("#add-display").html(4);
})

$("#picture-button").click(function() {
  $("#picture-display").html('<img src="https://i.ytimg.com/vi/alB3TDZMKDQ/maxresdefault.jpg" alt="some_text" style="width:600;height:400;"></img>');
})
var counter = 0;
$("#counter-button").click(function() {
  counter++;
  console.log(counter);
  $("#counter-display").html(counter);
  
})
