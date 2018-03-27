var Id= window.location.hash.slice(1);
		//console.log(Id);
		$.ajax({
			type:'get',
			url:'http://datainfo.duapp.com/shopdata/getGoods.php',
			data:{goodsID:Id},
			dataType:'jsonp',
			success:function(data){
				console.log(data[0]);
				var imgs=JSON.parse(data[0].imgsUrl);
				//console.log(imgs);
				for(var i=0;i<imgs.length;i++){
					$('.swiper-wrapper').html($('.swiper-wrapper').html()+
						'<div class="swiper-slide"><img src="'+imgs[i]+'" alt=""></div>'
					);
					$('.swiper-container').html($('.swiper-container').html()+
						'<div class="swiper-pagination"></div>	'+
				    '<div class="swiper-scrollbar"></div>'
					);
				}
				$('.msg').html($('.msg').html()+
						'<h4>'+ data[0].goodsName+'</h4>'+
						'<span>￥'+data[0].price+'</span>'+
						'<p><span>优惠:&nbsp;&nbsp;'+data[0].discount+'折</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;销售:&nbsp;'+data[0].buynumber+'&nbsp;件</p><p>'+data[0].detail+`</p>`
					)
				var mySwiper = new Swiper ('.swiper-container', {
			    direction: 'horizontal',
			    loop: true,
			    pagination: '.swiper-pagination',
			    scrollbar: '.swiper-scrollbar',
			    autoplay:1500,
			  	});
			}
	});
	function buy(){
		var userid=localStorage.getItem('userid');
		$.ajax({
			type:"get",
			url:"http://datainfo.duapp.com/shopdata/updatecar.php",
			data:{userID:userid,goodsID:Id},
			dataType:'json',
			success:function(data){
				console.log(data);
				if(data ==1){
					alert('已成功添加至购物车');
				}else{
					alert('数据更新失败');
				}
				// window.location.href="gouwuche.html"
				
			}
		});
	}