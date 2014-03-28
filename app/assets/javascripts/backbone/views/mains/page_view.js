var PageView = Backbone.View.extend({
  id: null,
  router: null,
  el: 'body',
  
  initialize: function(e) {
  	this.id = e.id;
  	this.router = e.router;
  	window.BackboneTest.Views[e.id] = this;
	this.collection.add({ id: this.id });
	this.model = this.collection.get(this.id);
	this.router.on('route:get' + this.id, this.changeRoute, this);
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
  
  changeRoute: function() {
  	$('button[disabled]').each(function(index,e) {
  		$(e).removeAttr('disabled');
  	});
	$("#" + this.id).attr('disabled', 'disabled');

	this.render();
  },
  
  getPage: function(e) {
  	if ($(e.target).attr("id") == this.id) {
		this.router.navigate(this.id, {trigger:true});
	}
  }

});
