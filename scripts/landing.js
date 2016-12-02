var animatePoints = function() {

     var points = document.getElementsByClassName('point');

     var revealPoint = function(index_number) {

       points[index_number].style.opacity = 1;
       points[index_number].style.transform = "scaleX(1) translateY(0)";
       points[index_number].style.msTransform = "scaleX(1) translateY(0)";
       points[index_number].style.WebkitTransform = "scaleX(1) translateY(0)";

     }

     for (var i = 0; i < points.length; i++) {

       revealPoint(i)

     }

 };
