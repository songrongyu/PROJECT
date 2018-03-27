if(!localStorage.getItem('username')){
    window.location.href="firing.html";
}
$.ajax({
    type:'get',
    url:'http://datainfo.duapp.com/shopdata/getGoods.php',
    dataType:'jsonp',
    success:function(data){
       	for(var i=0;i<data.length;i++){
        	$('#goodList').html($('#goodList').html()+'<li goodID="'
        	+data[i].goodsID +`">
        	<img src="`+data[i].goodsListImg+ ` " alt="">
        	<p>` +data[i].goodsName.slice(0,7)+`...`+`</p>
        	</li>`);
        }
        $('li').on('click',function(){
        	var id=this.getAttribute('goodID');
        	console.log(id);
        	window.location.href="goodsinfo.html#"+id;
        })
    }
})
        /*轮播图*/
		$(document).ready(function () {
            var mySwiper = new Swiper ('.swiper-container', {
		    direction: 'horizontal',
		    loop: true,
		    autoplay:1000,
		  });                           
       });