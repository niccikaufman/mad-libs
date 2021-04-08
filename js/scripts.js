$(document).ready(function(){
  $("#formOne").click(function(event){
    event.preventDefault();
    let myArray = [];
    $(".form-control").each(function() {
      myArray.push($(this).val()); 
    });
    $(".person1").text(myArray[0]);
    $(".person2").text(myArray[1]);
    $(".animal").text(myArray[2]);
    $(".exclamation").text(myArray[3]);
    $(".verb").text(myArray[4]);
    $('.noun').text(myArray[5]); 
    $("#story").toggle();
  });
});
