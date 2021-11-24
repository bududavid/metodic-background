$(".burger").click(function(c){$(".burger, ul").toggleClass("active")}),$(".metodic-plus").click(function(c){$(".metodic-plus, .metodic-content").toggleClass("active")});

var w = window.screen.availWidth;
if(w > 1000){
let number = document.querySelector('h6')
window.addEventListener('mousemove', function(e) {
let x = e.clientX / window.innerWidth;
let y = e.clientY / window.innerHeight;
number.style.transform = 'translate(+' + x * 15 + 'px, +' + y * 15 + 'px)';
});
};