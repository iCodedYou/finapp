console.log("Hello.");

var content = document.querySelector('.header-container'),
    wrapper = document.querySelector('.header-wrapper'),
    shadowTop = document.querySelector('.shadow--top'),
    shadowBottom = document.querySelector('.shadow--bottom'),
    contentScrollHeight = content.scrollHeight - wrapper.offsetHeight;

content.addEventListener('scroll', function(){
  var currentScroll = this.scrollTop / (contentScrollHeight);
  shadowTop.style.opacity = currentScroll * 1.5;
  shadowBottom.style.opacity = 1 - (currentScroll * 0.5);
});
