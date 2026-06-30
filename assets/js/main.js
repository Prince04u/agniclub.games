
document.addEventListener('DOMContentLoaded',function(){
  var t=document.querySelector('.nav-toggle');var l=document.querySelector('.nav-list');
  if(t&&l){t.addEventListener('click',function(){l.classList.toggle('open');});}
  document.querySelectorAll('a[href^="#"]').forEach(function(a){
    a.addEventListener('click',function(e){
      var id=a.getAttribute('href');if(id.length>1){var el=document.querySelector(id);if(el){e.preventDefault();window.scrollTo({top:el.offsetTop-80,behavior:'smooth'});}}
    });
  });
});
