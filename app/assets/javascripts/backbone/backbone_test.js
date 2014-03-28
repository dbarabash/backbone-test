#= require_self
#= require_tree ./templates
#= require_tree ./models
#= require_tree ./views
#= require_tree ./routers

window.BackboneTest = {
  Models: {},
  Collections: {},
  Routers: {},
  Views: {}
};


$(function(){

  var route = new MainRouter(); // Создаём контроллер
  Backbone.history.start();  // Запускаем HTML5 History push    

  var mainCollection = new MainCollection(null, false);
  $("button").each(function(index, element){
  	var elid = $(element)[0].id;
  	window.BackboneTest.Views[elid] = new PageView({
  		id: elid, 
  		collection: mainCollection,
  		router: route,
  	});
  });
  
  setTimeout(function(){ $("#news").click(); }, 50);
});