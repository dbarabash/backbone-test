var MainRouter = Backbone.Router.extend({
  collection: null,

  initialize: function(options) {
    collection = new MainCollection();
  },

  routes: {
    ""    		: "index",
    "!/"    	: "index",
    "!/news"	: "news",
    "!/about"   : "about"
  },

  index: function() {
  	var page = collection.getData(this.routes["news"]);
  },

  news: function() {
  	var page = collection.getData(this.routes["news"]);
  },

  about: function() {
  	var page = collection.getData(this.routes["about"]);
  }
});