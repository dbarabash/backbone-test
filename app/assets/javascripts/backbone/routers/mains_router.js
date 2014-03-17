var MainRouter = Backbone.Router.extend({
  main: null,

  initialize: function(options) {
    main = new MainCollection();
//    main.reset(options.mains);
  },

  routes: {
    "index"    : "index",
    "news" 	   : "page1",
    "about"    : "page2"
  },

  index: function() {
  },

  news: function() {
  },

  about: function() {
  }
});