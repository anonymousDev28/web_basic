// reveal 
window.addEventListener('scroll',reveal);

function reveal(){
  var reveals = document.querySelectorAll(".reveal");

  for (let index = 0; index < reveals.length; index++) {
    var windowHeight = window.innerHeight;
    var revealTop = reveals[index].getBoundingClientRect().top;
    var revealPoint = 150;
  
    if(revealTop < windowHeight - revealPoint){
      reveals[index].classList.add("active");
    }else{
      reveals[index].classList.remove("active");
    }
  }
}
