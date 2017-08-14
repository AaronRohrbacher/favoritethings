$(document).ready(function(){
  $("form#favoriteInput").submit(function(event){
    event.preventDefault();
    var favoriteBeverage = $("#favoriteBeverage").val();
    var favoriteColor = $("#favoriteColor").val();
    var favoriteFood = $("#favoriteFood").val();
    var favoriteActor = $("#favoriteActor").val();

    var inputArray=[favoriteBeverage, favoriteColor, favoriteFood, favoriteActor];
    var newArray= [];
    newArray.push(inputArray[0], inputArray[1], inputArray[2]);
    $("#list1").append(newArray[0]);
    $("#list2").append(newArray[1]);
    $("#list3").append(newArray[2]);
  });
  $("#cream").submit(function(event){
    event.preventDefault();
    var iceCreamFlavors = ["flavor1", "flavor2", "flavor3"];
    var newCream = []
    iceCreamFlavors.forEach(function(iceCreamFlavor){
      var flavor = $("#"+iceCreamFlavor).val();
      newCream.push(flavor);
      $("#iceCream").append("<li>"+ flavor +"</li>");

    });
    console.log(newCream);
    console.log(iceCreamFlavors);
  });

  var ids = ["h1", "p", "img"];
  ids.forEach(function(id){
    jQuery(id).click(function() {
      alert("This is a " + id);
      alert("hello");
    });
  })
  // jQuery("h1").click(function() {
  //   alert("This is a header.");
  // });
  //
  // jQuery("p").click(function() {
  //   alert("This is a paragraph.");
  // });
  //
  // jQuery("img").click(function() {
  //   alert("This is an image.");
  // });
});
