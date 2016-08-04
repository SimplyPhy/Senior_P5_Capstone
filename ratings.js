(function(G){

  // Store course selection boxes
  var $courseSelection = $('.courses'),
      $sectionSelection, // might not exist at load
      $segmentSelection; // might not exist at load

  // Store other selection boxes
  var $dateSelection = $('.date'),
      $ratingSelection = $('.rating_select'),
      $likeSelection = $('.like'),
      $dislikeSelection = $('.dislike'),
      $questionsSelection = $('.questions'),
      $submitSelection = $('.submit');


  /*  Returns a string containing today's date in month/day/year format
   */
  function todaysDate() {
    var date = new Date();
    var month = date.getMonth()+1;
    var day = date.getDate();

    var output = (month < 10 ? '0' : '') + month + '/' +
        (day < 10 ? '0' : '') + day + '/' +
        date.getFullYear();

    return output;
  }

  // Pre-set the date input to today's date.
  $dateSelection.val(todaysDate());
  $dateSelection.datepicker();


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

  // set global input values
  $ratingSelection.change(function(){
    if($(this).val() > 0) {
      G.rating = $(this).val();
    } else {
      G.rating = undefined;
    }
  });

  $submitSelection.click(function(){

    if ($likeSelection.val().length === 0) {
      G.like = undefined; }
    else {
      G.like = $likeSelection.val();
    }
    if ($dislikeSelection.val().length === 0) {
      G.dislike = undefined;
    } else {
      G.dislike = $dislikeSelection.val();
    }
    if ($questionsSelection.val().length === 0) {
      G.questions = undefined;
    } else {
      G.questions = $questionsSelection.val();
    }
    if ($ratingSelection.val() === 0) {
      G.rating = undefined;
    } else {
      G.rating = $ratingSelection.val();
    }
    if (!courseName) {
      G.courseName = undefined;
      G.courseValue = undefined;
    } else {
      G.courseName = courseName;
      G.courseValue = courseValue;
    }
    if (!sectionName) {
      G.sectionName = undefined;
      G.sectionValue = undefined;
    } else {
      G.sectionName = sectionName;
      G.sectionValue = sectionValue;
    }
    if (!segmentName) {
      G.segmentName = undefined;
      G.segmentValue = undefined;
    } else {
      G.segmentName = segmentName;
      G.segmentValue = segmentValue;
    }
    if (!$dateSelection.val()) {
      G.date = undefined;
    } else {
      G.date = $dateSelection.val();
    }


    console.log("date: " + G.date);
    console.log("course: " + G.courseName + "  ( " + G.courseValue + " )");
    console.log("section: " + G.sectionName + "  ( " + G.sectionValue + " )");
    console.log("segment: " + G.segmentName + "  ( " + G.segmentValue + " )");
    console.log("rating: " + G.rating);
    console.log("like: " + G.like);
    console.log("dislike: " + G.dislike);
    console.log("questions: " + G.questions);

});



})(window);