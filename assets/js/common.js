window.addEventListener("load", function(){
    setTimeout(loaded, 100);

}, false);

function loaded(){
    window.scrollTo(0, 1);
}

function handleFirstTab(e) {
  if (e.keyCode === 9) {
    document.body.classList.add('user-is-tabbing');

    window.removeEventListener('keydown', handleFirstTab);
    window.addEventListener('mousedown', handleMouseDownOnce);
  }
}

function handleMouseDownOnce() {
  document.body.classList.remove('user-is-tabbing');

  window.removeEventListener('mousedown', handleMouseDownOnce);
  window.addEventListener('keydown', handleFirstTab);
}

window.addEventListener('keydown', handleFirstTab);

$('.gnb>li').mouseenter(function(){
    if($(this).find('.gnbsub').length){
        $(".gnbsubBg").addClass('on'); 
    }
});
$('.gnb>li').mouseleave(function(){
    if($(this).find('.gnbsub').length){
        $(".gnbsubBg").removeClass('on'); 
    }
});
// header
$('.ham-btn').click(function(){
    $('.ham').addClass('on');
});
$('.ham-close').click(function(){
    $('.ham').removeClass('on');
    $('body').attr('style', '');
});
$('.bot-btn').click(function(){
    $(this).toggleClass('on');
    $(this).next('a').toggleClass('on');
    $(this).next().next().toggleClass('on');
});