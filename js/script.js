$(document).ready(function(){
  $("form").submit(function(event){
    var landtype = $("input#landtype").val();
    var risk = $("input#risk").val();
    var age = $("input#age").val();

    if (landtype === "yes" && risk === "yes" && age != ""){
      $(".australia").show();
      $(".switzerland").hide();
    } else if (landtype === "no" && risk === "yes" && age != ""){
      $("#australia").hide();
      $("#switzerland").show();
    } else {
      alert("Please complete the form.")
    }
  event.preventDefault();
  });
});
