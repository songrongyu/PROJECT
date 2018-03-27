function hello(){
        	var txt=$('#text').val();
        	var psd=$('#password').val();
            var rpsd=$('#rpassword').val();
            var span=$('#span');
            var sp=$('#sp');
            var rsp=$('#rsp');
        	//console.log(psd);
	  		$.ajax({
				type:"get",
				url:"http://datainfo.duapp.com/shopdata/userinfo.php",
				data:{status:'register',userID:txt,password:psd},
            	dataType:'json',
				success:function(data){
					console.log(data);
					if(data == 0){
						span.html('用户名错误');
					}
                    if(psd !==rpsd ){
                        sp.html('密码不一致');
                    }
					if(data == 1){
						window.location.href="login.html";
					}
				}
		});
    }