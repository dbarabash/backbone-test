var MainModel = Backbone.Model.extend({
  url: '',
  data: '',
  initialize: function(url) {
  	this.url = url;
  	this.fetch({
  		url: url,
  		dataType: 'json',
  		success: function(data) {
  			this.data = data.image;
  		}
  	});
  },
});

var MainCollection = Backbone.Collection.extend({
  model: MainModel,
  getData: function(url) {
  	var result = this.find(function(page){ return page.get("url") == url; });
  	if (result == null) {
  		result == new MainModel(url);
  	}
  	return result;
  }
});