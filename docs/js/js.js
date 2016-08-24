$(function(){

    $.ajax({
		url: "list.json",
		dataType: "json",
		success: function(data){
			for(var i=0;i<data.length;i++){
				var data_title = data[i].title;
				var data_link = data[i].link;
				$(".logo ul").append("<li><a href=" + data_link + ">" + data_title + "</a></li>");
			}
		}
	});

});
