angular.module('myLanguageApp').controller('SeguridadController', function(){
  	$.ajax({
		type: "GET",
		url: "http://localhost:5001/usuario/listar",
		data: "",
		async: true,
		success:function(data){
			var usuarios = JSON.parse(data);
			var rpta = "";
			_.each(usuarios, function(usuario) {
			   //console.log(usuario);
			   rpta = rpta + "<tr><td>" + usuario.usuario + "</td>" + "<td>" + usuario.correo + "</td>" + "<td>" + usuario.momento + "</td></tr>";
			});
			$("#tablita").children("tbody").append(rpta);
		}
	});

  	$( "#botonsito" ).click(function() {
		console.log("AAAAAAAAA");
	});
});