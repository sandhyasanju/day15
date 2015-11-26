$(document).ready(function(){
  $("#button2").click(function() {
    $(".section1").hide();
    $(".section2").show();
  });
  $("#button4").click(function() {
    $(".section2").hide();
    $(".section1").show();
  });
  $("#button5").click(function() {
    $("#section").find('input:input, select, textarea').val('');
    $("section").find('input:radio, input:checkbox')
    .removeAttr('checked').removeAttr('selected');
  });
  //$("#section").clear();});
  $("#button6").click(function(){
    var text = $("#section").find("input:input, select, textarea").val();
if(text !== null){
  alert("thank you your details has been saved with us");
}
else {
  alert("please fill all the fields");
}
  });
});
