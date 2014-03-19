var AboutView = Backbone.View.extend({
  el: null,
  
  template: _.template("#dataTemplate"),

  initialize: function() {
    this.bind('page:load', this.pageLoad, this);
  },

  render: function(url) {
  	this.$el.html(this.template(this.model.get(url)));
  	return this;
  },

  events: {
  	"click #news": "changeToNews",
  	"click #about": "changeToAbout"
  },
  
  loadPage: function() {
  	var that = this;
  	this.el = $("#data");
  	
  	this.el
  },
  
  changeToNews: function() {
  	this.render("news");
  },
  
  changeToAbout: function() {
  	this.render("about");
  }

});