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

  // constructor for organizing completed form data
  function UserInput(date, courseName, courseValue, sectionName, sectionValue, segmentName, segmentValue, rating, like, dislike, questions){

    this.date = date;
    this.courseName = courseName;
    this.courseValue = courseValue;
    this.sectionName = sectionName;
    this.sectionValue = sectionValue;
    this.segmentName = segmentName;
    this.segmentValue = segmentValue;
    this.rating = rating;
    this.like = like;
    this.dislike = dislike;
    this.questions = questions;

    // A more sophisticated UID, or some other form of validation, will be required for the production version
    // of this app, as names/values could change when Udacity makes changes to their courses
    this.UID = courseName + "*" + sectionName + "*" + segmentName;
  }

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


  /* Fills the courses selection box with all course names, with the default selection undefined
   */
  $courseSelection.append(new Option(undefined, undefined));

  for (var i = 0; i < G.courses.length; i++) {
    $courseSelection.append(new Option(G.courses[i].name, i));
  }

  // variable instantiation for unique course values
  var courseName,
      courseValue,
      courseSections,
      sectionName,
      sectionValue,
      sectionSegments,
      segmentName,
      segmentValue,
      UID;

  // performs UI and variable assignment tasks associated with course selection changes
  function courseSelect() {
    $courseSelection.change(function() {

      // reset section and segment values
      sectionName = undefined;
      sectionValue = undefined;
      segmentName = undefined;
      segmentValue = undefined;

      // remove segment selection box, if it exists
      if($segmentSelection) {
        $segmentSelection.remove();
      }

      // if user has selects no course, reset course values and remove section selection box
      if($courseSelection.val() === "") {
        courseName = undefined;
        courseValue = undefined;
        $sectionSelection.remove();
        return;
      }

      /* This loop runs through all courses in the SWDND, assigning the name and value variables,
       * creating a new select tag with class="sections", and populates it with new Options based on the
       * names of the selected course's sections.  It also calls sectionSelect, if it had never been called.
      */
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

          $sectionSelection.append(new Option(undefined, undefined));
          for(var j = 0; j < courseSections.length; j++) {
            $sectionSelection.append(new Option(courseSections[j].name, j));
          }
        }
      }
    });
  } // end courseSelect()
  // courseSelect is wrapped in a function incase it needs to be called again in future versions
  courseSelect(); // call after function definition, or when document is loaded

  // performs UI and variable assignment tasks associated with section selection changes
  function sectionSelect() {
    $sectionSelection.change(function() {

      // reset segment values
      segmentName = undefined;
      segmentValue = undefined;

      // if user has selects no section, reset section values and remove segment selection box
      if($sectionSelection.val() === "") {
        sectionName = undefined;
        sectionValue = undefined;
        $segmentSelection.remove();
        return;
      }

      /* This loop runs through all sections in the currently selected course, assigns the name and value variables,
       * creates a new select tag with class="segments", and populates it with new Options based on the
       * names of the selected section's segments.  It also calls segmentSelect, if it had never been called.
      */
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

          $segmentSelection.append(new Option(undefined, undefined));

          for(var j = 0; j < sectionSegments.length; j++) {
            $segmentSelection.append(new Option(sectionSegments[j], j));
          }

        }
      }
    });
  } // end sectionSelect()

  // performs UI and variable assignment tasks associated with segment selection changes
  function segmentSelect() {
    $segmentSelection.change(function() {

      /* This loop resets segment values if no segment is selected, and otherwise assigns the segment values
       * to the selected segment.
      */
      for(var i = 0; i < sectionSegments.length; i++) {
        if($segmentSelection.val() === "") {
          segmentName = undefined;
          segmentValue = undefined;
          return;
        }

        if($(this).val() == i) {
          segmentName = sectionSegments[i];
          segmentValue = i;
        }
      }
      // add conditions here, or call to function to check if this UID exists in localStorage
    });
  } // end segmentSelect


  $submitSelection.click(function(){

    // set date value
    if (!$dateSelection.val()) {
      date = undefined;
    } else {
      date = $dateSelection.val();
    }

    // set rating value
    if($ratingSelection.val() > 0) {
      rating = $ratingSelection.val();
    } else {
      rating = undefined;
    }

    // if the user input praise, critiques, and/or questions, set them to G
    if ($likeSelection.val().length === 0) {
      like = undefined; }
    else {
      like = $likeSelection.val();
    }
    if ($dislikeSelection.val().length === 0) {
      dislike = undefined;
    } else {
      dislike = $dislikeSelection.val();
    }
    if ($questionsSelection.val().length === 0) {
      questions = undefined;
    } else {
      questions = $questionsSelection.val();
    }
    UID = courseName + "*" + sectionName + "*" + segmentName;
    // console.log(UID);

    var sessionUserInput = {};
    sessionUserInput[UID] = new UserInput(date, courseName, courseValue, sectionName, sectionValue, segmentName, segmentValue, rating, like, dislike, questions);

    localStorage.setItem(UID, JSON.stringify(sessionUserInput));
    // console.log(localStorage[UID]);
    // console.log(JSON.parse(localStorage.getItem(UID)));

    if(localStorage[UID]) {
      var previousInput = JSON.parse(localStorage.getItem(UID));



    } else {


    }

    // log user input
    console.log("date: " + date);
    console.log("course: " + courseName + "  ( " + courseValue + " )");
    console.log("section: " + sectionName + "  ( " + sectionValue + " )");
    console.log("segment: " + segmentName + "  ( " + segmentValue + " )");
    console.log("rating: " + rating);
    console.log("like: " + like);
    console.log("dislike: " + dislike);
    console.log("questions: " + questions);
    console.log(UID);

    G.storage = {};
    var five = 5;
    var location = [];
    location.push(courseValue, sectionValue, segmentValue);//"G.courses[" + courseValue + "].sections[" + sectionValue + "].segments[" + segmentValue + "]";
    // G.storage[location] = new G.UserInput(G.date, G.courseName, G.sectionName, G.segmentName, G.rating, G.like, G.dislike, G.questions);
    // console.log(G.storage[location]);

  });



})(window);