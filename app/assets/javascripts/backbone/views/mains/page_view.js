var PageView = Backbone.View.extend({
  el: null,
  id: null,
  
  template: _.template("#dataTemplate"),

  initialize: function(id) {
  	this.id = id;
  	window.BackboneTest.Views[id] = this;
    this.bind('page:load', this.pageLoad, this);
  },

  render: function() {
  	this.$el.html(this.template(this.model.get(this.id)));
  	return this;
  },

  events: {
  	"click #news": "changeToNews",
  	"click #about": "changeToAbout"
  },
  
  loadPage: function() {
  	var that = this;
  	this.el = $("#data");
  	
  	$("#" + id).bind("click", render, true);
  },

});

$(function(){
  var collection = new MainCollection(element.id);
  $("button").each(function(index, element){
  	window.BackboneTest.Views[element.id] = new PageView(element.id);
  	window.BackboneTest.Views[element.id].trigger('page:load');
  });
});