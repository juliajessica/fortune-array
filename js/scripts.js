//Back end logic
var luckyEventArray = [];
var unLuckyEventArray = [];
var luckyCount = 0;
var unLuckyCount = 0;

//Front end logic
$(document).ready(function(){
  $("form#luck_survey").submit(function(event){
    event.preventDefault();
 debugger;
    $("input:checkbox[name=lucky-name]:checked").each(function(){
      var luckyCount = $(this).val();
      $('#lucky-responses').append(luckyEventArray + "<br>");
      luckyEventArray.push(luckyCount);
    });
    $("input:checkbox[name=unlucky-name]:checked").each(function(){
      var unLuckyCount = $(this).val();
      $('#unlucky-responses').append(unLuckyEventArray + "<br>");
      unLuckyEventArray.push(unLuckyCount);
  });

  var luckyCount = luckyEventArray.length;
  var unluckyCount = unLuckyEventArray.length;

  if (luckyCount > unluckyCount) {
    $("#luckOutput").text("You are a lucky BUTT!");
  } else if (unluckyCount > luckyCount) {
    $("#luckOutput").text("You have no luck!");
  }  else if (unluckyCount === luckyCount) {
    $("#luckOutput").text("You are neutrally lucky and unlucky!");
  } else {
    console.log("Error! No values returned from this function!");
  }
    $('#luck_survey').hide();
  });
});
