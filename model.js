(function(G){


  G.UserInput = function(date, courseName, courseValue, sectionName, sectionValue, segmentName, segmentValue, rating, like, dislike, questions){

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
  };

  // The entire Senior Web Dev course catalog, complete with course sections and section segments.
  G.courses = [
    {
      name: "Welcome to the Nanodegree",
      sections: [
        {
          name: "Welcome to the Senior Web Developer Nanodegree",
          segments: [
            "Welcome to the Nanodegree"
          ]
        },
        {
          name: "Nanodegree Orientation",
          segments: [
            "Quiz: Projects and Progress",
            "Quiz: Career Development Opportunities",
            "Connecting with Your Community",
            "Support from the Udacity Team",
            "How Does Project Submission Work?",
            "Quiz: Integrity and Mindset",
            "What If I want to Move Faster?",
            "Quiz: How Do I Find Time for My Nanodegree?",
            "Final Tips",
            "Wrapping Up"
          ]
        }
      ]
    },
    {
      name: "Building High Conversion Web Forms",
      sections: [
        {
          name: "Efficient Inputs Part 1",
          segments: [
            "Course Intro",
            "Quiz: Fix This Form",
            "Luke Interview Part 1",
            "Why Care about Forms",
            "The Principles of Useful Forms",
            "Form Fixing Strategies",
            "Death to Dropdowns!",
            "HTML5 Inputs",
            "Quiz: Pick an Input",
            "Quiz: Datalist Quiz",
            "LukeW Interview Part 2",
            "Lesson Outro"
          ]
        },
        {
          name: "Efficient Inputs Part 2",
          segments: [
            "Lesson 2 Intro",
            "Pop Quiz HS",
            "The Label Element",
            "Make A Label",
            "Interview with Luke W. Part 3",
            "Label Sizing and Positions",
            "Placeholders",
            "Quiz: Placeholder",
            "Calendars",
            "Quiz: Calendars",
            "Typos",
            "Autocomplete",
            "Quiz: Autocomplete",
            "Autofocus",
            "Use Past Data to Fill Inputs",
            "Validation",
            "Numeric Validation",
            "Validate Some Inputs",
            "Constraints Validation API",
            "Validate Some Data",
            "Interview with Luke W part 4",
            "Lesson 2 Outro"
          ]
        },
        {
          name: "Fast Forms",
          segments: [
            "Lesson 3 Intro",
            "Form Principles",
            "Duck It's Storming Brains",
            "LukeW Interview part 5",
            "I Just Need to Check My Payment Info",
            "But I'm Not Ready to Commit",
            "Quiz: Draw a Conclusion",
            "Finish on Another Device",
            "Quiz: Fast Forms = More Conversions",
            "Interview with Luke W part 6",
            "One Weird Trick",
            "Location",
            "Quiz: Build a Checkout",
            "Interview with Luke W part 7",
            "Lesson 3 Outro"
          ]
        },
        {
          name: "Touch Support",
          segments: [
            "Lesson 4 Intro",
            "It Can't be That Bad, Right?",
            "Touch Pseudo States",
            "Too Much Touch",
            "Build a Better UI",
            "Interview with Luke W part 8",
            "Quick Practice with Event Listeners",
            "Touch Events",
            "Interact with a Single Element",
            "Final Project Instructions and Rubric",
            "Course Outro"
          ]
        }
      ]
    },
    {
      name: "Web Tooling & Automation",
      sections: [
        {
          name: "Introduction",
          segments: [
            "Course Intro",
            "Cost Effectiveness",
            "Common Sense",
            "On to the course!"
          ]
        },
        {
          name: "Productive Editing",
          segments: [
            "Intro",
            "From Notepad to IDE",
            "Set Up Your Editor",
            "Build In Editor Magic",
            "Your Favorite Editor",
            "Shortcuts",
            "Extending Your Editor",
            "Using the Palette",
            "Lesson Outro"
          ]
        },
        {
        name: "Powerful Builds",
          segments: [
            "Lesson Intro",
            "Overview of Build Tools",
            "Core Qualities of a Great Build Tool",
            "Getting Started with Gulp",
            "Install Gulp",
            "Hello Gulp",
            "Grunt Tasks vs Gulp Streams",
            "Making CSS Suck Less",
            "Using Gulp",
            "Using Gulp 2",
            "Now, It's Your Turn",
            "Using Gulp",
            "Watching SCSS Files for Change",
            "Lesson Outro"
          ]
        },
        {
        name: "Expressive Live Editing",
          segments: [
            "Lesson Intro",
            "Advantages of Live Editing",
            "Different Approaches for Live Editing",
            "Using Browser-Sync",
            "Lesson Outro"
          ]
        },
        {
        name: "How to Prevent Disasters",
          segments: [
            "Lesson Intro",
            "Why Rely on Tools to Prevent Bad Things",
            "Linting",
            "Quiz: How Does Linting Help You Code",
            "Setting Up ESLint",
            "Setting up ESLint in Gulp",
            "Unit Testing in Gulp",
            "Unit Testing in Gulp Part 2",
            "What's Next?",
            "Continuous Integration",
            "Lesson Outro"
          ]
        },
        {
        name: "Conclusion",
          segments: [
            "Lesson Intro",
            "Scaffolding",
            "Lesson Outro"
          ]
        }
      ]
    },
    {
      name: "Using Promises",
      sections: [
        {
          name:"Creating Promises",
          segments: [
            "Course Introduction",
            "Callbacks vs Promises",
            "Callbacks vs Thens",
            "Course Map",
            "Promise Timeline",
            "Quiz: Async Scenarios",
            "Syntax",
            "Quiz: Write Your First Promise",
            "Quiz: Wrapping readyState",
            "IMPORTANT! Working w/Exoplanet Explorer",
            "Quiz: Wrap an XHR",
            "Web Technologies",
            "Quiz: Fetch API",
            "What Happens Next"
          ]
        },
        {
          name: "Chaining Promises",
          segments: [
            "Fetch and Show First Planet",
            "Error Handling Strategies",
            "Chained Thenables",
            "Series vs Parallel Requests",
            "Array Methods and Promises",
            "Promises with .forEach",
            "Promises with .map",
            "All Promises",
            "Course Outro",
            "Exoplanets 101",
            "Bonus Question: Parallel Requests"
          ]
        }
      ]
    },
    {
      name: "Building Offline-First Web Apps",
      sections: [
        {
          name: "The Benefits of Offline First",
          segments: [
            "Intro",
            "The Problem",
            "The Benefits of Offline First",
            "What Can Slow Us Down",
            "What Does Online First Look Like",
            "What Are Ways To Be Offline First",
            "Introducing the Demo App",
            "Installing the Demo App",
            "Running the Demo App",
            "Exploring the Demo Apps Code",
            "Changing Connection Types",
            "Testing Lie Fi Mode",
            "Introducing Service Workers"
          ]
        },
        {
          name: "Introducing the Service Worker",
          segments: [
            "An Overview of Service Workers",
            "Scoping Quiz",
            "Adding a Service Worker To the Project",
            "Quiz: Registering a Service Worker",
            "The Service Worker Lifecycle",
            "Quiz: Enabling Service Worker Dev Tools",
            "Quiz: Service Worker Dev Tools",
            "Quiz: Service Worker Dev Tools 2",
            "Service Worker Dev Tools Continued",
            "Hijacking Requests",
            "Quiz: Hijacking Requests 1 Quiz",
            "Hijacking Requests 2",
            "Quiz: Hijacking Requests 2 Quiz",
            "Hijacking Requests 3",
            "Quiz: Hijacking Requests 3 Quiz",
            "Caching and Serving Assets",
            "Quiz: Install and Cache Quiz",
            "Quiz: Cache Response Quiz",
            "Updating the Static Cache",
            "Quiz: Update Your CSS Quiz",
            "Quiz: Update Your CSS 2",
            "Adding UX to the Update Process",
            "Quiz: Adding UX Quiz",
            "Triggering an Update",
            "Quiz: Triggering an Update Quiz",
            "Quiz: Caching the Page Skeleton"
          ]
        },
        {
          name: "IndexedDB and Caching",
          segments: [
            "Introducing the IDB Promised Library",
            "Getting Started with IDB",
            "Getting Started with IDB Part 2",
            "More IDB",
            "Using the IDB Cache and Display Entries",
            "Quiz: Using IDB Cache",
            "Quiz: Using IDB 2",
            "Quiz: Cleaning IDB",
            "Cache Photos",
            "Quiz: Cache Photos Quiz",
            "Cleaning Photo Cache",
            "Quiz: Cleaning Photo Cache Quiz",
            "Quiz: Caching Avatars",
            "Outro"
          ]
        }
      ]
    },
    {
      name: "Web Accessibility",
      sections: [
        {
          name: "Lesson 1 - Overview",
          segments: [
            "Introduction to Accessibility",
            "What is Accessibility",
            "Understanding the diversity of users",
            "Diversity of Users (Broken Arm)",
            "Diversity of Users (Blindness)",
            "Diversity of Users (Audio)",
            "Diversity of Users (Baby)",
            "Diversity of Users (Concussion)",
            "Diversity of Users (RSI)",
            "Using a Screen Reader",
            "Quiz: Experiencing a screen reader",
            "Checklists",
            "Quiz: Using WebAIM Checklist",
            "Gear Shift into Course Practicalities",
          ]
        },
        {
          name: "Lesson 2 - Focus",
          segments: [
            "Introduction to Focus",
            "What is Focus?",
            "Experiencing Focus",
            "DOM Order Matters",
            "Fixing DOM Order",
            "Using Tabindex",
            "Deciding whats in focus",
            "Which Elements Should have Focus?",
            "Managing Focus",
            "Quiz: Manage Focus Yourself",
            "Skip Links",
            "Focus in Complex Components",
            "Keyboard Design Patterns",
            "Quiz: Implementing Keyboard Event Listeners",
            "Offscreen Content",
            "Quiz: Implementing Offscreen Content",
            "Modals and Keyboard Traps",
            "Lesson 2 Outro"
          ]
        },
        {
          name:"Lesson 3 - Semantics Basics",
          segments: [
            "Semantics Introduction",
            "Assistive Technology",
            "Affordances",
            "Experiencing Affordances",
            "Semantics and Assistive Technology",
            "Experience Using a Screenreader",
            "Role, Name, Value",
            "Experience a Screen Reader 2",
            "The Accessibility Tree",
            "Matching simple DOM and A11y Tree",
            "Semantics in Native HTML",
            "Quiz: Writing Semantic HTML Quiz",
            "Writing Semantic HTML: The Name Game",
            "Quiz: Labeling Input Elements",
            "Text Alternatives",
            "Quiz: Labeling Images With ALT Text",
            "Lesson 3 Outro"
          ]
        },
        {
          name: "Lesson 4 - Semantics: Navigating Content",
          segments: [
            "Semantics - Navigating content - Intro",
            "Navigating with a screen reader",
            "Navigating by Headings",
            "Using Headings",
            "Quiz: Using Headings",
            "Other navigational options",
            "Other navigational options example",
            "Link Text",
            "Quiz: Link Text",
            "Landmarks",
            "Quiz: Landmarks",
            "Outro Lesson 4"
          ]
        },
        {
          name: "Lesson 5 - ARIA",
          segments: [
            "Intro to Semantics: ARIA",
            "Why ARIA",
            "First Steps with ARIA",
            "What can ARIA do for you?",
            "Roleplaying",
            "Custom radio button group with ARIA",
            "More Ways to Label",
            "Quiz: Name That Element!",
            "Breather",
            "Default Semantics and Landmarks",
            "ARIA Relationships",
            "Quiz: Combo Box",
            "Hidden In Plain Sight",
            "Quiz: Name That Element Round 2",
            "Recap so far",
            "Introducing ARIA Live",
            "Atomic Relevant Busy",
            "Recap",
            "Quiz: Modal Dialog Quiz",
            "Outro Lesson 5"
          ]
        },
        {
          name: "Lesson 6 - Style",
          segments: [
            "Introduction to Style",
            "Working with focus styles",
            "Writing your own focus styles",
            "Input Modality",
            "Styling with Aria",
            "Quiz: Styling with ARIA",
            "Responsive design for multi-device",
            "Responsive design for multi-device Pt. 2",
            "Mobile Screen Readers",
            "Mobile Screen Readers iOS",
            "Mobile Screen Readers Android",
            "Quiz: Using Mobile Screen Readers",
            "Seque to Color & Contrast",
            "Meeting Contrast Requirements",
            "Quiz: Contrast Audit",
            "Don't convey info with color alone",
            "High Contrast Mode",
            "Lesson 6 Outro",
            "Course Outro"
          ]
        }
      ]
    },
    {
      name: "Front-End Frameworks",
      sections: [
        {
          name: "Features of Single Page Apps",
          segments: [
            "Welcome",
            "How To Be Successful",
            "Quiz: Explore a Front End Application",
            "Server-based and AJAX Powered Sites",
            "Quiz: Server and Client Apps",
            "Single Page Apps",
            "Frameworks",
            "Core Framework Components",
            "Code and File Organization",
            "Quiz: Templates, URLs, and Events",
            "Storage - the absent component?",
            "Features of Specialized Frameworks",
            "Interview with Dhruv",
            "Outro"
          ]
        },
        {
          name: "Examine a Framework's Source",
          segments: [
            "A Framework's Base Features",
            "What is a template?",
            "Backbone Project Setup",
            "Underscore Templates",
            "Constructor Function",
            "Constructor Function Quiz",
            "Walk-thru the `template` function",
            "Filling the template with data",
            "Interview with Scott",
            "Template `variables` and JS's `with`",
            "Template Bug Quiz",
            "Build Your Own Templating Function Quiz",
            "addEventListener",
            "Setting up Backbone Events",
            "Walk-thru Backbone's `Events.on`",
            "Quiz: Adding Events Quiz",
            "Walk-thru Backbone's `Events.trigger`",
            "Quiz: Events Quiz",
            "Quiz: Build Your Own Event System Quiz",
            "A Router & The Backbone.history Object",
            "Quiz: Routing Quiz",
            "hashchange & pushState",
            "Stepping thru Backbone.history.start()",
            "Quiz: Backbone's Fragment Count Quiz",
            "Quiz: Lesson Highlight Summary Quiz",
            "Outro"
          ]
        },
        {
          name: "Angular",
          segments: [
            "Welcome to Angular",
            "Angular what?",
            "Quiz Repos & Feedback Chrome Extension",
            "Quiz: Up and Running with Angular Quiz",
            "The Angular Ecosystem",
            "Quiz: New Feature 1 Quiz",
            "Quiz: New Feature 2 Quiz",
            "A Simple App",
            "Installing Yeoman",
            "A Structured App",
            "An Angular Module",
            "Quiz: Create a Module Quiz",
            "Bootstrap the App",
            "Quiz: Bootstrap an App Quiz",
            "Templates and Expressions",
            "Quiz: Expression Quiz",
            "Interview with Scott",
            "Angular Controllers",
            "Quiz: Angular Controllers Quiz",
            "Scope",
            "Scope/$scope in Controllers",
            "Quiz: Scope Quiz",
            "Take a Breather",
            "The long awaited Directives",
            "Quiz: Directives Quiz",
            "Dependency Injection Skit",
            "Services",
            "Quiz: Services Quiz",
            "Order Manager Feature",
            "A couple of ways to inject in Angular",
            "Routing via UI-Router",
            "Managing Application State",
            "Nested Views",
            "Quiz: Routing Quiz",
            "Outro"
          ]
        },
        {
          name: "Ember",
          segments: [
            "Welcome to Ember",
            "Required ES6 Knowledge",
            "Installing Ember-CLI",
            "Using Ember-CLI To Generate A New App",
            "Quiz: Ember-CLI Shortcuts & Alias Quiz",
            "An Ember App's File Structure",
            "Routes, Routers, and Templates - Oh My!",
            "Generating a Route & Template",
            "Quiz Repos & Feedback Chrome Extension",
            "Quiz: Route & Template Quiz",
            "Viewing A Menu Item",
            "Nested Routes",
            "Quiz: Nested Routes Quiz",
            "Interview with Allen",
            "Handlebars",
            "Quiz: Handlebars Quiz",
            "Loading Dynamic Data",
            "Updating the Item Template",
            "Quiz: Dynamic Data Quiz Part 1",
            "Quiz: Dynamic Data Quiz Part 2",
            "Components Ember-style Custom HMTL",
            "Quiz: Component Quiz",
            "Order Tracking Feature",
            "Consuming a Service",
            "Quiz: Using Services Quiz",
            "Responding To User Actions",
            "Quiz: Actions Quiz",
            "Outro"
          ]
        }
      ]
    },
    {
      name: "Client-Server Communications",
      sections: [
        {
          name: "HTTP's Request/Response Cycle",
          segments: [
            "Intro",
            "HTTP Requests",
            "HTTP Requests 2",
            "Fetching a single request",
            "Fetching a single request 2",
            "Getting Multiple Requests",
            "Exercise Setup",
            "Quiz: DevTools Quiz",
            "Sending data with a POST Request",
            "From XHR to Fetch",
            "Quiz: Fetch Quiz",
            "Outro"
          ]
        },
        {
          name: "HTTP/1",
          segments: [
            "HTTP Intro",
            "The Netcat Command",
            "HTTP Verbs",
            "HTTP Verbs 2",
            "HTTP Verbs Quiz",
            "Common Response Headers",
            "Request Headers Quiz",
            "REST",
            "REST Quiz",
            "Performance Basics",
            "Performance Details",
            "Performance Details 2",
            "Outro"
          ]
        },
        {
          name: "HTTPS",
          segments: [
            "HTTPS Intro",
            "Securing HTTP",
            "MITM Quiz 1",
            "MITM Quiz 2",
            "TLS and Certificate Authorities",
            "TLS: Cryptography Primer",
            "TLS: Hashing",
            "Hashing Quiz",
            "Certificate Authority Signatures",
            "The TLS Handshake",
            "SSL Error Quiz",
            "Mixed Content",
            "Mixed Content Quiz",
            "Outro"
          ]
        },
        {
          name: "HTTP/2",
          segments: [
            "HTTP/2 Intro",
            "HTTP/1 Problem: Head of Line Blocking",
            "HTTP/1 Problem: Uncompressed Headers",
            "HTTP/1 Problem: Security",
            "HTTP/2 Improvements",
            "Quiz: HTTP/1 vs HTTP/2 Quiz",
            "Working with HTTP/2",
            "Quiz: Development Techniques for HTTP/2 Quiz",
            "Outro"
          ]
        },
        {
          name: "Security",
          segments: [
            "Security Intro",
            "Origins",
            "Origins 2",
            "Overriding Same Origin Policy",
            "CORS",
            "Preflight Request with CORS Quiz 1",
            "Preflight Request with CORS Quiz 2",
            "Preflight Request with CORS Quiz 3",
            "Security Exploit - CSRF",
            "CSRF Quiz",
            "Security Exploit - XSS",
            "XSS Quiz",
            "Security Outro",
            "Course Outro"
          ]
        }
      ]
    }
  ];
console.log(G.courses);


  // I need a global constructor function that produces new courses, in all their glory, and which will
  // eventually need to be compatible with localStorage for storage.


})(window);