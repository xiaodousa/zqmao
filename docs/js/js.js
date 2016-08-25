var ZX = {};

$(function(){
	var path = window.location.pathname;
	var index = path.lastIndexOf("/");
	var fileName = path.substring(index + 1, path.length);
    $.ajax({
		url: "https://zqmao.github.io/blog/list.json",
		dataType: "json",
		success: function(data){
			for(var i=0;i<data.length;i++){
				var data_title = data[i].title;
				var data_link = data[i].link;
				
				var data_niubi = "";
				for(var j=0;j<data_title.length;j++){
					data_niubi += "<span>"+data_title.substr(j,1)+"</span>"
				}
				if(fileName == data_link){
					$(".articleName ul").append("<li class='active'><a href=" + data_link + ">" + data_niubi + "</a></li>");
				}else{
					$(".articleName ul").append("<li><a href=" + data_link + ">" + data_niubi + "</a></li>");
				}
			}
		}
	});
	
	ZX.listOutFunc = function(){
		var box1 = $(".list");
		var box2 = $(".main_con_left");
		
		var bt = $("#list_bt");
		
		bt.on("click",function(){
			var tar = $(this);
			if(tar.hasClass("out")){
				tar.removeClass("out");
				box1.removeClass("out");
				box2.removeClass("out");
			}
			else{
				tar.addClass("out");
				box1.addClass("out");
				box2.addClass("out");
			}
			
			
		});
		
		
	}();
	
	

});