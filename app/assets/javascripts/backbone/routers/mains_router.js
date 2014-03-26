var MainRouter = Backbone.Router.extend({

  initialize: function() {
  	window.BackboneTest.Routers["router"] = this;
  },

  routes: {
    ""    		: "index",
    "!/"    	: "index",
    "!/news"	: "news",
    "!/about"   : "about"
  },

  index: function() {
//  	var page = collection.get("news");
  },

  news: function() {
//  	var page = collection.get("news");
  },

  about: function() {
//  	var page = collection.get("about");
  }
});