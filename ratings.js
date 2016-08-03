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


  // Store .courses selection box
  var $courseSelection = $(".courses");

  /* Fills the courses selection box with all course names
   */
  for (var i = 0; i < G.courses.length; i++) {
    var courseName = G.courses[i].name;
    $courseSelection.append(new Option(courseName, courseName));
  }

})(window);