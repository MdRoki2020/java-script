
<!DOCTYPE html>
<html>
  
<head>
    <title>
      Scroll to the top of the
      page using JavaScript/jQuery?
  </title>
    <style>
        .scroll {
            height: 1000px;
            background-color: lightgreen;
        }
    </style>
  
</head>
  
<body>
    <h1 style="color: green">
      GeeksforGeeks
  </h1>
    <b>
      Scroll to the top of the page
      using JavaScript/jQuery?
  </b>
    <p>
      Click on the button below to 
      scroll to the top of the page.
  </p>
    <p class="scroll">
      GeeksforGeeks is a computer
      science portal. 
      This is a large scrollable area.
  </p>
    <button onclick="scrollToTop()">
      Click to scroll to top
  </button>
    <script src="https://code.jquery.com/jquery-3.3.1.min.js">
  </script>
    <script>
        function scrollToTop() {
            $(window).scrollTop(0);
        }
    </script>
</body>
  
</html>