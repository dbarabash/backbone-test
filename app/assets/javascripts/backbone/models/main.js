var MainModel = Backbone.Model.extend({
  id: '',
  data: '',
  initialize: function(id) {
  	this.id = id;
  	window.BackboneTest.Models[id] = this;
  	this.fetch({
  		url: id,
  		dataType: 'json',
  		success: function(data) {
  			this.data = data.image;
  		}
  	});
  },
});

var MainCollection = Backbone.Collection.extend({
  model: MainModel,
  initialize: function() {
  	window.BackboneTest.Collections.main = this;
  },
  getData: function(id) {
  	var result = this.find(function(page){ return page.get("id") == id; });
  	if (result == null) {
  		result == new MainModel(id);
  	}
  	return result;
  }
});