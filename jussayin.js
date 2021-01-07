var slidenr = 0;

showSlides();

function showSlides() {
  var s = document.getElementsByClassName("slides12");
  for (var i=0; i<s.length; i++){
    s[i].style.display = "none";
  }
  slidenr++;
  
  if (slidenr>s.length){slidenr=1}
  
  s[slidenr-1].style.display = "block";
  
  setTimeout(showSlides, 4000);
}

!function(d,s,id){
	var js,fjs=d.getElementsByTagName(s)[0];
	if(!d.getElementById(id)){
		js=d.createElement(s);
		js.id=id;
		js.src='https://weatherwidget.io/js/widget.min.js';
		fjs.parentNode.insertBefore(js,fjs);}}

		(document,'script','weatherwidget-io-js');

    $(document).ready(function(){
  
  $("a").on('click', function(event) {

 
    if (this.hash !== "") {
      
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    } 
  });
});



