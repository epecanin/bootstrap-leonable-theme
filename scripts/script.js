// Get current date for the copyright msg
$('#year').text(new Date().getFullYear());
$('body').scrollspy({target: '#main-navbar'});


$('#main-navbar a').on('click', function(event){
  if(this.hash !== '' ){
    event.preventDefault();
    const hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function(){
      window.location.hash = hash;
    })
  }
})
