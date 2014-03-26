var PageView = Backbone.View.extend({
  id: null,
  el: 'body',
  
  initialize: function(e) {
  	this.id = e.id;
  	window.BackboneTest.Views[e.id] = this;
	this.collection.add({ id: this.id });
	this.model = this.collection.get(this.id);
//   	this.model.on('change',this.render,this);
//   	this.model.on('change:selected',this.render,this);
  },

  render: function() {
	var element = $("#dataTemplate").tmpl(this.model.toJSON());
	$("#data").empty();
	element.appendTo($("#data"));
  	return this;
  },

  events: {
  	'click button': 'getPage',
  },
  
  getPage: function(e) {
  	if (e.target.id != this.id) 
  		return;
//  	this.collection.setSelected(this.id);
  	this.render();
  }

});

$(function(){

  var router = new MainRouter(); // Создаём контроллер
  Backbone.history.start();  // Запускаем HTML5 History push    

  var mainCollection = new MainCollection(null, false);
  $("button").each(function(index, element){
  	var elid = $(element)[0].id;
  	window.BackboneTest.Views[elid] = new PageView({
  		id: elid, 
  		collection: mainCollection
  	});
  });
  
  setTimeout(function(){$("#news").click()},500);
});