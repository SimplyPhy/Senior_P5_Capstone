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
  G.$date = $('.date');
  G.$date.val(todaysDate());


  // Store selection boxes
  var $courseSelection = $('.courses'),
      $sectionSelection,
      $segmentSelection;

  /* Fills the courses selection box with all course names, with the default selection empty
   */
  $courseSelection.append(new Option('', 0));

  for (var i = 0; i < G.courses.length; i++) {
    $courseSelection.append(new Option(G.courses[i].name, i));
  }

  var courseName,
      courseValue,
      courseSections,
      sectionName,
      sectionValue,
      sectionSegments,
      segmentName,
      segmentValue;

  function courseSelect() {
    $courseSelection.change(function() {

      sectionName = "";
      sectionValue = "";
      segmentName = "";
      segmentValue = "";

      if($segmentSelection) {
        $segmentSelection.remove();
      }

      for(var i = 0; i < G.courses.length; i++) {
        if($(this).val() == i) {

          courseName = G.courses[i].name;
          courseValue = i;
          courseSections = G.courses[i].sections;

          if($('.sections').length === 0) {
            $('.courses').first().after('<select name="sections" class="sections"></select>');
            $sectionSelection = $('.sections');
            sectionSelect();
          }
          $sectionSelection.empty();

          $sectionSelection.append(new Option('', 0));
          for(var j = 0; j < courseSections.length; j++) {
            $sectionSelection.append(new Option(courseSections[j].name, j));
          }
        }
      }
    });
  }
  courseSelect(); // move this

  function sectionSelect() {
    $sectionSelection.change(function() {

      segmentName = "";
      segmentValue = "";

      for(var i = 0; i < courseSections.length; i++) {
        if($(this).val() == i) {

          sectionName = courseSections[i].name;
          sectionValue = i;
          sectionSegments = courseSections[i].segments;

          if($('.segments').length === 0) {
            $('.sections').first().after('<select name="segments" class="segments"></select>');
            $segmentSelection = $('.segments');
            segmentSelect();
          }
          $segmentSelection.empty();

          $segmentSelection.append(new Option('', 0));

          for(var j = 0; j < sectionSegments.length; j++) {
            $segmentSelection.append(new Option(sectionSegments[j], j));
          }

        }
      }
    }); // add segmentSelection function, and make it so when new course is selected, the sectionSelect box disappears and the values are reset
  }

  function segmentSelect() {
    $segmentSelection.change(function() {
      for(var i = 0; i < sectionSegments.length; i++) {
        if($(this).val() == i) {

          segmentName = sectionSegments[i];
          segmentValue = i;
        }
      }
    });
  }

})(window);