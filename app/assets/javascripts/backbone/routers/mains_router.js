var MainRouter = Backbone.Router.extend({

  initialize: function() {
  	window.BackboneTest.Routers["router"] = this;
  },

  routes: {
    ""    		: "getnews",
    "news"		: "getnews",
    "about"   	: "getabout"
  },
});