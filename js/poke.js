$(function(){
	var id;
	id = 1;
	pokebycode();
	$("#boto").click(function() {
		--id;
		if(id < 1) id = 6;
		pokebycode();
	});

	$("#boto2").click(function() {
		++id;
		if(id > 6) id = 1;
		pokebycode();
	});

	function pokebycode() {
		$.get("http://51.144.236.83:8080/pokemons/"+id,function(data) {
		$("#col1").text(data.num);
		$("#col2").attr("src", data.images[0].front);
		$("#col3").attr("src", data.images[1].front_shiny);
		$("#col4").text(data.name);
		if (data.types.length > 1) $("#col5").text(data.types[0].type.name + " " + data.types[1].type.name);
		else $("#col5").text(data.types[0].type.name);
		$("#col6").text(data.moves.HM || "None");

	},"json");		
	}

	var code;
	$("#search").click(function() {
		code = $("#box").val();
		poketable(code);
	});

	function poketable(code) {
		var url = "http://51.144.236.83:8080/pokemons?num="+code;
		console.log(url);
		$.get(url,function(data) {

		data = data[0];

		$("#col1").text(data.num);
		$("#col2").attr("src", data.images[0].front);
		$("#col3").attr("src", data.images[1].front_shiny);
		$("#col4").text(data.name);
		if (data.types.length > 1) $("#col5").text(data.types[0].type.name + " " + data.types[1].type.name);
		else $("#col5").text(data.types[0].type.name);
		$("#col6").text(data.moves.HM || "None");

	},"json");
	}
});