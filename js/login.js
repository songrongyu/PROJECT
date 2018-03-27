function hello(){
        var txt=$('#text').val();
        var psd=$('#password').val();
        var userid=localStorage.setItem('userid',txt);
	   $.ajax({
			type:"get",
			url:"http://datainfo.duapp.com/shopdata/userinfo.php",
			data:{status:'login',userID:txt,password:psd},
			dataType:'json',
			success:function(data){
				console.log(data);
				if(data == 0){
					$('#span').html('用户名不存在');
				}
				else if(data == 2)
				{
					$('#pspan')('密码错误');
				}
				else{
					window.location.href="index.html"
				}
			}
		});
    }