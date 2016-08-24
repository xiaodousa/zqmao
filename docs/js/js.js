$(function(){

    $.ajax({
		url: "https://zqmao.github.io/blog/list.json",
		dataType: "json",
		success: function(data){
			for(var i=0;i<data.length;i++){
				var data_title = data[i].title;
				var data_link = data[i].link;
				var data_niubi = "";
				for(var j = 0; j < data_title.length; j++){
					data_niubi += "<span>" + data_title.substr(j, 1) + "</span>";
				}
				$(".logo ul").append("<li><a class='link link--yaku' href=" + data_link + ">" + data_niubi + "</a></li>");
			}
		}
	});

});
