
var moduloAngular = angular.module("appUsuarios", []);

// Creación del controlador principal
var controlador = moduloAngular.controller("appController", [
		"$scope",
		"$log",
		"$http",
		function($scope, $log, $http) {

			$scope.usuarioInfo = [];
			//$scope.codigoUsuario = usuario.codigo;
			$scope.usuario={};
			
			$http({
				method : 'GET',
				url : 'datos/datosUsuarios.json'
			}).success(function(data, status, headers, config) {
				$scope.usuarioInfo = data;

			}).error(
					function(datos, status, headers, config) {

						alert("Error carga de datos servicio $http\n"
								+ "Código HTTP error: " + status);
					});

			$log.debug("Creado scope del controlador");
			
			$scope.enviar = function(datos){
				
				var usuario = {
						codigo: datos.codigo,
						nombre: datos.nombre,
						email: datos.email
				}
				
				$scope.usuarioInfo.push(usuario);
			}
			
			$scope.eliminar = function(codigo){
				$scope.usuarioInfo.splice(codigo,1);
			}
			

		} ]);