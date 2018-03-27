if(!localStorage.getItem('userid')){
            window.location.href="login.html";
        }
        var userid=localStorage.getItem('userid');
		$.ajax({
			type:'get',
			url:'http://datainfo.duapp.com/shopdata/getCar.php',
			data:{userID:userid},
			dataType:'jsonp',
			success:function(data){
                for(var i=0;i<data.length;i++){
    				$('#aa').html($('#aa').html()+`
                    <li><div id="bb">
                    <input type="checkbox" id="be">
                    <img src="`+data[i].goodsListImg+`">
                    <p>`+data[i].goodsName.slice(0,12)+`</p>
                    <span>￥`+data[i].price+`</span>
                    <input id="min" name="" type="button" value="-" />
                    <input id="quantity" name="" type="text" value="1" />
                    <input id="add" name="" type="button" value="+" /> </div>
                    <div id="dd" goodid="`+data[i].goodsID+`"><img src="img/aa.jpg" />
                    </li>`
    				)
                    $('#dd').click(function(){
                    var ss=$(this).parent();
                    var goodid=this.getAttribute('goodid');
                    console.log(goodid);
                    ss.css('display','none');
                    $.ajax({
                        type:"get",
                        url:"http://datainfo.duapp.com/shopdata/updatecar.php",
                        data:{userID:userid,goodsID:goodid,number:0},
                        dataType:'json',
                        success:function(data){
                            console.log(data);
                        }
                    });
                });
                }
			}
		});