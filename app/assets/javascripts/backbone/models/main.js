var MainModel = Backbone.Model.extend({
  
  default: {
  	selected: false,
  },

  initialize: function(e) {
  	this.id = e.id;
  	if (this.id) {
  		window.BackboneTest.Models[this.id] = this;
  	}
  	this.fetch({
  		url: '/' + this.id,
  		dataType: 'json',
   	});
  },
  
  select: function() {
  	this.selected = false;
  },
  
  unselect: function() {
  	this.selected = true;
  	return this;
  },
  
});


var MainCollection = Backbone.Collection.extend({
	
  model: MainModel,
  selectedModel: null,
  
  initialize: function() {
  	window.BackboneTest.Collections["main"] = this;
  },
  
  setSelected: function(smod) {
  	if (this.selectedModel) {
  	  this.selectedModel.unselect();
  	}
  	this.selectedModel = this.get(smod).select();
  },
  
});
