$(document).ready(function(){
  $("form").submit(function(event){
    var landtype = $("input#landtype").val();
    var risk = $("input#risk").val();
    var age = $("input#age").val();
    var party = $("input#party").val();
    var exotic = $("input#exotic").val();

    if (landtype === "yes" && risk === "yes" && age != "" && party === "yes" && exotic != ""){
      $(".australia").show();
      $(".switzerland").hide();
      $(".florida").hide();
    } else if (landtype === "no" && risk === "yes" && age != "" && party === "no" && exotic != ""){
      $(".australia").hide();
      $(".switzerland").show();
      $(".florida").hide();
    } else if (landtype === "yes" && risk === "no" && age !="" && party === "no" && exotic != ""){
      $(".australia").hide();
      $(".switzerland").hide();
      $(".florida").show();
    } else {
      alert("Please complete the form.");
    }
  event.preventDefault();
  });
});
