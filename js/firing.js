$(document).ready(function () {
            var mySwiper = new Swiper ('.swiper-container', {
		    direction: 'horizontal',
		    loop: true,
		    pagination: '.swiper-pagination',
		    scrollbar: '.swiper-scrollbar',
		    
		  });                           
        });
        function hello(){
            var button=$('#button')
            var username=localStorage.setItem('username',button);
        	window.location.href="register.html";
        }