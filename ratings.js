(function(G){

  /*  Returns a string containing today's date in month/day/year format
   */
  function todaysDate() {
    var date = new Date();
    var month = date.getMonth()+1;
    var day = date.getDate();

    var output = (month<10 ? '0' : '') + month + '/' +
        (day<10 ? '0' : '') + day + '/' +
        date.getFullYear();

    return output;
  }
  // Set the date input to today's date.
  G.$date = $(".date");
  G.$date.val(todaysDate());



  var $courseSelection = $(".courses");
  console.log(G.courseList);
  $.each(G.courses, function(index, value) {
    $courseSelection.append($('<option>', {
    text: value
    }));
  });
console.log(G.courses);

})(window);