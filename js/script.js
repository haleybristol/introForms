$(document).ready(function(){
  $("form").submit(function(event){
    var landtype = $("input#landtype").val();
    var risk = $("input#risk").val();
    var exotic = $("input#exotic").val();
    var party = $("input#party").val();
    var dolphin = $("input#dolphin").val();

    if (landtype === "yes" && risk === "yes" && exotic != "" && party === "yes" && dolphin != ""){
      $(".australia").show();
      $(".switzerland").hide();
      $(".florida").hide();
    } else if (landtype === "no" && risk === "yes" && exotic != "" && party === "no" && exotic != ""){
      $(".australia").hide();
      $(".switzerland").show();
      $(".florida").hide();
    } else if (landtype === "yes" && risk === "no" && exotic !="" && party === "no" && dolphin != ""){
      $(".australia").hide();
      $(".switzerland").hide();
      $(".florida").show();
    } else {
      $(".australia").hide();
      $(".switzerland").show();
      $(".florida").hide();
    }
  event.preventDefault();
  });
});
