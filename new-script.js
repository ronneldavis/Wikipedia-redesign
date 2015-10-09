$(document).ready(function(){

	var menuIcon = document.createElement("img");
	menuIcon.setAttribute("src", "https://cdn0.iconfinder.com/data/icons/slim-square-icons-basics/100/basics-12-128.png");
	$("body").append(menuIcon);
	
	$(menuIcon).css({
		width: 50,
		height: 50,
		top: 10,
		left: 20,
		zIndex: 9999,
		position: "fixed"
	});
	
	$(menuIcon).click(function() {
		$("#mw-navigation").fadeIn();
	});
	
	var logo = document.createElement("img");
	logo.setAttribute("src", "http://ecx.images-amazon.com/images/I/61sftn-3vML.png");
	$("body").append(logo);
	
	$(logo).css({
		width: 150,
		height: 150,
		top: 50,
		left: 50,
		position: "fixed",
	});
	
	
	$("#searchform").prependTo(document.body);
	$("#toc").prependTo(document.body);
	$(".infobox").prependTo(document.body);

	
	$("#toc .toclevel-1").each(function(){
		
		var downArrow = document.createElement("img");
		downArrow.setAttribute("src", "https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_keyboard_arrow_down_48px-128.png");
		downArrow.setAttribute("class", "downArrow");
		
		$(downArrow).css({
			width: 15,
			position: "absolute",
			top: 10,
			right: 10,
		});

		
		if($(this).find("ul").length != 0)
			$(downArrow).prependTo(this);
	});
	
	$(".downArrow").click(function(){
		if( $(this).parent().data("opened") == "yes"){
			$(this).parent().css("height", "20px");
			$(this).parent().data("opened", "no");
		}
		else{
			$(this).parent().css("height", "auto");
			$(this).parent().data("opened", "yes");
		}
	});
	
});